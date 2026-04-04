import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="surface grid gap-6 px-6 py-7 sm:px-8 sm:py-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:px-12 lg:py-12">
      <div>
        <p className="eyebrow">Advaita Vedanta for modern life</p>
        <h1 className="mt-3 max-w-[5ch] font-serif text-6xl leading-none tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          Inner Freedom
        </h1>
        <p className="body-copy mt-5 max-w-2xl text-lg">
          A simple space to understand Advaita Vedanta, discover your next step,
          and bring living wisdom into ordinary life.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/assessment" className="btn-primary">
            Find Your Next Step
          </Link>
          <Link href="/daily-insight" className="btn-secondary">
            Explore Daily Insight
          </Link>
        </div>
      </div>

      <aside className="rounded-[1.75rem] border border-sage-700/10 bg-white/60 p-5">
        <p className="eyebrow">A quiet beginning</p>
        <p className="mt-3 text-[1.02rem] leading-8 text-ink-900/65">
          Clear introductions, grounded reflection, and a personal dashboard that
          helps you track where you are without turning inner growth into
          performance.
        </p>
      </aside>
    </section>
  );
}
