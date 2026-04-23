import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-5-3-19" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 5
      </h1>

      <h2 className="text-lg text-gray-600">
        Act without dependence on results (Gita 3.19)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          तस्मादसक्तः सततं कार्यं कर्म समाचर ।<br />
          असक्तो ह्याचरन्कर्म परमाप्नोति पुरुषः ॥ ३.१९ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          tasmād asaktaḥ satataṁ kāryaṁ karma samācara <br />
          asakto hy ācaran karma param āpnoti puruṣaḥ
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Therefore, perform your duty constantly without attachment.
          By acting without dependence on results,
          a person attains the highest.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>asaktaḥ — free from attachment</li>
          <li>kāryam karma — required action</li>
          <li>samācara — perform properly</li>
          <li>param — the highest</li>
          <li>āpnoti — attains</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna now builds on the previous teaching.

          Action is unavoidable.

          But how we act makes all the difference.

          If we act with attachment to results,
          the mind becomes dependent and disturbed.

          If we act without attachment,
          the mind remains free and steady.

          The action is the same.
          The inner attitude is different.

          That difference transforms action into a path of growth.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility is not just about doing.

          It is about how we relate to what we do.

          Acting with attachment creates pressure.

          Acting with clarity creates freedom.

          This verse refines responsibility
          into intelligent and balanced action.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          When I act, am I driven by outcome,
          or by the clarity of what is right?

          What changes when I drop attachment to results?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-5-3-19" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-5-3-19" />
        </aside>
      </div>
    </div>
  );
}
