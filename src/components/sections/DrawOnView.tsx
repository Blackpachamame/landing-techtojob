"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

// Only explicit decorative paths/surfaces are selected; text stays outside targets.
export default function DrawOnView() {
  const anchor = useRef<HTMLSpanElement>(null);
  const played = useRef(false);

  useLayoutEffect(() => {
    const scene = anchor.current?.parentElement;
    if (!scene) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      if (played.current) return;
      let intro: gsap.core.Timeline;
      const animation = gsap.context(() => {
        intro = gsap.timeline({ paused: true });
        // Prepare every responsive rail once so a resize cannot expose a final rail.
        scene.querySelectorAll<SVGGeometryElement>("[data-draw]").forEach(path => {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          intro.to(path, {
            strokeDashoffset: 0,
            duration: Number(path.dataset.duration ?? 0.95),
            ease: "power1.inOut",
            clearProps: "strokeDasharray,strokeDashoffset",
          }, Number(path.dataset.delay ?? 0));
        });
        scene.querySelectorAll<HTMLElement | SVGElement>("[data-reveal]").forEach(element => {
          gsap.set(element, { opacity: 0 });
          intro.to(element, {
            opacity: 1, duration: Number(element.dataset.duration ?? 0.2),
            ease: "power1.out", clearProps: "opacity",
          }, Number(element.dataset.delay ?? 0));
        });
      }, scene);
      const threshold = Math.min(0.3, innerHeight * 0.3 / scene.getBoundingClientRect().height);
      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < threshold || played.current) return;
        played.current = true;
        observer.disconnect();
        intro.play();
      }, { threshold });
      observer.observe(scene);
      return () => {
        observer.disconnect();
        animation.revert();
      };
    });
    return () => media.revert();
  }, []);

  return <span ref={anchor} hidden aria-hidden="true" />;
}
