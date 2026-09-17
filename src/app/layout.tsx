import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from '../components/ThemeToggle';

export const metadata: Metadata = {
  title: "Youssef Mashaly — Software Engineering & Agentic AI",
  description: "Georgia Tech Computer Science student graduating December 2026. Experience in agentic AI at IBM, full-stack development at Mylo, and AI driving research.",
  metadataBase: new URL("https://www.youssefmashaly.me"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Youssef Mashaly — Software Engineering & Agentic AI",
    description: "Georgia Tech CS student with experience in agentic AI at IBM, full-stack development at Mylo, and AI driving research.",
    url: "https://www.youssefmashaly.me",
    siteName: "Youssef Mashaly",
    images: [{ url: "/img/profile.JPG", alt: "Youssef Mashaly" }],
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <header>
          <nav className="container">
            <Link href="/" className="nav-brand-logo">
              <img 
                src="/logos/logo.jpeg" 
                alt="Youssef Mashaly" 
                className="logo"
              />
            </Link>
            <div className="nav-controls">
              <div className="nav-links">
                <a href="#experience" className="nav-btn">Experience</a>
                <a href="#projects" className="nav-btn">Projects</a>
                <a href="#contact" className="nav-btn">Contact</a>
              </div>
              <div className="nav-separator"></div>
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="container text-sm text-muted" style={{paddingTop: '2.5rem', paddingBottom: '2.5rem'}}>
          © {new Date().getFullYear()} Youssef Mashaly
        </footer>
      </body>
    </html>
  );
}
