import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-2-2-12" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 2
      </h1>

      <h2 className="text-lg text-gray-600">
        The Self is never absent (Gita 2.12)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः ।<br />
          न चैव न भविष्यामः सर्वे वयमतः परम् ॥ २.१२ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          na tvevāhaṁ jātu nāsaṁ na tvaṁ neme janādhipāḥ
          na caiva na bhaviṣyāmaḥ sarve vayam ataḥ param
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          There was never a time when I did not exist, nor you, nor these kings.
          Nor will there be a time when all of us will cease to exist.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>na — not</li>
          <li>tu eva — indeed</li>
          <li>aham — I</li>
          <li>tvam — you</li>
          <li>janādhipāḥ — these kings</li>
          <li>bhaviṣyāmaḥ — we shall be</li>
          <li>sarve vayam — all of us</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna now removes Arjuna’s basic misunderstanding.

          You think people come into existence and then disappear.
          That is not true.

          The body appears and disappears.
          But the Self does not.

          You were never absent in the past.
          You are not absent now.
          You will never be absent in the future.

          Existence is continuous.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <p className="text-gray-700">
          Clarity means seeing what is constant and what is changing.

          The body changes.
          Relationships change.
          Situations change.

          But existence — "I am" — never changes.

          This verse shifts attention from the temporary
          to what is always present.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          Have I ever experienced my own absence?

          What in my experience has always been present,
          through all changes?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-2-2-12" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-2-2-12" />
        </aside>
      </div>
    </div>
  );
}
