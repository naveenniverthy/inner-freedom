"use client";

import Link from "next/link";
import { labelForProgress } from "@/lib/dashboard";
import { formatDate } from "@/lib/utils";

const prepItems = [
  { key: "clarity", label: "Clarity" },
  { key: "freedom", label: "Freedom from dependence" },
  { key: "steadiness", label: "Mental steadiness" },
  { key: "seeking", label: "Depth of seeking" }
];

export default function PathDashboard({
  result,
  showSavePrompt = false,
  user,
  latestInsight
}) {
  if (!result) {
    return null;
  }

  const stageTitle = result.stageTitle || result.title;
  const prep = result.preparation;

  return (
    <section className="surface mt-8 px-5 py-6 sm:px-8 sm:py-10">
      <div className="border-b border-sage-700/10 pb-7">
        <p className="eyebrow">Your Path</p>
        <h2 className="mt-3 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
          You are a {stageTitle}
        </h2>
        <div className="mt-5 rounded-[1.75rem] border border-sage-700/10 bg-sand-50/85 px-5 py-5">
          <p className="font-serif text-2xl tracking-[-0.03em] text-ink-900">
            Take a moment.
          </p>
          <p className="mt-2 text-base text-ink-900/52">
            This is not a label. It is a direction.
          </p>
        </div>
        <p className="body-copy mt-5">{result.description}</p>
      </div>

      {showSavePrompt && !user ? (
        <div className="mt-6 flex flex-col gap-3 rounded-[1.75rem] border border-sage-700/10 bg-sage-100/55 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-ink-900">Save your path</p>
            <p className="mt-1 text-sm text-ink-900/60">
              Create an account to keep your result, revisit your stage, and receive daily insight later.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/login" className="btn-secondary">
              Login
            </Link>
            <Link href="/register" className="btn-primary">
              Register
            </Link>
          </div>
        </div>
      ) : null}

      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-sage-700/10 bg-white/72 p-5 lg:col-span-2">
          <p className="eyebrow">Welcome message</p>
          <p className="mt-3 text-lg leading-8 text-ink-900/72">{result.welcome}</p>
        </article>

        <article className="rounded-[1.75rem] border border-sage-700/10 bg-white/72 p-5">
          <p className="eyebrow">Your Current Stage</p>
          <h3 className="mt-3 font-serif text-3xl tracking-[-0.04em]">
            {stageTitle}
          </h3>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-ink-900/45">
            {result.totalScore ? <p>{result.totalScore} / 40</p> : null}
            {result.createdAt ? <p>Last assessment: {formatDate(result.createdAt)}</p> : null}
          </div>
          <p className="mt-4 text-[0.98rem] leading-8 text-ink-900/65">
            {result.description}
          </p>
        </article>

        <article className="rounded-[1.75rem] border border-sage-700/10 bg-white/72 p-5">
          <p className="eyebrow">Your Next Step</p>
          <p className="mt-3 text-[1.02rem] leading-8 text-ink-900/68">
            {result.nextStep}
          </p>
        </article>

        <article className="rounded-[1.75rem] border border-sage-700/10 bg-white/72 p-5 lg:col-span-2">
          <p className="eyebrow">Your Preparation</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {prepItems.map((item) => (
              <div key={item.key} className="rounded-[1.25rem] bg-sand-50/80 p-4">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span>{item.label}</span>
                  <span className="font-semibold text-sage-700">
                    {prep[item.key].label ?? labelForProgress(prep[item.key])}
                  </span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-sage-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sage-300 to-sage-700"
                    style={{ width: `${prep[item.key].score ?? prep[item.key]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-sage-700/10 bg-white/72 p-5">
          <p className="eyebrow">Your Recommended Path</p>
          <p className="mt-3 text-[1.02rem] leading-8 text-ink-900/68">
            {result.recommendedPath}
          </p>
        </article>

        <article className="rounded-[1.75rem] border border-sage-700/10 bg-white/72 p-5">
          <p className="eyebrow">Rooted in Traditional Teaching</p>
          <p className="mt-3 text-[1.02rem] leading-8 text-ink-900/68">
            {result.rooted}
          </p>
        </article>

        <article className="rounded-[1.75rem] border border-sage-700/10 bg-white/72 p-5 lg:col-span-2">
          <p className="eyebrow">A Reflection for This Stage</p>
          <p className="mt-3 text-[1.02rem] leading-8 text-ink-900/68">
            {result.reflection}
          </p>
        </article>

        {latestInsight ? (
          <article className="rounded-[1.9rem] border border-sage-700/10 bg-gradient-to-br from-[#f2e8db] via-[#f8f3ec] to-white/90 p-5 sm:p-6 lg:col-span-2">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="eyebrow">Daily Insight</p>
                <h3 className="mt-3 font-serif text-3xl tracking-[-0.04em] sm:text-4xl">
                  {latestInsight.title}
                </h3>
                <p className="mt-2 text-sm text-ink-900/45">New insight appears daily</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button type="button" className="btn-secondary">
                  Save
                </button>
                <button type="button" className="btn-secondary">
                  Reflect on this
                </button>
                <Link href="/daily-insight" className="btn-secondary">
                  View Insight
                </Link>
              </div>
            </div>
            <p className="mt-4 text-[1.02rem] leading-8 text-ink-900/68">
              {latestInsight.body}
            </p>
          </article>
        ) : null}
      </div>
    </section>
  );
}
