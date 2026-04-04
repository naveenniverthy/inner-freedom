import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import {
  pendingAssessmentStorageKey,
  toDatabaseResult
} from "@/lib/assessment";

export async function upsertProfileAndPreferences({
  user,
  fullName = ""
}) {
  const supabase = createBrowserSupabaseClient();

  await supabase.from("profiles").upsert(
    {
      id: user.id,
      email: user.email,
      full_name: fullName
    },
    { onConflict: "id" }
  );

  await supabase.from("preferences").upsert(
    {
      user_id: user.id
    },
    { onConflict: "user_id" }
  );
}

export async function persistPendingAssessmentIfPresent(user) {
  if (typeof window === "undefined") return false;

  const pendingRaw = window.localStorage.getItem(pendingAssessmentStorageKey);
  if (!pendingRaw) return false;

  const pending = JSON.parse(pendingRaw);
  const supabase = createBrowserSupabaseClient();

  const { error } = await supabase.from("assessment_results").insert({
    user_id: user.id,
    ...toDatabaseResult(pending)
  });

  if (error) {
    throw error;
  }

  window.localStorage.removeItem(pendingAssessmentStorageKey);
  return true;
}
