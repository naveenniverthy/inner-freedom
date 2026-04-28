import Link from "next/link";

export const metadata = {
  title: "Stages of Inner Freedom | Moksha",
  description:
    "A gentle journey map for seekers to understand their current stage and connect it with the Five Keys to inner freedom."
};

const stages = [
  {
    title: "The Search Begins",
    feeling: "Life may be outwardly fine, but something still feels incomplete.",
    struggle: "Restlessness, comparison, success without deep satisfaction.",
    helps: "Begin with Clarity and Responsibility."
  },
  {
    title: "Lightening the Mind",
    feeling: "The mind begins to see how much it is carrying.",
    struggle:
      "Over-identification with role, title, job, status, network, opinion, and past entanglements.",
    helps: "Discipline, Acceptance, and a gentler relationship with life."
  },
  {
    title: "Living Differently",
    feeling: "The seeker begins to reorient life consciously.",
    struggle:
      "Old circles and old habits no longer feel fully aligned, but the new direction is still forming.",
    helps:
      "Choose healthier associations: spiritual community, meditation circle, fitness group, service circle, study group, or an ikigai-aligned community."
  },
  {
    title: "Becoming Ready",
    feeling:
      "The person begins to value preparation, steadiness, humility, and inner maturity.",
    struggle:
      "Wanting freedom immediately, but still being pulled by emotional reactivity.",
    helps: "Sadhana, dharma, karma yoga, and devotion to the total order."
  },
  {
    title: "Seeing Clearly",
    feeling: "The seeker becomes ready for inquiry into the Self.",
    struggle: "Confusing intellectual understanding with clear seeing.",
    helps: "Clarity through listening, reflection, and contemplation."
  },
  {
    title: "Living from Clarity",
    feeling: "Knowledge begins to inform daily life.",
    struggle:
      "Old conditioning still appears, but it is no longer taken as the final truth.",
    helps: "Assimilation, steady remembrance, and living the Five Keys together."
  },
  {
    title: "Inner Freedom",
    feeling:
      "Freedom is understood as one’s nature, not as something newly produced.",
    struggle: "Life continues, but bondage loses its force.",
    helps: "Abidance in truth, compassion, simplicity, and offering."
  }
];

export default function Page() {
  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <section className="surface px-6 py-10 sm:px-10 sm:py-14 lg:px-12">
          <p className="eyebrow">Journey Map</p>
          <h1 className="section-title mt-5">Stages of Inner Freedom</h1>
          <p className="body-copy mt-6 text-lg">
            Inner freedom does not usually unfold as a straight line. These
            stages are gentle markers, not fixed labels. They help a seeker
            recognize where they may be now, what may be becoming clear, and
            which of the Five Keys may support the next step.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          {stages.map((stage, index) => (
            <article
              key={stage.title}
              className="surface flex h-full flex-col px-6 py-7 sm:px-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-500">
                Stage {index + 1}
              </p>
              <h2 className="mt-3 font-serif text-2xl leading-tight text-ink-900">
                {stage.title}
              </h2>

              <div className="mt-6 space-y-5 text-[0.98rem] leading-7 text-gray-700">
                <div>
                  <h3 className="text-sm font-semibold text-sage-700">
                    Feeling
                  </h3>
                  <p className="mt-1">{stage.feeling}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-sage-700">
                    Common struggle
                  </h3>
                  <p className="mt-1">{stage.struggle}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-sage-700">
                    What helps
                  </h3>
                  <p className="mt-1">{stage.helps}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="surface bg-sand-50/80 px-6 py-9 sm:px-10">
          <p className="eyebrow">Five Keys</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-ink-900 sm:text-4xl">
            The stages point back to the Keys
          </h2>
          <p className="body-copy mt-5">
            The stages help you recognize the condition of the mind. The Five
            Keys help you walk the path. Clarity shows the truth.
            Responsibility aligns action. Discipline steadies the mind.
            Acceptance softens resistance. Offering turns life into sadhana.
          </p>
          <div className="mt-7">
            <Link href="/five-keys" className="btn-primary">
              Explore the Five Keys
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
