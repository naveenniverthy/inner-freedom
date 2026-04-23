import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-8-3-35" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 8
      </h1>

      <h2 className="text-lg text-gray-600">
        Your path is better than imitation (Gita 3.35)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।<br />
          स्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥ ३.३५ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          śreyān svadharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt <br />
          svadharme nidhanaṁ śreyaḥ para-dharmo bhayāvahaḥ
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          One’s own duty, even if imperfectly done,
          is better than another’s duty well performed.

          It is better to live and even fail in one’s own role.
          Taking up another’s role leads to fear and confusion.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>svadharma — one’s own role</li>
          <li>para-dharma — another’s role</li>
          <li>śreyān — better</li>
          <li>viguṇaḥ — imperfect</li>
          <li>bhayāvahaḥ — leads to fear</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna now addresses comparison and imitation.

          Every person has a unique situation,
          set of roles, and responsibilities.

          Trying to imitate others may look attractive,
          but it creates inner conflict.

          Why?

          Because it is not aligned with one’s reality.

          Even if imperfect,
          acting according to one’s own role
          brings clarity and growth.

          Imitation, even if successful externally,
          creates insecurity and fear internally.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility means owning your path.

          Not comparing,
          not copying,
          but responding to your situation as it is.

          This brings stability and authenticity.

          It removes confusion and builds confidence over time.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          Where in my life am I comparing myself to others?

          What is my actual responsibility,
          independent of comparison?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-8-3-35" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-8-3-35" />
        </aside>
      </div>
    </div>
  );
}
