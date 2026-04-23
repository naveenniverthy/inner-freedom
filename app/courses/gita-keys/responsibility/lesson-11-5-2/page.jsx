import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-11-5-2" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 11
      </h1>

      <h2 className="text-lg text-gray-600">
        Action is better than withdrawal (Gita 5.2)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          संन्यासः कर्मयोगश्च निःश्रेयसकरावुभौ ।<br />
          तयोस्तु कर्मसंन्यासात्कर्मयोगो विशिष्यते ॥ ५.२ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          sannyāsaḥ karma-yogaś ca niḥśreyasa-karāv ubhau <br />
          tayos tu karma-sannyāsāt karma-yogo viśiṣyate
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Both renunciation of action and karma yoga lead to the highest good.
          But among the two, karma yoga —
          action with the right understanding —
          is superior.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>sannyāsaḥ — renunciation of action</li>
          <li>karma-yogaḥ — action with right attitude</li>
          <li>niḥśreyasa — highest good</li>
          <li>viśiṣyate — superior</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Arjuna is confused between two paths:
          acting in the world,
          or withdrawing from it.

          Krishna clarifies:

          Both can lead to growth,
          but for most people,
          action is the better path.

          Why?

          Because the mind is still active.

          Simply avoiding action
          does not remove inner disturbance.

          Right action,
          performed with the right understanding,
          helps purify the mind.

          It prepares the person for clarity.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility is not opposed to spirituality.

          It is the path to it.

          By acting rightly,
          we refine the mind,
          reduce selfishness,
          and grow in clarity.

          Avoiding responsibility
          often delays growth.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          Do I sometimes think that avoiding action
          will bring peace?

          What happens when I engage fully,
          but with the right attitude?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-11-5-2" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-11-5-2" />
        </aside>
      </div>
    </div>
  );
}
