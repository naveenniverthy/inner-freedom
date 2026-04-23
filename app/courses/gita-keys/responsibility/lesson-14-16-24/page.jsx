import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-14-16-24" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 14
      </h1>

      <h2 className="text-lg text-gray-600">
        Let knowledge guide your actions (Gita 16.24)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ ।<br />
          ज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि ॥ १६.२४ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          tasmāc chāstraṁ pramāṇaṁ te kāryākārya-vyavasthitau <br />
          jñātvā śāstra-vidhānoktaṁ karma kartum ihārhasi
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Therefore, let knowledge (scriptural wisdom) be your guide
          in determining what should be done and what should not be done.

          Understanding this, you should act accordingly.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>śāstram — knowledge, teaching</li>
          <li>pramāṇam — means of knowledge, guide</li>
          <li>kārya — what is to be done</li>
          <li>akārya — what is not to be done</li>
          <li>vyavasthiti — clarity, determination</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna gives a final guideline for action.

          How do we decide what is right?

          Not based on impulse,
          not based on convenience,
          not based on emotion alone.

          Action must be guided by knowledge.

          Knowledge here means:
          a clear understanding of life,
          values,
          and the consequences of action.

          When action is guided by knowledge,
          it becomes consistent and reliable.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility requires clarity in decision-making.

          Without guidance,
          actions become random.

          With knowledge,
          actions become aligned.

          This verse completes the framework of responsibility:
          act,
          act rightly,
          and let knowledge guide action.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          When I make decisions,
          what do I rely on?

          Is my action guided by clarity,
          or by habit and impulse?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-14-16-24" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-14-16-24" />
        </aside>
      </div>
    </div>
  );
}
