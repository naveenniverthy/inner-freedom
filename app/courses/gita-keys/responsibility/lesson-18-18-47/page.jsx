import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-18-18-47" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 18
      </h1>

      <h2 className="text-lg text-gray-600">
        Stay with your role (Gita 18.47)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।<br />
          स्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम् ॥ १८.४७ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          śreyān svadharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt <br />
          svabhāva-niyataṁ karma kurvan nāpnoti kilbiṣam
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          One’s own duty, even if imperfect,
          is better than another’s well performed.

          By doing work aligned with one’s own nature,
          one does not incur inner conflict.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>svadharma — one’s own role</li>
          <li>para-dharma — another’s role</li>
          <li>svabhāva-niyatam — aligned with one’s nature</li>
          <li>kilbiṣam — inner conflict, error</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna repeats this idea for emphasis.

          Why?

          Because the tendency to compare
          and imitate is very strong.

          We often think:
          “That path is better,”
          “That role is easier,”
          “That life is more successful.”

          But stepping away from one’s own role
          creates inner conflict.

          Even if outwardly successful,
          it lacks alignment.

          Staying with one’s role,
          even with imperfections,
          leads to stability and growth.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility is about ownership.

          Owning your role,
          your situation,
          your path.

          Not escaping,
          not comparing,
          but engaging fully.

          This creates clarity, strength, and maturity.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          Where am I tempted to compare my life with others?

          What happens if I fully accept and engage with my own role?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-18-18-47" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-18-18-47" />
        </aside>
      </div>
    </div>
  );
}
