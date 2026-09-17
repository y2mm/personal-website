type Project = { title: string; blurb: string; details: string; tags: string[] };

const projects: Project[] = [
  { 
    title: "LaTeX AI Autocomplete", 
    blurb: "AI-powered Chrome extension for Overleaf that boosted LaTeX editing speed by 70% with context-aware suggestions.",
    details: "Integrated asynchronous REST API pipelines for multiple AI models and built an interface that tracks the cursor to render inline suggestions.",
    tags: ["JavaScript", "HTML/CSS", "REST APIs", "Chrome Extension"]
  },
  { 
    title: "Spotify Wrapped", 
    blurb: "Led a team of 5 to build a full-stack web app with 10+ interactive pages of personalized music statistics.",
    details: "Implemented authentication, CSRF protection, internationalization, dark mode, and a responsive UI. Improved runtime efficiency by 50% by refactoring backend queries and removing unused logic.",
    tags: ["Python", "Django", "JavaScript", "HTML/CSS", "JUnit", "Agile Scrum"]
  },
];

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C", "Bash", "R", "HTML/CSS", "Assembly"],
  },
  {
    title: "AI & Systems",
    skills: ["Agentic AI", "LLM Orchestration", "MCP", "Prompt Engineering", "System Design", "Async Programming", "PyTorch", "IBM watsonx Orchestrate", "Langfuse", "AgentOps"],
  },
  {
    title: "Frameworks & Cloud",
    skills: ["React.js", "Next.js", "NestJS", "Django", "Docker", "AWS"],
  },
  {
    title: "Databases & APIs",
    skills: ["PostgreSQL", "MySQL", "REST APIs", "GraphQL", "Hasura", "Swagger/OpenAPI", "OAuth"],
  },
  {
    title: "Development",
    skills: ["Application Development", "Backend Development", "API Development", "Web Development", "Data Processing", "Cloud Computing", "Low-Latency Optimization"],
  },
  {
    title: "Engineering Practices",
    skills: ["Git/GitHub", "JUnit", "Unit Testing", "CI/CD", "Test-Driven Development", "Object-Oriented Programming"],
  },
];

const experience = [
  {
    company: "IBM",
    role: "Software Engineering Intern (Agentic AI)",
    dates: "May 2026 – Aug 2026",
    context: "New York, NY · Python · MCP · Agentic AI",
    highlights: [
      "Architected and built an agentic AI analytics platform, from 9+ stakeholder discovery interviews through system design and implementation, enabling natural-language analysis of engineering evaluation data.",
      "Engineered 8 modular MCP tools with flexible argument handling, selective data retrieval, and caching to eliminate redundant pulls and reduce context-window usage and data-transfer overhead.",
      "Developed asynchronous Python data retrieval pipelines that reduced enterprise data-retrieval latency by 91.7%.",
      "Built release-aware data normalization workflows for cross-release analytics across evaluation datasets.",
      "Created planner routing and 5 AI skills to orchestrate regression, trend, delta, audit, and failure analysis.",
    ],
  },
  {
    company: "Mylo",
    role: "Software Engineering Intern",
    dates: "June 2025 – Aug 2025",
    context: "Cairo, Egypt · Next.js · NestJS · Amazon S3 · PostgreSQL",
    highlights: [
      "Reduced customer credit approval time by 90% by automating consumer onboarding for Mylo’s digital consumer finance platform with Next.js and Amazon S3.",
      "Engineered an audit-logging system with NestJS, PostgreSQL, and GraphQL, capturing 1,000+ daily actions.",
      "Implemented secure role-based access control (RBAC) using TypeORM and REST APIs.",
      "Built reusable React components with configurable layouts, reducing code duplication and enhancing scalability.",
    ],
  },
  {
    company: "ACT Driving Sim Lab",
    role: "Undergraduate Research Assistant",
    dates: "Jan 2025 – Dec 2025",
    context: "Atlanta, GA · PyTorch · CARLA · Behavior Cloning · Deep Reinforcement Learning",
    highlights: [
      "Extended hybrid AI driving models using Behavior Cloning and Deep Reinforcement Learning to analyze autonomous vs. human driving behavior and improve lane-change decision-making and vehicle safety.",
      "Optimized PyTorch neural-network hyperparameters, increasing lane-change prediction accuracy by 37%.",
      "Integrated and validated models in CARLA through visual and numerical testing across driving scenarios.",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text-section">
            <div className="hero-text">
              <h1>
                Hi, I&apos;m Youssef Mashaly.
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted">
                CS @ Georgia Tech · Agentic AI · Full-stack Development
              </p>
            </div>
            <div className="hero-button">
              <a className="btn btn-secondary" href="https://github.com/y2mm" target="_blank" rel="noopener noreferrer">
                <img src="/icons/github.png" alt="GitHub" className="btn-icon" />
                GitHub
              </a>
              <a className="btn btn-secondary" href="https://linkedin.com/in/youssef-mashaly" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin.png" alt="LinkedIn" className="btn-icon" />
                LinkedIn
              </a>
              <a className="btn btn-secondary" href="/documents/Youssef_Mashaly.pdf" target="_blank" rel="noopener noreferrer">
                <img src="/icons/resume.svg" alt="Resume" className="btn-icon" />
                Resume
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/img/profile.JPG" 
              alt="Youssef Mashaly"
              className="profile-photo"
            />
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about">
        <h2 className="font-semibold">About Me</h2>
        <div className="mt-6 max-w-4xl">
          <div className="about-content">
            <p className="text-lg mb-4">
              I&apos;m Youssef, a Computer Science student at Georgia Tech. Outside of school and work,
              I enjoy working on cars, staying active, and spending time outdoors.
            </p>
            <p className="text-muted mb-4">
              In my free time, you&apos;ll often find me playing soccer or pickleball. I also love heading out
              for a hike or spending a day at the beach — both are great ways to unwind and get outside.
            </p>
            <p className="text-muted mb-6">
              On campus, I&apos;m involved in Wreck Racing and the Arab Student Organization.
            </p>
            
            <div className="skills-section">
              <h3 className="font-medium mb-3">Technologies & Skills:</h3>
              <div className="skills-grid">
                {skillCategories.map((category) => (
                  <div key={category.title} className="skill-category">
                    <h4 className="text-sm font-medium mb-2">{category.title}</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.skills.map((skill) => <span key={skill} className="tag">{skill}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <h2 className="font-semibold">Experience</h2>
        <ul className="mt-6 space-y-4">
          {experience.map((job) => (
            <li key={job.company} className="card">
              <div className="card-heading mb-2">
                <h3 className="text-lg font-medium">{job.role} — {job.company}</h3>
                <div className="text-sm text-muted card-date">{job.dates}</div>
              </div>
              <div className="text-sm text-muted mb-3">{job.context}</div>
              <ul className="achievement-list text-sm text-muted space-y-2">
                {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2 className="font-semibold">Projects</h2>
        <div className="mt-6 grid grid-md-2">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-4 text-sm text-muted">{p.blurb}</p>
              <p className="text-sm text-muted">{p.details}</p>
              <div className="mt-4 flex flex-wrap">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm">
          <a href="https://github.com/y2mm" target="_blank" rel="noopener noreferrer">Explore my work on GitHub →</a>
        </p>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <h2 className="font-semibold">Education</h2>
        <div className="card mt-6">
          <div className="card-heading mb-2">
            <h3 className="text-lg font-medium">Georgia Institute of Technology</h3>
            <div className="text-sm text-muted card-date">Graduating December 2026</div>
          </div>
          <p className="mb-2">Bachelor of Science in Computer Science</p>
          <p className="text-sm text-muted">Information/Internetworks and Cybersecurity · Atlanta, GA</p>
          <p className="text-sm text-muted">
            <strong>Coursework:</strong> Data Structures &amp; Algorithms, Computer Networking, Information Security,
            Cybersecurity Management, Databases, Computer Architecture, Systems &amp; Networks, Network Security,
            and Applied Combinatorics.
          </p>
          <p className="text-sm text-muted">
            <strong>Organizations:</strong> Wreck Racing, Arab Student Organization.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2 className="font-semibold">Contact</h2>
        <div className="mt-6 space-y-4">
          <p className="text-muted">
            Let&apos;s connect! I&apos;m interested in software engineering opportunities and collaborating on
            projects in agentic AI, full-stack development, and cybersecurity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:youssef.a.mashaly@gmail.com" 
              className="btn btn-secondary"
            >
              📧 Email Me
            </a>
            <a 
              href="https://linkedin.com/in/youssef-mashaly" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <img src="/icons/linkedin.png" alt="LinkedIn" className="btn-icon" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/y2mm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <img src="/icons/github.png" alt="GitHub" className="btn-icon" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
