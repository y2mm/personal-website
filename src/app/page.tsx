type Project = { title: string; blurb: string; href: string; tags: string[] };

const projects: Project[] = [
  { 
    title: "LaTeX AI Autocomplete", 
    blurb: "AI-powered Chrome extension for Overleaf that boosted LaTeX editing speed by 70% with context-aware suggestions.",
    href: "https://github.com/y2mm", 
    tags: ["JavaScript", "HTML/CSS", "AI Models", "Chrome Extension"] 
  },
  { 
    title: "Spotify Wrapped", 
    blurb: "Full-stack web app with 10+ interactive pages of personalized music statistics, scalable to 500+ users.",
    href: "https://github.com/y2mm", 
    tags: ["Python", "Django", "JavaScript", "Heroku"] 
  },
  { 
    title: "Atlanta Food Finder", 
    blurb: "Comprehensive food-finder web app with 300+ restaurants, Google Maps integration, and advanced filtering.",
    href: "https://github.com/y2mm", 
    tags: ["Python", "Django", "Google Maps API", "Figma"] 
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I&apos;m Youssef Mashaly.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              CS @ Georgia Tech · Cybersecurity & Info/Networks · Expected Dec 2026 · GPA: 3.8
            </p>
            <div className="mt-6 flex gap-4">
              <a className="btn btn-secondary" href="/documents/Youssef_Mashaly.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/img/profile.jpg" 
              alt="Youssef Mashaly - Software Engineer at Georgia Tech" 
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
              I&apos;m a Computer Science student at Georgia Tech specializing in Cybersecurity and Information Networks, 
              maintaining a 3.8 GPA and expected to graduate in December 2026. I&apos;m passionate about full-stack development, 
              AI research, and building scalable solutions that make a real impact.
            </p>
            <p className="text-muted mb-4">
              My experience spans from reducing customer approval times by 90% at Mylo fintech to advancing autonomous 
              vehicle safety research at Georgia Tech. I excel at turning complex problems into elegant, efficient solutions 
              using modern technologies and best practices.
            </p>
            <p className="text-muted mb-6">
              When I&apos;m not coding, you&apos;ll find me involved in GreyHat Cybersecurity Club, contributing to Wreck Racing, 
              or participating in the Arab Student Organization. I&apos;m always excited to collaborate on innovative projects 
              and discuss the latest in tech and cybersecurity.
            </p>
            
            <div className="skills-section">
              <h3 className="font-medium mb-3">Technologies & Skills:</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4 className="text-sm font-medium mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-1">
                    <span className="tag">Java</span>
                    <span className="tag">Python</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">SQL</span>
                    <span className="tag">C</span>
                    <span className="tag">R</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="text-sm font-medium mb-2">Frameworks & Tools</h4>
                  <div className="flex flex-wrap gap-1">
                    <span className="tag">React.js</span>
                    <span className="tag">Next.js</span>
                    <span className="tag">NestJS</span>
                    <span className="tag">Django</span>
                    <span className="tag">AWS</span>
                    <span className="tag">Docker</span>
                    <span className="tag">PyTorch</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="text-sm font-medium mb-2">Databases & APIs</h4>
                  <div className="flex flex-wrap gap-1">
                    <span className="tag">PostgreSQL</span>
                    <span className="tag">REST</span>
                    <span className="tag">GraphQL</span>
                    <span className="tag">OpenAPI</span>
                    <span className="tag">OAuth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <h2 className="font-semibold">Experience</h2>
        <ul className="mt-6 space-y-4">
          <li className="card">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">Software Engineering Intern — Mylo</div>
              <div className="text-sm text-muted">June 2025 – Aug 2025</div>
            </div>
            <div className="text-sm text-muted mb-3">Cairo, Egypt • Next.js · NestJS · AWS · PostgreSQL</div>
            <ul className="text-sm text-muted space-y-2">
              <li>• Reduced customer credit approval time by 90% by automating consumer onboarding processes with Next.js and Amazon S3</li>
              <li>• Engineered scalable audit logging system capturing 1,000+ daily user actions with NestJS, PostgreSQL, and GraphQL APIs</li>
              <li>• Implemented role-based authorization using TypeORM and OpenAPI REST APIs, improving security and operations</li>
              <li>• Built modular React components with configurable layouts, reducing code duplication and enhancing scalability</li>
            </ul>
          </li>
          <li className="card">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">Research Assistant — Georgia Tech</div>
              <div className="text-sm text-muted">Jan 2025 – Present</div>
            </div>
            <div className="text-sm text-muted mb-3">Atlanta, Georgia • PyTorch · CARLA · AI Research</div>
            <ul className="text-sm text-muted space-y-2">
              <li>• Building hybrid AI driving models analyzing autonomous vs. human driving behavior to improve vehicle safety</li>
              <li>• Increased lane-change prediction accuracy by 37% through PyTorch neural network hyperparameter optimization</li>
              <li>• Enhanced model reliability using Behavior Cloning and Deep Reinforcement Learning for real-world deployment</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2 className="font-semibold">Projects</h2>
        <div className="mt-6 grid grid-md-2">
          {projects.map((p) => (
            <a key={p.title} href={p.href} className="card">
              <div className="text-lg font-medium">{p.title}</div>
              <p className="mt-4 text-sm text-muted">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2 className="font-semibold">Contact</h2>
        <div className="mt-6 space-y-4">
          <p className="text-muted">
            Let&apos;s connect! I&apos;m always interested in discussing new opportunities, 
            collaborating on projects, or chatting about technology and cybersecurity.
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
              💼 LinkedIn
            </a>
            <a 
              href="https://github.com/y2mm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
