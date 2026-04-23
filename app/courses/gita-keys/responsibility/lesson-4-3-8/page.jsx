import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-4-3-8" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 4
      </h1>

      <h2 className="text-lg text-gray-600">
        Action is unavoidable (Gita 3.8)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः ।<br />
          शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः ॥ ३.८ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          niyataṁ kuru karma tvaṁ karma jyāyo hy akarmaṇaḥ <br />
          śarīra-yātrāpi ca te na prasiddhyed akarmaṇaḥ
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Perform your required duties.
          Action is superior to inaction.
          Even the maintenance of your body
          would not be possible without action.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>niyatam karma — obligatory action</li>
          <li>kuru — perform</li>
          <li>karma — action</li>
          <li>akarmaṇaḥ — inaction</li>
          <li>śarīra-yātrā — sustaining the body</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna removes a common misunderstanding.

          One cannot escape action.

          Even doing nothing is a form of action.

          Life itself requires action —
          eating, working, moving, interacting.

          Therefore, the question is not:
          “Should I act or not?”

          The real question is:
          “How should I act?”

          Avoiding action is not a solution.
          Right action is the solution.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility begins with accepting
          that action is unavoidable.

          Once this is clear,
          we stop escaping and start engaging.

          Then we can focus on doing what is appropriate,
          instead of trying to avoid effort or discomfort.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          Do I sometimes avoid action thinking it will give peace?

          What happens when I fully accept that action is part of life?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-4-3-8" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-4-3-8" />
        </aside>
      </div>
    </div>
  );
}
