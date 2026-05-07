import ValuesAssessmentClient from "./ValuesAssessmentClient";

export const metadata = {
  title: "Human Values & Inner Alignment Assessment | Moksha",
  description:
    "A calm reflection to discover your core values, strongest character strengths, lived alignment, and suggested Moksha Keys for growth."
};

export default function HumanValuesAssessmentPage() {
  return (
    <main className="min-h-screen bg-soft-glow px-4 py-8 text-ink-900 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <ValuesAssessmentClient />
      </div>
    </main>
  );
}
