import "./globals.css";
import { Manrope, Fraunces } from "next/font/google";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces"
});

export const metadata = {
  title: "Five Keys to Inner Freedom",
  description:
    "A calm, modern space for exploring the five keys to inner freedom through clarity, responsibility, discipline, acceptance, and offering."
};

export default async function RootLayout({ children }) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${fraunces.variable} bg-sand-50 font-sans text-ink-900 antialiased`}
      >
        <div className="min-h-screen bg-soft-glow">
          <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-4 sm:px-6 lg:px-8">
            <SiteHeader user={user} />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
