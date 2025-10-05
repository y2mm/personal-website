#!/usr/bin/env bash
set -e
cd /app

# Ensure dirs exist
mkdir -p /app/node_modules /app/.cache /home/node/.npm

# If running as root, fix ownership so the node user can write,
# then re-exec this script as 'node'
if [ "$(id -u)" = "0" ]; then
  chown -R node:node /app/node_modules /app/.cache /home/node/.npm || true
  exec su -s /bin/bash -c "$0 $*" node
fi

LOCKFILE="package-lock.json"
STAMP_DIR=".cache"
STAMP_FILE="${STAMP_DIR}/lock.sha"

mkdir -p "${STAMP_DIR}"

if [ -f "${LOCKFILE}" ]; then
  CURR_LOCK_HASH="$(sha256sum ${LOCKFILE} | awk '{print $1}')"
else
  CURR_LOCK_HASH="no-lock"
fi

if [ -f "${STAMP_FILE}" ]; then
  PREV_LOCK_HASH="$(cat ${STAMP_FILE})"
else
  PREV_LOCK_HASH="none"
fi

if [ ! -d "node_modules" ] || [ "${CURR_LOCK_HASH}" != "${PREV_LOCK_HASH}" ]; then
  echo "🔧 Installing dependencies (lock change or missing node_modules)..."
  if [ -f "${LOCKFILE}" ]; then
    npm ci
  else
    npm install
  fi
  echo "${CURR_LOCK_HASH}" > "${STAMP_FILE}"
else
  echo "✅ Dependencies up-to-date."
fi

exec "$@"