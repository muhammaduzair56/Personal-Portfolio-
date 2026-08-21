/**
 * Scrapbook portfolio reference: warm handmade-paper canvas, handwritten annotations,
 * portrait-led hero, polaroid projects, and sticky-note skills.
 */
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
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
import { additionalCaseStudies, featuredCaseStudies } from "@/lib/projects";

const portraitUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663898260788/bAiVyVRyYRIKCubj.png";

const navItems = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "Groq API", "Gemini API", "Docker", "Vercel", "Git"];
const emailAddress = "uzairkhilji307@gmail.com";
const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=uzairkhilji307%40gmail.com";
const resumeUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663898260788/amHTbobdWemnQKFg.pdf";

export function getActiveSection(sections: Array<{ id: string; offsetTop: number }>, marker: number, fallback = "") {
  return [...sections]
    .sort((a, b) => a.offsetTop - b.offsetTop)
    .reduce((current, section) => section.offsetTop <= marker ? section.id : current, fallback);
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sections = navItems
      .map(([, href]) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const scrollOffset = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scroll-offset")) || 88;
      const marker = window.scrollY + scrollOffset + Math.min(window.innerHeight * 0.22, 160);
      const current = getActiveSection(sections, marker);
      setActiveSection((previous) => previous === current ? previous : current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);
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
          {navItems.map(([label, href]) => {
            const sectionId = href.slice(1);
            const isActive = activeSection === sectionId;
            return <a
              href={href}
              key={label}
              className={isActive ? "is-active" : undefined}
              aria-current={isActive ? "location" : undefined}
              onClick={() => { setActiveSection(sectionId); closeMenu(); }}
            >{label}</a>;
          })}
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
              <a className="resume-link" href={resumeUrl} target="_blank" rel="noreferrer" download="Muhammad-Uzair-Resume.pdf">
                <Download size={17} /> Download Resume <span aria-hidden="true">↙</span>
              </a>
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
              {featuredCaseStudies.map((project, index) => (
                <article className={`polaroid polaroid-${index + 1}`} key={project.title}>
                  <div className="mini-project-screen">
                    <img src={project.image} alt={`${project.title} live project preview`} loading="lazy" decoding="async" />
                    <span>{project.category}</span>
                    <b>{project.title}</b>
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.shortDescription}</p>
                  <a href={`/projects/${project.slug}`}>View case study <ArrowRight size={16} /></a>
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
            {additionalCaseStudies.map((project, index) => (
              <a href={`/projects/${project.slug}`} className="index-project" key={project.title}>
                <span>0{index + 4}</span><div><h3>{project.title}</h3><p>{project.shortDescription}</p></div><ArrowUpRight size={20} />
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
