import Link from "next/link";

const footerLinks = [
  { href: "/five-keys", label: "Five Keys" },
  { href: "/guided-path", label: "Guided Path" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function SiteFooter() {
  return (
    <footer className="surface mt-6 flex flex-col gap-4 px-5 py-5 text-sm text-ink-900/60 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <p className="font-serif text-xl tracking-[-0.04em] text-ink-900">Moksha</p>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-ink-900/45 sm:text-[0.72rem]">
          Five Keys to Inner Freedom
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:max-w-[34rem] sm:justify-end">
        {footerLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-center leading-tight transition hover:text-ink-900"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
