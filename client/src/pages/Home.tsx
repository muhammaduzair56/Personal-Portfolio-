/**
 * Scrapbook portfolio reference: warm handmade-paper canvas, handwritten annotations,
 * portrait-led hero, polaroid projects, and sticky-note skills.
 */
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const portraitUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663898260788/bAiVyVRyYRIKCubj.png";

const navItems = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

const featuredProjects = [
  {
    title: "SkillSense",
    type: "AI career platform",
    note: "Resume intelligence & career guidance",
    url: "https://skillsensepk.vercel.app/",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663898260788/QfhhWBumBbqbJfzk.webp",
  },
  {
    title: "The Burger House",
    type: "Interactive 3D experience",
    note: "React Three Fiber & GSAP",
    url: "https://premiumburger.vercel.app/",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "E-Commerce Platform",
    type: "Full stack storefront",
    note: "Payments, cart & dashboard",
    url: "https://e-commerce-mu-wheat-87.vercel.app/",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663898260788/kpnEUdeCIKGlaWEB.webp",
  },
];

const projectIndex = [
  ["Task Management App", "Collaborative planning workspace with real-time flows.", "https://auto-task-manager.vercel.app/dashboard"],
  ["Physical AI Textbook", "Interactive learning platform with contextual AI help.", "https://physical-ai-textbook-frontend001-he.vercel.app/"],
  ["REST API Service", "Secure, documented backend integration service.", "https://api-docs-demo.vercel.app"],
];

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "Groq API", "Gemini API", "Docker", "Vercel", "Git"];
const emailAddress = "uzairkhilji307@gmail.com";
const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=uzairkhilji307%40gmail.com";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      window.location.href = gmailComposeUrl;
    }
  };

  return (
    <div className="scrapbook-page">
      <header className="scrap-header">
        <a className="scrap-wordmark" href="#home" onClick={closeMenu} aria-label="Muhammad Uzair home">
          Muhammad Uzair <span aria-hidden="true" />
        </a>

        <nav className={menuOpen ? "scrap-nav open" : "scrap-nav"} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a href={href} key={label} onClick={closeMenu}>{label}</a>)}
          <a className="mobile-email" href="#contact" onClick={closeMenu}>Contact details <ArrowUpRight size={16} /></a>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="scrap-theme"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a className="scrap-connect" href="#contact">Let&apos;s connect</a>
          <button className="scrap-menu" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={25} /> : <Menu size={27} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="scrap-hero">
          <div className="hero-main">
            <div className="scrap-copy">
              <p className="hand-kicker">Hey, I&apos;m Muhammad <i aria-hidden="true" /></p>
              <h1>I build digital <span>products.</span></h1>
              <p className="scrap-intro">Full Stack Developer and AI Developer crafting useful web applications and practical AI-powered products.</p>
              <div className="scrap-hero-actions">
                <a className="ink-button" href="#projects">View my work <ArrowRight size={18} /></a>
                <a className="hand-link" href="#contact">Let&apos;s talk <ArrowUpRight size={18} /></a>
              </div>
              <div className="social-scribbles">
                <a href="https://github.com/ucdexpert" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
                <a href="https://www.linkedin.com/in/muhammad-uzair-066733314" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              </div>
            </div>

            <figure className="scrap-portrait">
              <div className="portrait-brush" aria-hidden="true" />
              <img src={portraitUrl} alt="Muhammad Uzair, Full Stack Developer and AI Developer" width="2560" height="1440" decoding="async" fetchPriority="high" />
              <figcaption>Turning ideas<br />into <strong>useful</strong><br />solutions <i aria-hidden="true" /></figcaption>
              <span className="portrait-arrow" aria-hidden="true">↗</span>
            </figure>
          </div>

          <section id="projects" className="scrap-featured" aria-labelledby="featured-title">
            <p id="featured-title" className="hand-section-title">Featured Projects <i aria-hidden="true" /></p>
            <div className="polaroid-row">
              {featuredProjects.map((project, index) => (
                <article className={`polaroid polaroid-${index + 1}`} key={project.title}>
                  <div className="mini-project-screen">
                    <img src={project.image} alt={`${project.title} live project preview`} loading="lazy" decoding="async" />
                    <span>{project.type}</span>
                    <b>{project.title}</b>
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.type}</p>
                  <a href={project.url} target="_blank" rel="noreferrer">View project <ArrowRight size={16} /></a>
                  {index === 1 && <em className="tape" aria-hidden="true" />}
                </article>
              ))}
            </div>
          </section>

          <aside id="skills" className="skills-tear" aria-labelledby="skills-title">
            <p id="skills-title" className="hand-section-title">Tech Stack <i aria-hidden="true" /></p>
            <div className="sticky-grid">
              {skills.slice(0, 8).map((skill, index) => <span key={skill} className={`sticky sticky-${index % 4}`}>{skill}</span>)}
            </div>
            <span className="tiny-arrow" aria-hidden="true">↙</span>
          </aside>
        </section>

        <section id="about" className="scrap-about">
          <div className="about-note">
            <p className="hand-kicker">A little about me</p>
            <h2>From a rough idea<br />to something <span>real.</span></h2>
            <p>I work across frontend, backend, and AI integrations to turn product ideas into thoughtful, usable digital experiences.</p>
          </div>
          <div className="about-facts">
            <div><MapPin size={18} /><span>Based in</span><strong>Karachi, Pakistan</strong></div>
            <div><Sparkles size={18} /><span>Available for</span><strong>Freelance &amp; full-time roles</strong></div>
            <div><Mail size={18} /><span>Say hello</span><button className="email-copy-link" type="button" onClick={copyEmail}>{emailCopied ? "Email copied" : emailAddress}</button></div>
          </div>
        </section>

        <section className="project-index" aria-labelledby="more-work-title">
          <div className="index-heading">
            <p className="hand-kicker">More work</p>
            <h2 id="more-work-title">A few more things I&apos;ve built.</h2>
          </div>
          <div className="index-list">
            {projectIndex.map(([title, description, url], index) => (
              <a href={url} target="_blank" rel="noreferrer" className="index-project" key={title}>
                <span>0{index + 4}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={20} />
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="scrap-contact">
          <p className="hand-kicker">Let&apos;s make something useful</p>
          <h2>Have an idea worth building?</h2>
          <div className="contact-cta-row">
            <button className="ink-button" type="button" onClick={copyEmail}>{emailCopied ? "Email copied" : "Copy email address"} <Mail size={17} /></button>
            <a className="gmail-link" href={gmailComposeUrl} target="_blank" rel="noreferrer">Open Gmail <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="scrap-footer">
        <span>© {new Date().getFullYear()} Muhammad Uzair</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}
