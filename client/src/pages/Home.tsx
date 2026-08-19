/**
 * Signal / Systems design: editorial technical profile with ink surfaces, warm paper panels,
 * Signal Cobalt accents, offset composition, system labels, and concise evidence-led content.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const portraitUrl = "/manus-storage/muhammad-uzair-portrait-signal_72dd0b17.png";
const aiImageUrl = "/manus-storage/ai-systems-abstract_9edf11ad.png";
const systemImageUrl = "/manus-storage/software-architecture-detail_47f2fd59.png";
const markUrl = "/manus-storage/mu-signal-mark_8ef06f56.png";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ucdexpert", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-uzair-9255433a0/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:hk202504@gmail.com", icon: Mail },
];

const focusAreas = [
  "Full-stack product engineering",
  "LLM applications & AI workflows",
  "Responsive interfaces & design systems",
];

const skills = [
  {
    index: "01",
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    index: "02",
    title: "Backend",
    items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    index: "03",
    title: "Systems",
    items: ["Docker", "AWS", "CI/CD", "Linux", "Vercel"],
  },
];

const projects = [
  {
    type: "Full Stack",
    number: "01",
    title: "E-Commerce Platform",
    summary:
      "A full-featured commerce build with cart workflows, payment integration, and an administrative dashboard designed for production performance.",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    repo: "https://github.com/ucdexpert/e-commerce",
    live: "https://e-commerce-mu-wheat-87.vercel.app/",
    color: "cobalt",
  },
  {
    type: "Frontend",
    number: "02",
    title: "Task Management App",
    summary:
      "A collaborative task workspace focused on real-time updates, drag-and-drop planning, and focused team coordination.",
    stack: ["React", "TypeScript", "Framer Motion", "Zustand"],
    repo: "https://github.com/ucdexpert/final-repo-phase-3",
    live: "https://auto-task-manager.vercel.app/dashboard",
    color: "paper",
  },
  {
    type: "AI / Education",
    number: "03",
    title: "Physical AI Textbook",
    summary:
      "An interactive Docusaurus learning platform with structured modules and an AI chatbot for contextual questions and answers.",
    stack: ["Docusaurus", "React", "JavaScript", "AI Chatbot"],
    repo: "https://github.com/ucdexpert/physical-ai-textbook-frontend001-heckathon",
    live: "https://physical-ai-textbook-frontend001-he.vercel.app/",
    color: "ink",
  },
  {
    type: "Backend",
    number: "04",
    title: "REST API Service",
    summary:
      "A scalable API service with authentication, rate limiting, and clear documentation designed around secure, dependable integration.",
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
    repo: "https://github.com/ucdexpert/",
    live: "https://api-docs-demo.vercel.app",
    color: "warm",
  },
];

const journey = [
  {
    span: "2023 — Present",
    kind: "Work",
    title: "Full Stack Developer",
    detail: "Self-employed / Freelance",
    copy: "Building scalable applications with Next.js, TypeScript, Python, CI/CD, and LLM-based workflows.",
  },
  {
    span: "2023 — 2026",
    kind: "Education",
    title: "Diploma in Agentic AI",
    detail: "Governor House IT Initiative · In progress",
    copy: "Practical work in modern web technologies, LLM applications, agentic AI, automation, and real-world projects.",
  },
  {
    span: "2019 — 2021",
    kind: "Work",
    title: "Frontend Developer",
    detail: "StartUp Hub",
    copy: "Developed responsive React and TypeScript applications, reusable interface systems, and agile delivery practices.",
  },
];

function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <div className="section-index">
        <span>{number}</span>
        <i />
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
    </div>
  );
}

function ProjectActions({ repo, live }: { repo: string; live: string }) {
  return (
    <div className="project-actions">
      <a href={live} target="_blank" rel="noreferrer" aria-label="Open live project">
        Live site <ArrowUpRight size={16} />
      </a>
      <a href={repo} target="_blank" rel="noreferrer" aria-label="Open source repository">
        Code <Github size={15} />
      </a>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Muhammad Uzair home">
          <img src={markUrl} alt="MU signal mark" />
          <span>
            <strong>MU/01</strong>
            <small>Muhammad Uzair</small>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Primary navigation">
          {[
            ["Profile", "#about"],
            ["Work", "#work"],
            ["Capabilities", "#capabilities"],
            ["Contact", "#contact"],
          ].map(([label, href], index) => (
            <a href={href} onClick={closeMenu} key={label}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>

        <a className="header-contact" href="mailto:hk202504@gmail.com">
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-technical-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="pulse-dot" />
              Available for selected collaborations
            </div>
            <p className="hero-intro">Full Stack Developer · AI Developer · Karachi, Pakistan</p>
            <h1>
              Building digital
              <em>systems</em> with intent.
            </h1>
            <p className="hero-summary">
              I&apos;m Muhammad Uzair. I design and engineer web products and AI-enabled experiences that take ideas from interface to intelligent, dependable system.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <ArrowDownRight size={18} />
              </a>
              <a className="button button-quiet" href="mailto:hk202504@gmail.com">
                Write an email <Mail size={17} />
              </a>
            </div>
            <div className="hero-socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer" key={label}>
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-portrait-wrap">
            <div className="portrait-measurements" aria-hidden="true">
              <span>PROFILE / 2026</span>
              <span>24.867° N · 67.010° E</span>
            </div>
            <div className="portrait-frame">
              <img src={portraitUrl} alt="Muhammad Uzair, Full Stack and AI Developer" />
              <div className="portrait-overlay" />
            </div>
            <div className="portrait-caption">
              <span>MU</span>
              <p>Systems thinking<br />with a human centre.</p>
            </div>
          </div>

          <div className="hero-footnote">
            <span>SCROLL TO EXPLORE</span>
            <i />
            <span>01 / 05</span>
          </div>
        </section>

        <section id="about" className="intro-section section-paper">
          <div className="intro-rail" aria-hidden="true"><span>01</span><i /></div>
          <div className="intro-content">
            <SectionHeading number="01" eyebrow="Profile" title="A builder at the intersection of product and intelligence." />
            <div className="intro-body">
              <p className="lead-copy">
                I combine clean product interfaces with robust application logic to make useful digital tools. My work spans frontend systems, backend services, AI applications, and the deployment paths that make products reliable.
              </p>
              <div className="focus-list">
                {focusAreas.map((area, index) => (
                  <div key={area}>
                    <span>0{index + 1}</span>
                    <p>{area}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="profile-details">
              <div><MapPin size={17} /><span>Based in</span><strong>Karachi, Pakistan</strong></div>
              <div><BriefcaseBusiness size={17} /><span>Availability</span><strong>Open to work</strong></div>
              <div><Sparkles size={17} /><span>Focus</span><strong>Web + AI systems</strong></div>
            </div>
          </div>
        </section>

        <section id="work" className="work-section section-ink">
          <div className="work-heading-wrap">
            <SectionHeading number="02" eyebrow="Selected work" title="Built to move ideas into the real world." />
            <p>Recent work across commerce, collaboration, education, and backend services.</p>
          </div>

          <div className="featured-project">
            <div className="featured-art">
              <img src={aiImageUrl} alt="Abstract signal system representing AI-enabled development" />
              <span className="art-corner corner-one" />
              <span className="art-corner corner-two" />
            </div>
            <div className="featured-content">
              <div className="project-meta"><span>01 / FULL STACK</span><span>COMMERCE</span></div>
              <h3>E-Commerce<br /><em>Platform</em></h3>
              <p>A complete buying experience designed around performance, payments, and clear management workflows.</p>
              <div className="stack-list">{projects[0].stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <ProjectActions repo={projects[0].repo} live={projects[0].live} />
            </div>
          </div>

          <div className="project-grid">
            {projects.slice(1).map((project) => (
              <article className={`project-card project-${project.color}`} key={project.title}>
                <div className="card-topline">
                  <span>{project.number} / {project.type}</span>
                  <Code2 size={17} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="stack-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <ProjectActions repo={project.repo} live={project.live} />
              </article>
            ))}
          </div>
          <a className="github-line" href="https://github.com/ucdexpert" target="_blank" rel="noreferrer">
            <span>For additional builds, visit the source archive</span>
            <span>GitHub / ucdexpert <ArrowUpRight size={16} /></span>
          </a>
        </section>

        <section id="capabilities" className="capabilities-section section-paper">
          <div className="capability-image">
            <img src={systemImageUrl} alt="Technical system architecture represented as a tactile workspace" />
            <div><span>CAPABILITY MAP</span><strong>03 / 03</strong></div>
          </div>
          <div className="capabilities-content">
            <SectionHeading number="03" eyebrow="Capabilities" title="A practical stack, applied across the product lifecycle." />
            <div className="skill-groups">
              {skills.map((group) => (
                <article key={group.title} className="skill-group">
                  <div className="skill-group-title"><span>{group.index}</span><h3>{group.title}</h3></div>
                  <div>{group.items.map((skill) => <span className="skill-token" key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
            <p className="tool-note">Also experienced with GraphQL, Redis, Elasticsearch, Kubernetes, Terraform, Jest, Cypress, Storybook, Figma, and Agile delivery.</p>
          </div>
        </section>

        <section className="journey-section">
          <div className="journey-heading">
            <SectionHeading number="04" eyebrow="Trajectory" title="Learning fast. Building with care." />
            <p>Work and education that shaped a practice grounded in craft, momentum, and continuous learning.</p>
          </div>
          <div className="timeline">
            {journey.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="timeline-time"><span>{item.kind}</span><strong>{item.span}</strong></div>
                <div className="timeline-copy"><h3>{item.title}</h3><p className="timeline-detail">{item.detail}</p><p>{item.copy}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-ink">
          <div className="contact-topline"><span>05 / CONTACT</span><span>AVAILABLE FOR SELECTED COLLABORATIONS</span></div>
          <div className="contact-grid">
            <div>
              <p className="contact-kicker">Have a product problem worth solving?</p>
              <h2>Let&apos;s map<br />the <em>build.</em></h2>
            </div>
            <div className="contact-details">
              <a href="mailto:hk202504@gmail.com"><Mail size={18} /><span>EMAIL</span><strong>hk202504@gmail.com</strong><ArrowUpRight size={18} /></a>
              <a href="tel:+923170219387"><Phone size={18} /><span>PHONE</span><strong>+92 317 0219387</strong><ArrowUpRight size={18} /></a>
              <a href="https://www.linkedin.com/in/muhammad-uzair-9255433a0/" target="_blank" rel="noreferrer"><Linkedin size={18} /><span>NETWORK</span><strong>Connect on LinkedIn</strong><ArrowUpRight size={18} /></a>
              <a href="mailto:hk202504@gmail.com?subject=Project%20Inquiry"><Send size={18} /><span>START</span><strong>Send a project inquiry</strong><ArrowUpRight size={18} /></a>
            </div>
          </div>
          <footer className="site-footer">
            <a className="brand brand-footer" href="#home"><img src={markUrl} alt="MU signal mark" /><span><strong>MU/01</strong><small>Muhammad Uzair</small></span></a>
            <p>© {new Date().getFullYear()} Muhammad Uzair. Designed as a system, built for the web.</p>
            <a href="#home" className="back-top">Back to top <ArrowUpRight size={14} /></a>
          </footer>
        </section>
      </main>
    </div>
  );
}
