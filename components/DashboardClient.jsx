"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import PathDashboard from "@/components/PathDashboard";

export default function DashboardClient({
  user,
  result,
  latestInsight,
  preference,
  saved = false
}) {
  const [emailEnabled, setEmailEnabled] = useState(
    preference?.daily_insight_email_enabled ?? false
  );
  const [frequency, setFrequency] = useState(
    preference?.daily_insight_frequency ?? "daily"
  );
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function updatePreferences(nextValues) {
    startTransition(async () => {
      const supabase = createBrowserSupabaseClient();

      const payload = {
        user_id: user.id,
        daily_insight_email_enabled:
          nextValues.daily_insight_email_enabled ?? emailEnabled,
        daily_insight_frequency: nextValues.daily_insight_frequency ?? frequency
      };

      const { error } = await supabase
        .from("preferences")
        .upsert(payload, { onConflict: "user_id" });

      if (error) {
        setMessage("We could not save your preference just now.");
        return;
      }

      if (typeof nextValues.daily_insight_email_enabled === "boolean") {
        setEmailEnabled(nextValues.daily_insight_email_enabled);
      }

      if (nextValues.daily_insight_frequency) {
        setFrequency(nextValues.daily_insight_frequency);
      }

      setMessage("Preferences saved.");
    });
  }

  return (
    <div className="grid gap-6">
      {saved ? (
        <div className="surface reveal-soft px-5 py-4 text-sm text-sage-700">
          Your path has been saved.
        </div>
      ) : null}

      {result ? (
        <PathDashboard result={result} user={user} latestInsight={latestInsight} />
      ) : (
        <section className="surface px-6 py-8 sm:px-8 sm:py-10">
          <p className="eyebrow">Welcome</p>
          <h1 className="section-title mt-3">Your dashboard is ready</h1>
          <p className="body-copy mt-5">
            Take the assessment to discover your current stage and save your path
            here.
          </p>
        </section>
      )}

      {result ? (
        <section className="surface px-6 py-7 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Continue Your Path</p>
              <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em] sm:text-4xl">
                Three simple ways to continue
              </h2>
            </div>
            <Link href="/assessment" className="btn-secondary">
              Retake Assessment
            </Link>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <article className="rounded-[1.75rem] border border-sage-700/10 bg-white/72 p-5">
              <p className="eyebrow">Revisit your stage</p>
              <p className="mt-3 text-[1rem] leading-8 text-ink-900/66">
                Spend a few minutes with your current stage description and notice what feels most true right now.
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-sage-700/10 bg-white/72 p-5">
              <p className="eyebrow">Take one next step</p>
              <p className="mt-3 text-[1rem] leading-8 text-ink-900/66">
                Choose one practical action from your path and keep it small enough to return to daily.
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-sage-700/10 bg-white/72 p-5">
              <p className="eyebrow">Read today’s insight</p>
              <p className="mt-3 text-[1rem] leading-8 text-ink-900/66">
                Let one short reflection support your attention without turning it into pressure.
              </p>
            </article>
          </div>
        </section>
      ) : null}

      <section className="surface grid gap-5 px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="eyebrow">Daily Insight</p>
          <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em] sm:text-4xl">
            A calm reflection for today
          </h2>
          {latestInsight ? (
            <>
              <h3 className="mt-5 font-serif text-3xl tracking-[-0.04em] text-ink-900">
                {latestInsight.title}
              </h3>
              <p className="mt-2 text-sm text-ink-900/45">New insight appears daily</p>
              <p className="mt-3 text-[1.02rem] leading-8 text-ink-900/68">
                {latestInsight.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button type="button" className="btn-secondary">
                  Save
                </button>
                <button type="button" className="btn-secondary">
                  Reflect on this
                </button>
              </div>
            </>
          ) : (
            <p className="mt-5 text-[1.02rem] leading-8 text-ink-900/68">
              Add a record to the <code>daily_insights</code> table and the latest
              insight will appear here automatically.
            </p>
          )}
        </div>

        <aside className="rounded-[1.75rem] border border-sage-700/10 bg-white/70 p-5 sm:p-6">
          <p className="eyebrow">Preferences</p>
          <label className="mt-5 flex items-start gap-3 text-sm text-ink-900/70">
            <input
              type="checkbox"
              checked={emailEnabled}
              onChange={(event) =>
                updatePreferences({
                  daily_insight_email_enabled: event.target.checked
                })
              }
              className="mt-1 h-4 w-4 rounded border-sage-700/20 accent-[#2f413b]"
            />
            <span>Email me daily insight</span>
          </label>

          <label className="mt-5 grid gap-2">
            <span className="text-sm text-ink-900/65">Frequency</span>
            <select
              className="input-shell"
              value={frequency}
              onChange={(event) =>
                updatePreferences({
                  daily_insight_frequency: event.target.value
                })
              }
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </label>

          <p className="mt-4 text-sm text-ink-900/50">
            This stores your preference now and prepares the app for future automated delivery.
          </p>

          {message || isPending ? (
            <p className="mt-4 rounded-2xl border border-sage-700/10 bg-sage-100/55 px-4 py-3 text-sm text-sage-700">
              {isPending ? "Saving..." : message}
            </p>
          ) : null}
        </aside>
      </section>
    </div>
  );
}
