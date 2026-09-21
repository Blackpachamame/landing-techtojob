"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function MobileMenu({ label, children }: { label: string; children: ReactNode }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const animation = useRef<Animation | null>(null);
  const closing = useRef(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finishTransition = () => {
      if (reducedMotion.matches) animation.current?.finish();
    };
    reducedMotion.addEventListener("change", finishTransition);
    return () => {
      reducedMotion.removeEventListener("change", finishTransition);
      animation.current?.cancel();
    };
  }, []);

  function setOpen(open: boolean) {
    const details = menu.current;
    const panel = details?.querySelector("nav");
    if (!details || !panel || open === (details.open && !closing.current)) return;

    const currentStyle = animation.current ? getComputedStyle(panel) : null;
    const from = currentStyle
      ? { opacity: currentStyle.opacity, transform: currentStyle.transform }
      : { opacity: open ? 0 : 1, transform: open ? "translateY(-6px)" : "translateY(0)" };
    animation.current?.cancel();
    animation.current = null;
    closing.current = !open;
    panel.inert = !open;
    if (open) details.open = true;

    const finish = () => {
      details.open = open;
      panel.inert = false;
      closing.current = false;
      animation.current = null;
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    const transition = panel.animate(
      [from, { opacity: open ? 1 : 0, transform: open ? "translateY(0)" : "translateY(-6px)" }],
      { duration: 210, easing: "ease-out" },
    );
    animation.current = transition;
    transition.onfinish = finish;
  }

  return (
    <details
      ref={menu}
      className="group lg:hidden"
      onClick={(event) => {
        if (!(event.target instanceof Element)) return;
        if (event.target.closest("summary")) {
          event.preventDefault();
          setOpen(!menu.current?.open || closing.current);
          return;
        }
        const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
        if (!link || !menu.current) return;
        setOpen(false);
        const target = document.getElementById(link.hash.slice(1));
        if (target) {
          target.tabIndex = -1;
          target.focus({ preventScroll: true });
        }
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !menu.current?.open) return;
        event.preventDefault();
        setOpen(false);
        menu.current.querySelector("summary")?.focus();
      }}
      onBlur={(event) => {
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 text-sm focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mint [&::-webkit-details-marker]:hidden">
        {label}
        <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
          <span className="h-px w-5 bg-brand-mint group-open:translate-y-[3.5px] group-open:rotate-45" />
          <span className="h-px w-5 bg-brand-mint group-open:-translate-y-[3.5px] group-open:-rotate-45" />
        </span>
      </summary>
      {children}
    </details>
  );
}
