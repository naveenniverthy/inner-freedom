import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/course", label: "Course" },
  { href: "/understanding", label: "Begin" },
  { href: "/contact", label: "Contact" }
];

export default function SiteFooter() {
  return (
    <footer className="surface mt-6 flex flex-col gap-2 px-5 py-5 text-sm text-ink-900/60 sm:flex-row sm:items-center sm:justify-between">
      <p>Inner Freedom</p>
      <div className="flex flex-wrap gap-3">
        {footerLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition hover:text-ink-900"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
