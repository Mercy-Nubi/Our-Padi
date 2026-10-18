import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export type TabSlug = "home" | "reflection" | "chat-bot" | "therapy" | "community";

interface Tab {
  slug: TabSlug;
  label: string;
  icon: (active: boolean) => ReactNode;
}

const ACTIVE = "#0A8781";
const IDLE = "#66737C";
const FILL = "#E6F6F4";

const svgProps = (active: boolean) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: active ? ACTIVE : IDLE,
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

const TABS: ReadonlyArray<Tab> = [
  {
    slug: "home",
    label: "Home",
    icon: (a) => (
      <svg {...svgProps(a)}>
        <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" fill={a ? FILL : "none"} />
      </svg>
    ),
  },
  {
    slug: "reflection",
    label: "Reflection",
    icon: (a) => (
      <svg {...svgProps(a)}>
        <circle cx="12" cy="5" r="2.5" fill={a ? FILL : "none"} />
        <path d="M12 8v5M6 11l6 2 6-2M4 19c2.5-3 5.2-4 8-4s5.5 1 8 4z" fill={a ? FILL : "none"} />
      </svg>
    ),
  },
  {
    slug: "chat-bot",
    label: "Chat bot",
    icon: (a) => (
      <svg {...svgProps(a)}>
        <path
          d="M12 4c4.97 0 9 3.13 9 7s-4.03 7-9 7c-1.1 0-2.15-.15-3.12-.43L4 19.5l1.4-3.6C4.5 14.6 3 13 3 11c0-3.87 4.03-7 9-7z"
          fill={a ? FILL : "none"}
        />
        <path d="M8.5 11h.01M12 11h.01M15.5 11h.01" strokeWidth={3} />
      </svg>
    ),
  },
  {
    slug: "therapy",
    label: "Therapy",
    icon: (a) => (
      <svg {...svgProps(a)}>
        <path d="M12 11s-3.5-2.2-3.5-4.6A2 2 0 0 1 12 5a2 2 0 0 1 3.5 1.4C15.5 8.8 12 11 12 11z" fill={a ? FILL : "none"} />
        <path d="M3 16h3l3 1.5h5a1.5 1.5 0 0 0 0-3h-3" />
        <path d="M6 20h7l7-4.5" />
      </svg>
    ),
  },
  {
    slug: "community",
    label: "Community",
    icon: (a) => (
      <svg {...svgProps(a)}>
        <path d="M3 5h12v8H8l-5 3z" fill={a ? FILL : "none"} />
        <path d="M15 9h6v8l-3-2h-6v-2" />
      </svg>
    ),
  },
];

/** The app's five-tab bottom navigation. */
export default function BottomNav({ active }: { active: TabSlug }) {
  return (
    <nav aria-label="Main" className="bottom-nav">
      {TABS.map((tab) => {
        const isActive = tab.slug === active;
        return (
          <Link
            key={tab.slug}
            to={`/${tab.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={isActive ? "bottom-nav__tab is-active" : "bottom-nav__tab"}
          >
            {tab.icon(isActive)}
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
