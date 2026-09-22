import "server-only";

// Original geometric marks, sharing the terminal language used in Networking.
const iconPaths = {
  user: "M15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 21v-3a7 6 0 0 1 14 0v3Z",
  code: "M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16",
  bars: "M4 20v-6h3v6ZM10.5 20V9h3v11ZM17 20V4h3v16Z",
  checkCircle: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM8 12l3 3 5-6",
  building: "M6 21V3h12v18M3 21h18M10 21v-5h4v5M9 7h1M14 7h1M9 11h1M14 11h1",
  users: "M11 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM2 20v-2a6 5 0 0 1 12 0v2ZM17 14a5 5 0 0 1 5 5v1h-5",
  flag: "M5 22V3M5 4h14l-4 4 4 4H5",
  trophy: "M7 3h10v6a5 5 0 0 1-10 0ZM7 5H3v2a4 4 0 0 0 4 4M17 5h4v2a4 4 0 0 1-4 4M12 14v7M8 21h8",
} as const;

export type BuildIconName = keyof typeof iconPaths;

export default function BuildIcon({ name, className }: { name: BuildIconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}
