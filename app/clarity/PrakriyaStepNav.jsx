import Link from "next/link";

const prakriyaSteps = [
  {
    slug: "prakriya",
    title: "What is a Prakriya",
    href: "/clarity/prakriya"
  },
  {
    slug: "seer-seen",
    title: "Seer-Seen",
    href: "/clarity/seer-seen"
  },
  {
    slug: "snake-rope",
    title: "Snake-Rope",
    href: "/clarity/snake-rope"
  },
  {
    slug: "three-states",
    title: "Three States",
    href: "/clarity/three-states"
  },
  {
    slug: "five-sheaths",
    title: "Five Sheaths",
    href: "/clarity/five-sheaths"
  }
];

function StepButton({ step, direction }) {
  if (!step) {
    return null;
  }

  const label = direction === "previous" ? "Previous Step" : "Next Step";

  return (
    <Link
      href={step.href}
      className="rounded-xl border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:bg-stone-50"
    >
      {label}
      <span className="block text-xs font-normal text-stone-500">
        {step.title}
      </span>
    </Link>
  );
}

export default function PrakriyaStepNav({ currentSlug }) {
  const currentIndex = prakriyaSteps.findIndex(
    (step) => step.slug === currentSlug
  );

  if (currentIndex < 0) {
    return null;
  }

  const currentStep = prakriyaSteps[currentIndex];
  const previousStep = prakriyaSteps[currentIndex - 1] ?? null;
  const nextStep = prakriyaSteps[currentIndex + 1] ?? null;

  return (
    <nav className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-200">
      <div className="space-y-4">
        <div className="text-sm leading-6 text-stone-500">
          <Link href="/clarity" className="hover:text-stone-700">
            Clarity
          </Link>
          <span className="px-2 text-stone-300">/</span>
          <span className="text-stone-700">{currentStep.title}</span>
        </div>

        <p className="text-sm font-medium text-stone-700">
          Step {currentIndex + 1} of {prakriyaSteps.length}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
          <StepButton step={previousStep} direction="previous" />
          <StepButton step={nextStep} direction="next" />
          <Link
            href="/clarity"
            className="rounded-xl bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-200"
          >
            Back to Clarity
          </Link>
        </div>
      </div>
    </nav>
  );
}
