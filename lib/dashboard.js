import { getStageByKey } from "@/lib/stages";

export function getDashboardStage(resultRow) {
  if (!resultRow) return null;

  const stage = getStageByKey(resultRow.stage_key);

  return {
    ...stage,
    totalScore: resultRow.total_score,
    createdAt: resultRow.created_at,
    preparation: {
      clarity: resultRow.clarity_score,
      freedom: resultRow.freedom_score,
      steadiness: resultRow.steadiness_score,
      seeking: resultRow.seeking_score
    }
  };
}

export function labelForProgress(score) {
  if (score <= 35) return "Emerging";
  if (score <= 55) return "Opening";
  if (score <= 78) return "Growing";
  return "Steady";
}
