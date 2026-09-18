import type { Ref } from "react";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  animated?: boolean;
  linksRef?: Ref<HTMLElement>;
  nameRef?: Ref<HTMLAnchorElement>;
}

export default function Navbar({ animated = false, linksRef, nameRef }: NavbarProps) {
  return (
    <header className={`site-header${animated ? " site-header--animated" : ""}`}>
      <a className="site-name" href="/#top" ref={nameRef} inert={animated} aria-label="Nolan Jiang — back to top">
        nolan jiang
      </a>
      <nav className="site-links" aria-label="Social links" ref={linksRef} inert={animated}>
        <a href="https://github.com/onion-eater" target="_blank" rel="noopener noreferrer">
          github <ArrowUpRight aria-hidden="true" />
        </a>
        <a href="https://linkedin.com/in/nolan-jiang" target="_blank" rel="noopener noreferrer">
          linkedin <ArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
