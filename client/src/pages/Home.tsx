/**
 * Clean professional portfolio: calm light surfaces, compact navy typography, one clear blue accent,
 * and a mobile-first hero that always presents the message and CTA before the portrait.
 */
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  X,
} from "lucide-react";

const portraitUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663898260788/bAiVyVRyYRIKCubj.png";

const navigation = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

const projects = [
  {
    category: "Full Stack",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart functionality, payment integration, and an admin dashboard.",
    proof: "Focus: payments, performance, and admin workflows",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    repo: "https://github.com/ucdexpert/e-commerce",
    live: "https://e-commerce-mu-wheat-87.vercel.app/",
  },
  {
    category: "Frontend",
    title: "Task Management App",
    description: "A collaborative task workspace with real-time updates, drag-and-drop planning, and team collaboration.",
    proof: "Focus: real-time collaboration and planning flows",
    technologies: ["React", "TypeScript", "Framer Motion", "Zustand"],
    repo: "https://github.com/ucdexpert/final-repo-phase-3",
    live: "https://auto-task-manager.vercel.app/dashboard",
  },
  {
    category: "AI / Education",
    title: "Physical AI Textbook",
    description: "An interactive learning platform with structured modules and an AI chatbot for contextual questions and answers.",
    proof: "Focus: AI-assisted learning and structured content",
    technologies: ["Docusaurus", "React", "JavaScript", "AI Chatbot"],
    repo: "https://github.com/ucdexpert/physical-ai-textbook-frontend001-heckathon",
    live: "https://physical-ai-textbook-frontend001-he.vercel.app/",
  },
  {
    category: "Backend",
    title: "REST API Service",
    description: "A robust API service with authentication, rate limiting, and documentation built around scalable integration.",
    proof: "Focus: secure, documented integrations",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    repo: "https://github.com/ucdexpert/",
    live: "https://api-docs-demo.vercel.app",
  },
];

const skillGroups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { title: "Backend", items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB"] },
  { title: "Tools & DevOps", items: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Vercel"] },
];

const experience = [
  {
    date: "2023 — Present",
    role: "Full Stack Developer",
    company: "Self-Employed / Freelance",
    text: "Building scalable applications with Next.js, TypeScript, Python, CI/CD, and LLM-based workflows.",
  },
  {
    date: "2023 — 2026",
    role: "Diploma in Agentic AI",
    company: "Governor House IT Initiative · In Progress",
    text: "Practical study in web technologies, LLM applications, agentic AI, automation, and project delivery.",
  },
  {
    date: "2019 — 2021",
    role: "Frontend Developer",
    company: "StartUp Hub",
    text: "Created responsive React and TypeScript applications and reusable component systems in an agile environment.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label"><span />{children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="clean-portfolio">
      <header className="clean-header">
        <a className="clean-brand" href="#home" onClick={closeMenu} aria-label="Muhammad Uzair home">
          <span className="brand-mark" aria-hidden="true"><i>M</i><i>U</i></span>
          <span className="brand-copy"><strong>MU/01</strong><small>Muhammad Uzair</small></span>
        </a>

        <nav className={menuOpen ? "clean-nav open" : "clean-nav"} aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={label} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-mobile-contact" href="mailto:hk202504@gmail.com" onClick={closeMenu}>Email me <ArrowUpRight size={15} /></a>
        </nav>

        <a className="header-cta" href="mailto:hk202504@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="mobile-menu" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={23} /> : <Menu size={24} />}
        </button>
      </header>

      <main>
        <section id="home" className="clean-hero">
          <div className="hero-copy-clean">
            <p className="availability"><i /> Available for freelance and full-time opportunities</p>
            <h1>Full Stack Developer <span>&amp;</span> AI Developer.</h1>
            <p className="hero-lede">I&apos;m Muhammad Uzair, a Karachi-based developer who builds fast, useful web applications and practical AI-powered products.</p>
            <div className="hero-buttons">
              <a className="primary-button" href="#projects">View projects <ArrowRight size={17} /></a>
              <a className="text-button" href="mailto:hk202504@gmail.com">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-links">
              <a href="https://github.com/ucdexpert" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              <a href="https://www.linkedin.com/in/muhammad-uzair-9255433a0/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            </div>
          </div>

          <figure className="portrait-clean">
            <div className="portrait-meta"><span>PROFILE / 2026</span><span>24.867° N · 67.010° E</span></div>
            <div className="portrait-image-wrap"><img src={portraitUrl} alt="Muhammad Uzair, Full Stack Developer and AI Developer" /></div>
            <figcaption><span>MU</span><p>Karachi, Pakistan<br />Open to work</p></figcaption>
            <div className="portrait-signals"><span>WEB PRODUCTS</span><span>AI SYSTEMS</span></div>
          </figure>
        </section>

        <section id="about" className="about-clean section-pad">
          <div className="section-title-block">
            <SectionLabel>About me</SectionLabel>
            <h2>I build products that are clear, reliable, and ready to grow.</h2>
          </div>
          <div className="about-copy">
            <p>I work across the frontend and backend to turn product ideas into complete digital experiences. I also build AI-powered applications, including chatbots, LLM integrations, and interactive tools.</p>
            <p>My approach is simple: understand the problem, create an intuitive interface, then build dependable technology behind it.</p>
            <div className="quick-facts">
              <div><MapPin size={18} /><span>Based in</span><strong>Karachi, Pakistan</strong></div>
              <div><BriefcaseBusiness size={18} /><span>Availability</span><strong>Open to work</strong></div>
              <div><Code2 size={18} /><span>Specialty</span><strong>Web &amp; AI products</strong></div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-clean section-pad">
          <div className="section-intro-row">
            <div className="section-title-block"><SectionLabel>Selected projects</SectionLabel><h2>Recent work.</h2></div>
            <p>Projects across commerce, collaboration, AI learning, and backend infrastructure.</p>
          </div>
          <div className="projects-list">
            {projects.map((project, index) => (
              <article className="project-row" key={project.title}>
                <span className="project-number">0{index + 1}</span>
                <div className="project-main">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-proof">{project.proof}</p>
                  <div className="technology-tags">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <div className="project-row-links">
                  <a href={project.live} target="_blank" rel="noreferrer">Live <ArrowUpRight size={16} /></a>
                  <a href={project.repo} target="_blank" rel="noreferrer">Code <Github size={15} /></a>
                </div>
              </article>
            ))}
          </div>
          <a className="all-projects" href="https://github.com/ucdexpert" target="_blank" rel="noreferrer">See more work on GitHub <ArrowUpRight size={17} /></a>
        </section>

        <section id="skills" className="skills-clean section-pad">
          <div className="section-title-block"><SectionLabel>Capabilities</SectionLabel><h2>A practical stack for modern products.</h2></div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card-clean" key={group.title}>
                <h3>{group.title}</h3>
                <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="additional-skills">Also experienced with GraphQL, Redis, Elasticsearch, Kubernetes, Terraform, Jest, Cypress, Storybook, Figma, and Agile delivery.</p>
        </section>

        <section className="experience-clean section-pad">
          <div className="section-title-block"><SectionLabel>Experience &amp; education</SectionLabel><h2>Growing through hands-on work.</h2></div>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={item.role}>
                <p className="experience-date">{item.date}</p>
                <div><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-clean">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2>Let&apos;s build something useful.</h2>
            <p>Have a role, product, or idea in mind? I&apos;d be happy to hear about it.</p>
          </div>
          <div className="contact-actions-clean">
            <a className="email-big" href="mailto:hk202504@gmail.com">hk202504@gmail.com <ArrowUpRight size={22} /></a>
            <a href="tel:+923170219387"><Phone size={17} /> +92 317 0219387</a>
            <a href="https://www.linkedin.com/in/muhammad-uzair-9255433a0/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn profile</a>
            <a href="mailto:hk202504@gmail.com?subject=Project%20Inquiry"><Send size={17} /> Send an inquiry</a>
          </div>
        </section>
      </main>

      <footer className="clean-footer"><span>© {new Date().getFullYear()} Muhammad Uzair</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}
