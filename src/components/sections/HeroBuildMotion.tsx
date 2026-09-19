"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroBuildMotion() {
  const anchor = useRef<HTMLSpanElement>(null);
  const played = useRef(false);

  useLayoutEffect(() => {
    const root = anchor.current?.parentElement;
    if (!root) return;
    const media = gsap.matchMedia();

    media.add({
      motion: "(prefers-reduced-motion: no-preference)",
      desktop: "(min-width: 1024px)",
      tablet: "(min-width: 768px) and (max-width: 1023px)",
    }, (context) => {
      const { motion, desktop, tablet } = context.conditions!;
      if (!motion || played.current) return;
      const variant = desktop ? "desktop" : tablet ? "tablet" : "mobile";
      const scene = root.querySelector<HTMLElement>(`[data-build-scene="${variant}"]`);
      if (!scene) return;
      let intro: gsap.core.Timeline;
      let observer: IntersectionObserver | undefined;
      let finished = false;

      const prepare = () => gsap.context(() => {
        const outline = scene.querySelector<SVGPathElement>("[data-build-outline]")!;
        const parts = scene.querySelectorAll("[data-build-part]");
        const interior = scene.querySelector("[data-build-interior]");
        const cover = scene.querySelector("[data-build-cover]");
        const guides = scene.querySelector("[data-build-guide]");
        const length = outline.getTotalLength();

        // Prepare only decorative art at hydration; static SSR remains the fallback.
        gsap.set(outline, { opacity: 0.65, strokeDasharray: length, strokeDashoffset: length });
        gsap.set(parts, { opacity: 0 });
        gsap.set([interior, guides], { opacity: 0 });
        gsap.set(cover, { opacity: 1 });

        intro = gsap.timeline({ paused: true, onComplete: () => { finished = true; } });
        intro.to(outline, { strokeDashoffset: 0, duration: 0.8, ease: "power1.inOut" }, 0);
        const distance = desktop ? 1 : tablet ? 0.75 : 0.55;
        const assembly = [
          { part: "body", x: 0, y: 30, at: 0.5, duration: 0.7 },
          { part: "profile", x: -42, y: -36, at: 0.9, duration: 0.6 },
          { part: "tournament", x: 38, y: -42, at: 1.05, duration: 0.6 },
          { part: "company", x: -38, y: 36, at: 1.2, duration: 0.5 },
        ];
        assembly.forEach(({ part, x, y, at, duration }) => {
          const piece = scene.querySelector(`[data-build-part="${part}"]`);
          gsap.set(piece, { x: x * distance, y: y * distance });
          intro.to(piece, { x: 0, y: 0, duration, ease: "power2.out" }, at)
            .to(piece, { opacity: 1, duration: duration / 3, ease: "power1.out" }, at);
        });
        intro.to(interior, { opacity: 1, duration: 0.35 }, 1.5)
          .to(cover, { opacity: 0, duration: 0.35 }, 1.5)
          .to(outline, { opacity: 0, duration: 0.25 }, 1.6)
          .to(guides, { opacity: 1, duration: 0.3 }, 1.8);
      }, scene);
      const animation = prepare();

      const play = () => {
        if (played.current) return;
        played.current = true;
        observer?.disconnect();
        intro.play();
      };

      if (desktop) {
        play();
      } else {
        const threshold = Math.min(0.3, innerHeight * 0.3 / scene.getBoundingClientRect().height);
        observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) play();
        }, { threshold });
        observer.observe(scene);
      }

      return () => {
        observer?.disconnect();
        animation.revert();
        if (!finished) played.current = false;
      };
    }, root);

    return () => media.revert();
  }, []);

  return <span ref={anchor} hidden />;
}
