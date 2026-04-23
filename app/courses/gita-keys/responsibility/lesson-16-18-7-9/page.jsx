import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-16-18-7-9" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 16
      </h1>

      <h2 className="text-lg text-gray-600">
        Do not give up responsibility wrongly (Gita 18.7–9)
      </h2>

      {/* Verses */}
      <section>
        <h3 className="font-medium text-lg">Verses</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          नियतस्य तु संन्यासः कर्मणो नोपपद्यते ।<br />
          मोहात्तस्य परित्यागस्तामसः परिकीर्तितः ॥ १८.७ ॥<br /><br />

          दुःखमित्येव यत्कर्म कायक्लेशभयात्त्यजेत् ।<br />
          स कृत्वा राजसं त्यागं नैव त्यागफलम् लभेत् ॥ १८.८ ॥<br /><br />

          कार्यमित्येव यत्कर्म नियतं क्रियतेऽर्जुन ।<br />
          सङ्गं त्यक्त्वा फलं चैव स त्यागः सात्त्विको मतः ॥ १८.९ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          niyatasya tu sannyāsaḥ karmaṇo nopapadyate <br />
          mohāt tasya parityāgas tāmasaḥ parikīrtitaḥ <br /><br />

          duḥkham ity eva yat karma kāya-kleśa-bhayāt tyajet <br />
          sa kṛtvā rājasaṁ tyāgaṁ naiva tyāga-phalaṁ labhet <br /><br />

          kāryam ity eva yat karma niyataṁ kriyate arjuna <br />
          saṅgaṁ tyaktvā phalaṁ caiva sa tyāgaḥ sāttviko mataḥ
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Giving up required action is not appropriate.
          Abandoning it out of confusion is called tamasic (ignorant).

          Giving up action out of fear of difficulty
          is called rajasic (driven by discomfort).

          Performing one’s duty simply because it is right,
          without attachment to results,
          is called sattvic (clear and balanced).
        </p>
      </section>

      {/* Key Ideas */}
      <section>
        <h3 className="font-medium text-lg">Key Ideas</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>tāmasic — giving up due to confusion</li>
          <li>rājasic — giving up due to discomfort</li>
          <li>sāttvic — acting with clarity and balance</li>
          <li>tyāga — attitude toward action</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna clarifies a subtle point.

          Not all “giving up” is wise.

          Sometimes we avoid responsibility
          and call it detachment.

          But the reason matters.

          If we avoid action out of confusion,
          it leads to stagnation.

          If we avoid action out of discomfort,
          it leads to weakness.

          True maturity is:
          doing what is right,
          without attachment.

          That is clarity in action.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility is not about doing everything.

          It is about doing the right things,
          in the right way,
          for the right reason.

          This verse helps us check our intention behind action
          and avoid self-deception.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          When I avoid something,
          what is the real reason?

          Is it clarity,
          or is it discomfort or confusion?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-16-18-7-9" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-16-18-7-9" />
        </aside>
      </div>
    </div>
  );
}
