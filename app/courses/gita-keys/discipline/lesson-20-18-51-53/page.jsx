import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-20-18-51-53" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 20
              </h1>

              <h2 className="text-lg text-gray-600">
                The culmination of discipline (Gita 18.51–53)
              </h2>

              {/* Verses */}
              <section>
                <h3 className="font-medium text-lg">Verses</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  बुद्ध्या विशुद्धया युक्तो धृत्यात्मानं नियम्य च ।<br />
                  शब्दादीन्विषयांस्त्यक्त्वा रागद्वेषौ व्युदस्य च ॥ १८.५१ ॥<br /><br />

                  विविक्तसेवी लघ्वाशी यतवाक्कायमानसः ।<br />
                  ध्यानयोगपरो नित्यं वैराग्यं समुपाश्रितः ॥ १८.५२ ॥<br /><br />

                  अहंकारं बलं दर्पं कामं क्रोधं परिग्रहम् ।<br />
                  विमुच्य निर्ममः शान्तो ब्रह्मभूयाय कल्पते ॥ १८.५३ ॥
                </div>
              </section>

              {/* Transliteration (key lines) */}
              <section>
                <h3 className="font-medium text-lg">Transliteration (Key Lines)</h3>

                <p className="text-gray-700">
                  buddhyā viśuddhayā — with a purified intellect <br />
                  yatavāk-kāya-mānasaḥ — disciplined in speech, body, and mind <br />
                  dhyāna-yoga-paraḥ — committed to contemplation <br />
                  vairāgya — dispassion <br />
                  śāntaḥ — peaceful
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  With a refined intellect,
                  controlled mind, speech, and body,
                  and a life of simplicity and reflection,

                  letting go of ego, attachment, and agitation,
                  one becomes calm, clear, and ready
                  for the highest understanding.
                </p>
              </section>

              {/* Key Ideas */}
              <section>
                <h3 className="font-medium text-lg">Key Ideas</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>viśuddhi — purification</li>
                  <li>niyama — discipline</li>
                  <li>dhyāna — contemplation</li>
                  <li>vairāgya — dispassion</li>
                  <li>śānti — inner peace</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now shows the result of sustained discipline.

                  The personality becomes refined.

                  The mind becomes quiet.

                  Reactions reduce.

                  Ego softens.

                  Life becomes simple and aligned.

                  This is not forced.

                  It is the natural outcome
                  of consistent sādhana.

                  Discipline prepares the mind
                  for clarity.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is not the goal.

                  It is preparation.

                  It prepares the mind
                  to recognize what is already true.

                  This verse shows the maturity
                  that comes from steady practice.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Over time, is my mind becoming calmer?

                  What changes do I notice
                  through my efforts at discipline?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-20-18-51-53" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-20-18-51-53" />
        </aside>
      </div>
    </div>
  );
}
