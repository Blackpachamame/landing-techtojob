"use client";

import { useRef, type ReactNode } from "react";

export default function MobileMenu({ label, children }: { label: string; children: ReactNode }) {
  const menu = useRef<HTMLDetailsElement>(null);

  return (
    <details
      ref={menu}
      className="group lg:hidden"
      onClick={(event) => {
        const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
        if (!link || !menu.current) return;
        menu.current.open = false;
        const target = document.getElementById(link.hash.slice(1));
        if (target) {
          target.tabIndex = -1;
          target.focus({ preventScroll: true });
        }
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !menu.current?.open) return;
        event.preventDefault();
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }}
      onBlur={(event) => {
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) {
          event.currentTarget.open = false;
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
