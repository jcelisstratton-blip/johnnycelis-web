export type IconName =
  | "globe"
  | "whatsapp"
  | "linkedin"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "whop"
  | "community"
  | "facebook"
  | "mail"
  | "x";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 0 0-7.5 13.9L3 21l4.3-1.4A9 9 0 1 0 12 3z" />
          <path d="M9 9.6c.5 2.6 2.5 4.6 5 5.1" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <line x1="8" y1="10" x2="8" y2="16" />
          <line x1="8" y1="7.2" x2="8" y2="7.21" strokeWidth={2.4} />
          <path d="M11 16v-3.6a2 2 0 0 1 4 0V16" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
          <circle cx="12" cy="12" r="4" />
          <line x1="16.6" y1="7.4" x2="16.61" y2="7.4" strokeWidth={2.2} />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path d="M14 4v10.2a3.3 3.3 0 1 1-2.4-3.18" />
          <path d="M14 4c.5 2.4 2 3.9 4.4 4.2" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect x="3" y="5.5" width="18" height="13" rx="4" />
          <path d="M10 9.2l5.5 2.8-5.5 2.8v-5.6z" />
        </svg>
      );
    case "whop":
      return (
        <svg {...common}>
          <path d="M4 8l1.5-4h13L20 8" />
          <path d="M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8z" />
          <path d="M9 12a3 3 0 0 0 6 0" />
        </svg>
      );
    case "community":
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 0 0-7.5 13.9L3 21l4.3-1.4A9 9 0 1 0 12 3z" />
          <circle cx="8.7" cy="12" r="0.9" strokeWidth={2} />
          <circle cx="12" cy="12" r="0.9" strokeWidth={2} />
          <circle cx="15.3" cy="12" r="0.9" strokeWidth={2} />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M13.2 19v-6.6h-2v-2.3h2V8.6c0-1.7 1-2.7 2.7-2.7h1.9v2.3h-1.2c-.8 0-1 .3-1 1v1.9h2.2l-.3 2.3h-1.9V19" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
      );
  }
}
