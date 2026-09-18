import { useEffect } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import Intro from "../components/Intro";

const projects = [
  { title: "alltime25", href: "https://alltime25.com/" },
  { title: "gloopydorp", href: "https://gloopydorp.nolanjiang.com/" },
];

export default function HomePage() {
  useEffect(() => {
    let frame = 0;
    function openLinkedSection() {
      const section = document.getElementById(window.location.hash.slice(1));
      if (!(section instanceof HTMLDetailsElement)) return;
      section.open = true;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => section.scrollIntoView());
    }
    openLinkedSection();
    window.addEventListener("hashchange", openLinkedSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", openLinkedSection);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#content">skip to content</a>
      <Intro />
      <main className="site-content" id="content" tabIndex={-1}>
        <div className="section-directory">
          <details className="site-section" name="site-sections" id="about">
            <summary>
              <h2>about</h2>
              <Plus className="section-open" aria-hidden="true" />
              <Minus className="section-close" aria-hidden="true" />
            </summary>
            <div className="section-content">
              <p>math + cs @ cmu. interested in things.</p>
            </div>
          </details>
          <details className="site-section" name="site-sections" id="projects">
            <summary>
              <h2>projects</h2>
              <span className="section-count" aria-label={`${projects.length} projects`}>
                {String(projects.length).padStart(2, "0")}
              </span>
              <Plus className="section-open" aria-hidden="true" />
              <Minus className="section-close" aria-hidden="true" />
            </summary>
            <div className="section-content project-content">
              <ul className="project-list">
                {projects.map(({ title, href }) => (
                  <li key={href}>
                    <a className="project-link" href={href} target="_blank" rel="noopener noreferrer">
                      <span>{title}</span>
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
          <details className="site-section" name="site-sections" id="misc">
            <summary>
              <h2>misc</h2>
              <Plus className="section-open" aria-hidden="true" />
              <Minus className="section-close" aria-hidden="true" />
            </summary>
            <div className="section-content"><p>hi</p></div>
          </details>
        </div>
      </main>
    </>
  );
}
