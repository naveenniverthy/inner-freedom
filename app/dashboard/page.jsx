import { redirect } from "next/navigation";
import DashboardClient from "@/components/DashboardClient";
import { getDashboardStage } from "@/lib/dashboard";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Dashboard",
  description:
    "View your saved path, latest insight, and current place in the Five Keys."
};

export default async function DashboardPage({ searchParams }) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const [{ data: resultRow }, { data: latestInsight }, { data: preference }] =
    await Promise.all([
      supabase
        .from("assessment_results")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from("daily_insights")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from("preferences")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle()
    ]);

  const result = getDashboardStage(resultRow);

  return (
    <DashboardClient
      user={user}
      result={result}
      latestInsight={latestInsight}
      preference={preference}
      saved={searchParams?.saved === "1"}
    />
  );
}
