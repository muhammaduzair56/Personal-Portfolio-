/**
 * Scrapbook case-study page: quiet paper reading surface, oversized editorial hierarchy,
 * stacked notes, and a clear return route to Muhammad Uzair's main portfolio.
 */
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Moon, Sun } from "lucide-react";
import { useRoute } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { caseStudies } from "@/lib/projects";

export default function CaseStudy() {
  const [, params] = useRoute("/projects/:slug");
  const project = caseStudies.find((item) => item.slug === params?.slug);
  const { theme, toggleTheme } = useTheme();

  if (!project) {
    return <main className="case-missing"><a href="/">← Back to portfolio</a><h1>That project page could not be found.</h1></main>;
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === project.slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="case-study-page">
      <header className="case-header">
        <a className="case-wordmark" href="/">Muhammad Uzair <span aria-hidden="true" /></a>
        <div className="case-header-actions">
          <a className="case-back" href="/"><ArrowLeft size={17} /> Portfolio</a>
          <button className="scrap-theme" type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </header>

      <main>
        <section className={`case-hero visual-${project.visual}`}>
          <div className="case-hero-copy">
            <p className="case-label">Case study / 0{currentIndex + 1}</p>
            <p className="hand-kicker">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="case-summary">{project.summary}</p>
            <div className="case-hero-actions">
              <a className="ink-button" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live project <ExternalLink size={17} /></a>
              <a className="case-scroll" href="#story">Read the story <ArrowRight size={16} /></a>
            </div>
          </div>
          <figure className="case-visual">
            {project.image ? <img src={project.image} alt={project.imageAlt || `${project.title} project preview`} /> : <div className="case-visual-placeholder"><span>{project.category}</span><b>{project.title}</b></div>}
            <figcaption>{project.projectFocus}</figcaption>
          </figure>
        </section>

        <section className="case-facts" aria-label={`${project.title} project facts`}>
          <div><span>Role</span><strong>{project.role}</strong></div>
          <div><span>Focus</span><strong>{project.projectFocus}</strong></div>
          <div><span>Stack</span><strong>{project.stack.slice(0, 3).join(" · ")}</strong></div>
        </section>

        <article id="story" className="case-story">
          <section className="case-chapter">
            <p className="hand-kicker">The context</p>
            <h2>What needed attention.</h2>
            <p>{project.context}</p>
          </section>
          <section className="case-chapter case-chapter-offset">
            <p className="hand-kicker">The approach</p>
            <h2>Making the workflow feel more intentional.</h2>
            <p>{project.approach}</p>
          </section>
        </article>

        <section className="case-built">
          <div className="case-built-heading"><p className="hand-kicker">What I shaped</p><h2>Small decisions, working together.</h2></div>
          <div className="case-highlight-notes">
            {project.highlights.map((item, index) => <article key={item} className={`case-note case-note-${index % 3}`}><span>0{index + 1}</span><p>{item}</p></article>)}
          </div>
        </section>

        <section className="case-outcome">
          <div><p className="hand-kicker">The outcome</p><h2>A product direction with a clearer point of view.</h2></div>
          <p>{project.outcome}</p>
        </section>

        <section className="case-stack">
          <p className="hand-kicker">Built with</p>
          <div>{project.stack.map((tool, index) => <span key={tool} className={`case-stack-tag stack-tag-${index % 4}`}>{tool}</span>)}</div>
        </section>

        <section className="case-next">
          <p className="hand-kicker">Next case study</p>
          <a href={`/projects/${nextProject.slug}`}><span>{nextProject.category}</span><strong>{nextProject.title}</strong><ArrowUpRight size={25} /></a>
        </section>
      </main>
    </div>
  );
}
