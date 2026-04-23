import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-10-4-15" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 10
      </h1>

      <h2 className="text-lg text-gray-600">
        Follow the path of right action (Gita 4.15)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः ।<br />
          कुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम् ॥ ४.१५ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          evaṁ jñātvā kṛtaṁ karma pūrvair api mumukṣubhiḥ <br />
          kuru karmaiva tasmāt tvaṁ pūrvaiḥ pūrvataraṁ kṛtam
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Knowing this, even those who sought freedom in the past
          performed action.

          Therefore, you too should act,
          following the example of those before you.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>mumukṣubhiḥ — seekers of freedom</li>
          <li>jñātvā — having understood</li>
          <li>kṛtam karma — action performed</li>
          <li>pūrvaiḥ — by those before</li>
          <li>kuru — perform</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna reassures Arjuna.

          Even those who understood the truth
          did not withdraw from life.

          They continued to act.

          Why?

          Because action is part of life,
          and it can be a means of growth.

          The difference is:
          they acted with understanding,
          not with attachment.

          Their actions were aligned,
          steady, and free from inner conflict.

          Krishna is asking Arjuna
          to follow that same path.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility is a timeless principle.

          Every generation must act,
          and act rightly.

          Learning from those who have understood life
          helps us act with clarity and confidence.

          Responsibility is not new —
          it is a continuous flow through time.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          Who are the people I look up to
          for how to live and act?

          What can I learn from their way of engaging with life?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-10-4-15" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-10-4-15" />
        </aside>
      </div>
    </div>
  );
}
