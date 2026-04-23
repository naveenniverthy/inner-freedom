import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-27-7-4-7-7" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 27
      </h1>

      <h2 className="text-lg text-gray-600">
        The nature of reality — matter and consciousness (Gita 7.4–7.7)
      </h2>

      {/* Verses */}
      <section>
        <h3 className="font-medium text-lg">Verses</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च ।<br />
          अहंकार इतीयं मे भिन्ना प्रकृतिरष्टधा ॥ ७.४ ॥<br /><br />

          अपरेयमितस्त्वन्यां प्रकृतिं विद्धि मे पराम् ।<br />
          जीवभूतां महाबाहो ययेदं धार्यते जगत् ॥ ७.५ ॥<br /><br />

          एतद्योनीनि भूतानि सर्वाणीत्युपधारय ।<br />
          अहं कृत्स्नस्य जगतः प्रभवः प्रलयस्तथा ॥ ७.६ ॥<br /><br />

          मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय ।<br />
          मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव ॥ ७.७ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          bhūmir āpo&apos;nalo vāyuḥ khaṁ mano buddhir eva ca <br />
          ahaṅkāra itīyaṁ me bhinnā prakṛtir aṣṭadhā <br /><br />

          apareyam itas tv anyāṁ prakṛtiṁ viddhi me parām <br />
          jīva-bhūtāṁ mahā-bāho yayedaṁ dhāryate jagat <br /><br />

          etad yonīni bhūtāni sarvāṇīty upadhāraya <br />
          ahaṁ kṛtsnasya jagataḥ prabhavaḥ pralayas tathā <br /><br />

          mattaḥ parataraṁ nānyat kiñcid asti dhanañjaya <br />
          mayi sarvam idaṁ protaṁ sūtre maṇi-gaṇā iva
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Earth, water, fire, air, space, mind, intellect, and ego —
          these form My lower nature.

          But beyond this is My higher nature — the conscious being,
          because of which the world is sustained.

          Know that all beings arise from these.
          I am the source and dissolution of the entire universe.

          There is nothing beyond Me.
          Everything is strung on Me like pearls on a thread.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>prakṛti — nature (matter)</li>
          <li>aṣṭadhā — eightfold</li>
          <li>parā prakṛti — higher nature (consciousness)</li>
          <li>jīva-bhūtām — manifest as living beings</li>
          <li>prabhavaḥ — source</li>
          <li>pralayaḥ — dissolution</li>
          <li>protam — strung, pervading</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna now gives a complete vision of reality.

          There are two aspects:

          Matter — the physical world, body, mind, intellect.

          Consciousness — the living principle that makes all experience possible.

          Matter by itself is inert.
          Consciousness enlivens it.

          Together, they form the world of experience.

          Krishna says:
          I am both the material cause and the intelligence behind everything.

          Everything depends on this one reality,
          just like pearls depend on a thread.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <p className="text-gray-700">
          Clarity expands from self-understanding
          to understanding the whole.

          I am not just an individual in the world.

          The same consciousness that I am
          is the basis of the entire universe.

          This vision removes separation
          and brings a sense of wholeness.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          What is the difference between matter and consciousness?

          Can I see that my body and mind are objects,
          but I am the one who is aware of them?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-27-7-4-7-7" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-27-7-4-7-7" />
        </aside>
      </div>
    </div>
  );
}
