import Link from "next/link";

const courseLinks = [
  { href: "/course", label: "20 Values for Inner Growth" },
  { href: "/courses/inquiry", label: "Inquiry into the Self" },
  { href: "/courses/foundations", label: "Foundations of Self-Knowledge" },
];

const exploreLinks = [
  { href: "/five-keys", label: "Five Keys" },
  { href: "/guided-path", label: "Guided Path" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="surface mt-6 flex flex-col gap-6 px-5 py-5 text-sm text-ink-900/60 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <p className="font-serif text-xl tracking-[-0.04em] text-ink-900">Moksha</p>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-ink-900/45 sm:text-[0.72rem]">
          Five Keys to Inner Freedom
        </p>
      </div>
      <div className="flex flex-col gap-5 sm:items-end">
        <div className="flex flex-col gap-2 sm:items-end">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ink-900/45">
            Courses
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:max-w-[34rem] sm:justify-end">
            {courseLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-center leading-tight transition hover:text-ink-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ink-900/45">
            Explore
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:max-w-[34rem] sm:justify-end">
            {exploreLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-center leading-tight transition hover:text-ink-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
