import { createServerSupabaseClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Daily Insight",
  description:
    "Read a gentle daily reflection drawn from the spirit of the Five Keys."
};

export default async function DailyInsightPage() {
  const supabase = await createServerSupabaseClient();

  const { data: latestInsight } = await supabase
    .from("daily_insights")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  return (
    <section className="surface px-6 py-8 sm:px-8 sm:py-10">
      <p className="eyebrow">Daily Insight</p>
      <h1 className="section-title mt-3 max-w-[12ch]">A gentle reflection for today</h1>
      {latestInsight ? (
        <div className="mt-8 rounded-[1.75rem] border border-sage-700/10 bg-white/72 p-6">
          <p className="text-sm text-ink-900/45">{formatDate(latestInsight.created_at)}</p>
          <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">
            {latestInsight.title}
          </h2>
          <p className="mt-5 text-[1.02rem] leading-8 text-ink-900/68">
            {latestInsight.body}
          </p>
          {latestInsight.category ? (
            <p className="mt-5 text-sm uppercase tracking-[0.14em] text-sage-500">
              {latestInsight.category}
            </p>
          ) : null}
        </div>
      ) : (
        <p className="body-copy mt-6">
          No insight has been published yet. Once you add one in Supabase, it will
          appear here automatically.
        </p>
      )}
    </section>
  );
}
