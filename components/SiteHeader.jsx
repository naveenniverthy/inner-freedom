"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/understanding", label: "Begin" },
  { href: "/trust-surrender", label: "Trust" },
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
    <header className="surface mb-6 flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Link href="/" className="font-serif text-2xl tracking-[-0.04em]">
          Inner Freedom
        </Link>
        <p className="mt-1 text-sm text-ink-900/55">
          Calm guidance for self-knowledge and living wisdom.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:items-end">
        <nav className="flex flex-wrap gap-2 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 transition",
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

        <div className="flex items-center gap-2 text-sm">
          {user ? (
            <>
              <span className="text-ink-900/55">{user.email}</span>
              <button type="button" className="btn-secondary px-4 py-2" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn-secondary px-4 py-2">
                Login
              </Link>
              <Link href="/register" className="btn-primary px-4 py-2">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
