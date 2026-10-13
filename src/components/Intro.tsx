import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import Navbar from "./Navbar";

const faceFont = '400 100px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
const clamp = (value: number) => Math.max(0, Math.min(1, value));
const smooth = (value: number) => value * value * (3 - 2 * value);

export default function Intro() {
  const heroRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const nameRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLElement>(null);
  const arrowRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const layer = layerRef.current;
    const greeting = greetingRef.current;
    const pre = preRef.current;
    const name = nameRef.current;
    const links = linksRef.current;
    const arrow = arrowRef.current;
    if (!hero || !layer || !greeting || !pre || !name || !links || !arrow) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const raster = document.createElement("canvas");
    const context = raster.getContext("2d", { willReadFrequently: true });
    if (context) context.font = faceFont;
    const metrics = context?.measureText("hi");
    const faceWidth = metrics ? metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight : 70;
    const faceHeight = metrics ? metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent : 80;
    const textX = metrics ? (metrics.actualBoundingBoxLeft - metrics.actualBoundingBoxRight) / 2 : 0;
    const textY = metrics ? (metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent) / 2 : 0;
    let width = 0, height = 0, heroWidth = 0, heroHeight = 0, nameWidth = 0;
    let progress = 0, scale = 1, frame = 0, lastDraw = 0, layoutDirty = true;

    function position() {
      if (!greeting || !name || !links || !layer || !arrow) return;
      const travel = clamp(window.scrollY / (height * 0.8));
      progress = reducedMotion.matches ? Number(travel >= 1) : smooth(travel);
      scale = 1 + (32 / heroWidth - 1) * progress;
      const margin = width <= 640 ? 24 : 36;
      const centerX = width / 2 * (1 - progress) + (margin + nameWidth / 2) * progress;
      const centerY = height * 0.46 * (1 - progress) + 38 * progress;
      const blend = smooth(clamp((progress - 0.56) / 0.3));
      greeting.style.transform = `translate3d(${centerX - heroWidth * scale / 2}px,${centerY - heroHeight * scale / 2}px,0) scale(${scale})`;
      greeting.style.opacity = String(1 - blend);
      const nameScale = 1 + (1 - progress) * 1.4;
      name.style.transform = `translate3d(${centerX - nameWidth * nameScale / 2}px,${centerY - 22}px,0) scale(${nameScale})`;
      name.style.opacity = String(blend);
      const navOpacity = smooth(clamp((progress - 0.74) / 0.26));
      layer.style.setProperty("--nav-opacity", String(navOpacity));
      links.style.opacity = String(navOpacity);
      name.inert = links.inert = travel < 1;
      arrow.style.opacity = String(1 - clamp(travel * 3));
      arrow.inert = travel > 0.34;
    }

    function draw(time: number) {
      if (!pre || progress >= 0.86) return;
      if (!context) {
        pre.style.fontSize = `${heroHeight * 0.84}px`;
        return;
      }
      // Resample for the displayed size, keeping the ASCII characters legible.
      const cols = Math.max(14, Math.round(heroWidth * scale / 8.5));
      const line = heroWidth / cols / 0.6;
      const rows = Math.max(8, Math.round(heroHeight / line));
      if (raster.width !== cols || raster.height !== rows) {
        raster.width = cols;
        raster.height = rows;
      }
      pre.style.fontSize = `${line}px`;
      pre.style.lineHeight = `${line}px`;
      const angle = reducedMotion.matches ? 0 : (0.18 + Math.sin(time * 0.00022) * 0.34) * (1 - progress);
      const tilt = -0.12 * (1 - progress);
      const c = Math.cos(angle), s = Math.sin(angle), size = cols * 0.84 / faceWidth;
      context.resetTransform();
      // These grays encode face depth, not the visible page colors.
      context.fillStyle = "#000";
      context.fillRect(0, 0, cols, rows);
      context.font = faceFont;
      for (let z = -9; z <= 9; z++) {
        context.setTransform(c * size, s * Math.sin(tilt) * size * 0.6, 0,
          Math.cos(tilt) * size * 0.6, cols / 2 + z * s * size,
          rows / 2 - z * c * Math.sin(tilt) * size * 0.6);
        context.fillStyle = z === 9 ? "#fff" : "#888";
        context.fillText("hi", textX, textY);
      }
      context.resetTransform();
      const pixels = context.getImageData(0, 0, cols, rows).data;
      const lines: string[] = [];
      for (let y = 0; y < rows; y++) {
        let lineText = "";
        for (let x = 0; x < cols; x++) {
          const value = pixels[(y * cols + x) * 4];
          lineText += value > 175 ? "h" : value > 65 ? "i" : " ";
        }
        lines.push(lineText);
      }
      pre.textContent = lines.join("\n");
    }

    function tick(time: number) {
      frame = 0;
      if (!width || !height || document.hidden) return;
      if (layoutDirty) position();
      if (layoutDirty || time - lastDraw >= 100) {
        draw(time);
        lastDraw = time;
      }
      layoutDirty = false;
      // Stop scheduling frames once the greeting is gone or motion is reduced.
      if (!reducedMotion.matches && progress < 0.86) schedule();
    }

    function schedule() {
      if (!frame && !document.hidden) frame = requestAnimationFrame(tick);
    }

    function update() {
      layoutDirty = true;
      schedule();
    }

    function measure() {
      if (!hero || !greeting || !name) return;
      width = document.documentElement.clientWidth;
      height = hero.clientHeight;
      heroWidth = Math.min(460, width * 0.82, height * 0.72);
      heroHeight = heroWidth * faceHeight / faceWidth;
      nameWidth = name.offsetWidth;
      greeting.style.width = `${heroWidth}px`;
      greeting.style.height = `${heroHeight}px`;
      update();
    }

    const resize = new ResizeObserver(measure);
    resize.observe(hero);
    measure();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    document.addEventListener("visibilitychange", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
      document.removeEventListener("visibilitychange", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return (
    <>
      <section className="hero" id="top" ref={heroRef} aria-label="Introduction">
        <h1 className="sr-only">Nolan Jiang</h1>
        <a className="scroll-cue" href="#content" ref={arrowRef} aria-label="Scroll to link">
          <ArrowDown aria-hidden="true" />
        </a>
      </section>
      <div className="intro-layer" ref={layerRef}>
        <Navbar animated nameRef={nameRef} linksRef={linksRef} />
        <div className="ascii-greeting" ref={greetingRef} aria-hidden="true">
          <pre ref={preRef}>hi</pre>
        </div>
      </div>
    </>
  );
}
