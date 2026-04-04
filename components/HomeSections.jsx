const cards = [
  {
    title: "What is Advaita Vedanta?",
    body: "A clear introduction to the non-dual vision that points to your real nature as whole, aware, and free."
  },
  {
    title: "Why Self-Knowledge Matters",
    body: "See why lasting peace cannot come from outer change alone, and why clarity matters so deeply."
  },
  {
    title: "Practice and Preparation",
    body: "Understand the role of steadiness, reflection, and an inwardly available mind."
  },
  {
    title: "Living with Clarity",
    body: "Bring insight into daily decisions, relationships, and the way you meet pressure."
  }
];

export default function HomeSections() {
  return (
    <div className="mt-6 grid gap-6">
      <section className="grid gap-4 lg:grid-cols-4">
        {cards.map((card, index) => (
          <article key={card.title} className="surface px-5 py-6">
            <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-ink-900">
              {card.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink-900/62">{card.body}</p>
          </article>
        ))}
      </section>

      <section className="surface grid gap-6 px-6 py-7 sm:px-8 sm:py-9 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">What this is</p>
          <h2 className="section-title mt-3 max-w-[12ch] text-4xl sm:text-5xl">
            A simple, thoughtful place to learn
          </h2>
        </div>
        <div className="space-y-4 text-ink-900/68">
          <p className="body-copy">
            Inner Freedom is for beginners, thoughtful seekers, and anyone who wants
            a grounded entry into self-knowledge without heavy language or spiritual
            performance.
          </p>
          <p className="body-copy">
            The assessment, dashboard, and daily insight system are designed to give
            structure without pressure, and depth without complication.
          </p>
        </div>
      </section>
    </div>
  );
}
