"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroBuildMotion() {
  const anchor = useRef<HTMLSpanElement>(null);
  const completed = useRef(false);

  useEffect(() => {
    const root = anchor.current?.parentElement;
    if (!root) return;
    const media = gsap.matchMedia();

    media.add({
      motion: "(prefers-reduced-motion: no-preference)",
      desktop: "(min-width: 1024px)",
      tablet: "(min-width: 768px) and (max-width: 1023px)",
    }, (context) => {
      const { motion, desktop, tablet } = context.conditions!;
      if (!motion || completed.current) return;
      const variant = desktop ? "desktop" : tablet ? "tablet" : "mobile";
      const scene = root.querySelector<HTMLElement>(`[data-build-scene="${variant}"]`);
      if (!scene || scene.getBoundingClientRect().bottom < 0) return;

      const outline = scene.querySelector<SVGPathElement>("[data-build-outline]")!;
      const parts = scene.querySelectorAll("[data-build-part]");
      const interior = scene.querySelector("[data-build-interior]");
      const cover = scene.querySelector("[data-build-cover]");
      const labels = scene.querySelectorAll("[data-build-label]");
      const guides = scene.querySelector("[data-build-guide]");
      const length = outline.getTotalLength();

      // Server HTML is the complete static scene. Only this local enhancement hides art.
      gsap.set(outline, { opacity: 0.65, strokeDasharray: length, strokeDashoffset: length });
      gsap.set(parts, { opacity: 0 });
      gsap.set([interior, guides, ...labels], { opacity: 0 });
      gsap.set(cover, { opacity: 1 });

      const intro = gsap.timeline({ onComplete: () => { completed.current = true; } });
      intro.to(outline, { strokeDashoffset: 0, duration: 0.8, ease: "power1.inOut" }, 0);
      const distance = desktop ? 1 : tablet ? 0.75 : 0.55;
      const assembly = [
        { part: "body", x: 0, y: 30, at: 0.5, duration: 0.7 },
        { part: "profile", x: -42, y: -36, at: 0.9, duration: 0.6 },
        { part: "tournament", x: 38, y: -42, at: 1.05, duration: 0.6 },
        { part: "company", x: -38, y: 36, at: 1.2, duration: 0.5 },
      ];
      assembly.forEach(({ part, x, y, at, duration }) => {
        intro.fromTo(scene.querySelector(`[data-build-part="${part}"]`),
          { x: x * distance, y: y * distance, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration, ease: "power2.out" }, at);
      });
      intro.to(interior, { opacity: 1, duration: 0.35 }, 1.5)
        .to(cover, { opacity: 0, duration: 0.35 }, 1.5)
        .to(outline, { opacity: 0, duration: 0.25 }, 1.6)
        .to(guides, { opacity: 1, duration: 0.3 }, 1.8)
        .to(labels, { opacity: 1, duration: 0.25, stagger: 0.05 }, 1.8);
    }, root);

    // Reverts inline styles and pending tweens on unmount or a media-query change.
    return () => media.revert();
  }, []);

  return <span ref={anchor} hidden />;
}
