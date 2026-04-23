import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-25-6-20-6-23" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 25
      </h1>

      <h2 className="text-lg text-gray-600">
        The mind resting in the Self (Gita 6.20–6.23)
      </h2>

      {/* Verses */}
      <section>
        <h3 className="font-medium text-lg">Verses</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          यत्रोपरमते चित्तं निरुद्धं योगसेवया ।<br />
          यत्र चैवात्मनाऽऽत्मानं पश्यन्नात्मनि तुष्यति ॥ ६.२० ॥<br /><br />

          सुखमात्यन्तिकं यत्तद्बुद्धिग्राह्यमतीन्द्रियम् ।<br />
          वेत्ति यत्र न चैवायं स्थितश्चलति तत्त्वतः ॥ ६.२१ ॥<br /><br />

          यं लब्ध्वा चापरं लाभं मन्यते नाधिकं ततः ।<br />
          यस्मिन्स्थितो न दुःखेन गुरुणापि विचाल्यते ॥ ६.२२ ॥<br /><br />

          तं विद्याद्दुःखसंयोगवियोगं योगसंज्ञितम् ।<br />
          स निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा ॥ ६.२३ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          yatroparamate cittaṁ niruddhaṁ yoga-sevayā <br />
          yatra caivātmanātmānaṁ paśyann ātmani tuṣyati <br /><br />

          sukham ātyantikaṁ yat tad buddhi-grāhyam atīndriyam <br />
          vetti yatra na caivāyaṁ sthitaś calati tattvataḥ <br /><br />

          yaṁ labdhvā cāparaṁ lābhaṁ manyate nādhikaṁ tataḥ <br />
          yasmin sthito na duḥkhena guruṇāpi vicālyate <br /><br />

          taṁ vidyād duḥkha-saṁyoga-viyogaṁ yoga-saṁjñitam <br />
          sa niścayena yoktavyo yogo&apos;nirviṇṇa-cetasā
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          When the mind becomes quiet through yoga,
          and one sees the Self by the mind and is satisfied in the Self alone,
          that is the state Krishna describes.

          There one knows a limitless happiness,
          grasped by the intellect and beyond the senses.
          Established there, one does not move away from reality.

          Having gained that, one does not consider any other gain greater.
          Established in that, one is not shaken even by great sorrow.

          Know that state as freedom from union with sorrow.
          This yoga should be pursued with firmness and without discouragement.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>uparamate — becomes quiet, comes to rest</li>
          <li>cittam — mind</li>
          <li>ātmani tuṣyati — is satisfied in the Self</li>
          <li>ātyantikam sukham — limitless happiness</li>
          <li>atīndriyam — beyond the senses</li>
          <li>na vicālyate — is not shaken</li>
          <li>duḥkha-saṁyoga-viyogam — disconnection from sorrow</li>
          <li>anirviṇṇa-cetasā — with an undiscouraged mind</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna now describes the fruit of a prepared and steady mind.

          When the mind becomes quiet,
          it is no longer running outward for fulfillment.

          In that quietness,
          one recognizes the Self and rests in it.

          This is not pleasure from an object.
          It is not excitement.
          It is not emotional thrill.

          It is a deep fullness that does not depend on circumstances.

          Once this is recognized,
          outer gains lose their power,
          and even heavy sorrow cannot shake the person in the same way.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <p className="text-gray-700">
          Clarity culminates in inner abiding.

          At first, clarity is understanding:
          “I am not the body-mind alone.”

          Then it matures into quiet recognition:
          “My fullness is not outside me.”

          This cluster shows the experiential stability
          that comes when clarity is supported by a quiet mind.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          What do I usually depend on for happiness?

          Have I ever noticed a quiet contentment
          that does not come from any object or achievement?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-25-6-20-6-23" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-25-6-20-6-23" />
        </aside>
      </div>
    </div>
  );
}
