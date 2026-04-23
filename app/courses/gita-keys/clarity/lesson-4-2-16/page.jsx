import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-4-2-16" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 4
      </h1>

      <h2 className="text-lg text-gray-600">
        The real never ceases; the unreal never truly exists (Gita 2.16)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          नासतो विद्यते भावो नाभावो विद्यते सतः ।<br />
          उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः ॥ २.१६ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          nāsato vidyate bhāvo nābhāvo vidyate sataḥ <br />
          ubhayor api dṛṣṭo&apos;ntas tv anayos tattva-darśibhiḥ
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          The unreal never truly exists, and the real never ceases to exist.
          The truth about both has been clearly understood by those who see
          reality as it is.
        </p>
      </section>

      {/* Sandhi-vigraha */}
      <section>
        <h3 className="font-medium text-lg">Sandhi-vigraha</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          न असतः विद्यते भावः । न अभावः विद्यते सतः ।<br />
          उभयोः अपि दृष्टः अन्तः तु अनयोः तत्त्व-दर्शिभिः ॥
        </div>
      </section>

      {/* Anvaya */}
      <section>
        <h3 className="font-medium text-lg">Anvaya</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          असतः भावः न विद्यते । सतः अभावः न विद्यते ।<br />
          अनयोः उभयोः अपि अन्तः तत्त्व-दर्शिभिः दृष्टः ।
        </div>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>asataḥ — of the unreal</li>
          <li>bhāvaḥ — existence</li>
          <li>sataḥ — of the real</li>
          <li>abhāvaḥ — non-existence</li>
          <li>tattva-darśibhiḥ — by those who see the truth</li>
          <li>dṛṣṭaḥ antaḥ — the conclusion is seen</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <div className="text-gray-700 space-y-4">
          <p>Krishna now gives a fundamental principle.</p>

          <p>
            What is real never goes out of existence. What is unreal never truly
            comes into existence.
          </p>

          <p>
            The body appears and disappears. Therefore, it does not have
            absolute reality.
          </p>

          <p>The Self never disappears. Therefore, it is real.</p>

          <p>Wise people clearly see this difference.</p>
        </div>
      </section>

      {/* Connection to Clarity */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <div className="text-gray-700 space-y-4">
          <p>
            Clarity is not about collecting information. It is about seeing
            correctly.
          </p>

          <p>
            We usually take changing things as absolutely real, and ignore what
            is always present.
          </p>

          <p>
            This verse teaches us to distinguish:<br />
            What is temporary?<br />
            What is always present?
          </p>

          <p>That discrimination is the beginning of true knowledge.</p>
        </div>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <div className="text-gray-700 space-y-4">
          <p>In my experience, what keeps changing?</p>

          <p>
            Is there something that does not come and go, but is always present?
          </p>
        </div>
      </section>
            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-4-2-16" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-4-2-16" />
        </aside>
      </div>
    </div>
  );
}
