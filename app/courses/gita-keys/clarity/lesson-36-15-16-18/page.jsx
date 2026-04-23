import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-36-15-16-18" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 36
      </h1>

      <h2 className="text-lg text-gray-600">
        The perishable, imperishable, and the Supreme (Gita 15.16–18)
      </h2>

      {/* Verses */}
      <section>
        <h3 className="font-medium text-lg">Verses</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          द्वाविमौ पुरुषौ लोके क्षरश्चाक्षर एव च ।<br />
          क्षरः सर्वाणि भूतानि कूटस्थोऽक्षर उच्यते ॥ १५.१६ ॥<br /><br />

          उत्तमः पुरुषस्त्वन्यः परमात्मेत्युदाहृतः ।<br />
          यो लोकत्रयमाविश्य बिभर्त्यव्यय ईश्वरः ॥ १५.१७ ॥<br /><br />

          यस्मात्क्षरमतीतोऽहमक्षरादपि चोत्तमः ।<br />
          अतोऽस्मि लोके वेदे च प्रथितः पुरुषोत्तमः ॥ १५.१८ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          dvāv imau puruṣau loke kṣaraś cākṣara eva ca <br />
          kṣaraḥ sarvāṇi bhūtāni kūṭastho&apos;kṣara ucyate <br /><br />

          uttamaḥ puruṣas tv anyaḥ paramātmety udāhṛtaḥ <br />
          yo loka-trayam āviśya bibharty avyaya īśvaraḥ <br /><br />

          yasmāt kṣaram atīto&apos;ham akṣarād api cottamaḥ <br />
          ato&apos;smi loke vede ca prathitaḥ puruṣottamaḥ
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          There are two aspects in this world:
          the perishable (changing) and the imperishable (unchanging).

          The perishable includes all beings,
          while the imperishable is the unchanging principle.

          Beyond both is the Supreme Self,
          which pervades and sustains everything.

          Because it transcends both,
          it is called the highest reality.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>kṣara — perishable, changing</li>
          <li>akṣara — imperishable, unchanging</li>
          <li>puruṣaḥ — Self</li>
          <li>paramātmā — Supreme Self</li>
          <li>uttamaḥ — highest</li>
          <li>puruṣottamaḥ — the supreme reality</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna gives a final and clear classification.

          The world of change — bodies, thoughts, experiences —
          is perishable.

          The witnessing consciousness associated with the individual
          appears unchanging.

          But even this distinction is transcended.

          The ultimate reality is beyond both.

          It is not limited by change,
          nor by any concept of individuality.

          It is the basis of both the changing and the unchanging.

          That is the true nature of the Self.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <p className="text-gray-700">
          Clarity culminates here.

          First, I see:
          I am not the changing body-mind.

          Then I recognize:
          I am the unchanging awareness.

          Finally, I understand:
          that awareness is not individual —
          it is the limitless reality itself.

          This removes all sense of limitation.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          What in my experience is constantly changing?

          What is the unchanging presence
          because of which all change is known?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-36-15-16-18" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-36-15-16-18" />
        </aside>
      </div>
    </div>
  );
}
