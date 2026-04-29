import AssessmentGuidance from "@/components/AssessmentGuidance";

export default function ResultsPage() {
  const scores = {
    clarity: 52,
    responsibility: 35,
    discipline: 60,
    acceptance: 40,
    offering: 30
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <AssessmentGuidance scores={scores} />
    </div>
  );
}
