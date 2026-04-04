import AssessmentExperience from "@/components/AssessmentExperience";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Find Your Next Step | Inner Freedom"
};

export default async function AssessmentPage() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  const { data: latestInsight } = await supabase
    .from("daily_insights")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  return <AssessmentExperience user={user} latestInsight={latestInsight} />;
}
