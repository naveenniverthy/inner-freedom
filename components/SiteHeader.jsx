"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/five-keys", label: "Five Keys" },
  { href: "/guided-path", label: "Guided Path" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader({ user }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const supabase = createBrowserSupabaseClient();
    await supabase.auth.signOut();
    router.refresh();
    router.push("/");
  }

  return (
    <header className="surface mb-6 flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <Link href="/" className="inline-flex flex-col gap-1">
          <span className="font-serif text-[2rem] leading-none tracking-[-0.05em] text-ink-900">
            Moksha
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-ink-900/50 sm:text-[0.72rem]">
            Five Keys to Inner Freedom
          </span>
        </Link>
        <p className="mt-2 max-w-[28rem] text-sm leading-6 text-ink-900/55">
          A simple framework for living with clarity, steadiness, and inner freedom.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:items-end">
        <nav className="flex flex-wrap justify-center gap-2 text-sm sm:justify-end">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-center leading-tight transition",
                pathname === item.href
                  ? "bg-sage-700 text-sand-50"
                  : "bg-white/55 text-ink-900 hover:bg-white/80"
              )}
            >
              {item.label}
            </Link>
          ))}
          {user ? (
            <Link
              href="/dashboard"
              className={cn(
                "rounded-full px-3 py-2 transition",
                pathname === "/dashboard"
                  ? "bg-sage-700 text-sand-50"
                  : "bg-white/55 text-ink-900 hover:bg-white/80"
              )}
            >
              Dashboard
            </Link>
          ) : null}
        </nav>
        {user ? (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-ink-900/55">{user.email}</span>
            <button type="button" className="btn-secondary px-4 py-2" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
