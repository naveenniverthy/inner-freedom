import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-13-16-1-3" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 13
      </h1>

      <h2 className="text-lg text-gray-600">
        Living with values (Gita 16.1–3)
      </h2>

      {/* Verses */}
      <section>
        <h3 className="font-medium text-lg">Verses</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः ।<br />
          दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम् ॥ १६.१ ॥<br /><br />

          अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम् ।<br />
          दया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम् ॥ १६.२ ॥<br /><br />

          तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता ।<br />
          भवन्ति सम्पदं दैवीमभिजातस्य भारत ॥ १६.३ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          abhayaṁ sattva-saṁśuddhir jñāna-yoga-vyavasthitiḥ <br />
          dānaṁ damaś ca yajñaś ca svādhyāyas tapa ārjavam <br /><br />

          ahiṁsā satyam akrodhas tyāgaḥ śāntir apaiśunam <br />
          dayā bhūteṣv aloluptvaṁ mārdavaṁ hrīr acāpalam <br /><br />

          tejaḥ kṣamā dhṛtiḥ śaucam adroho nātimānitā <br />
          bhavanti sampadaṁ daivīm abhijātasya bhārata
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Fearlessness, purity of mind, commitment to knowledge,
          charity, self-control, discipline, study, and sincerity;

          non-violence, truthfulness, absence of anger,
          renunciation, calmness, absence of fault-finding,
          compassion, freedom from greed, gentleness, modesty, steadiness;

          strength, forgiveness, endurance, cleanliness,
          absence of hatred, and absence of arrogance —

          these are the qualities of a mature and responsible person.
        </p>
      </section>

      {/* Key Values */}
      <section>
        <h3 className="font-medium text-lg">Key Values</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>abhayam — fearlessness</li>
          <li>śuddhi — purity</li>
          <li>satya — truthfulness</li>
          <li>ahiṁsā — non-violence</li>
          <li>dayā — compassion</li>
          <li>kṣamā — forgiveness</li>
          <li>śānti — calmness</li>
          <li>ārjavam — sincerity</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Responsibility is not only about action.

          It is also about the person who acts.

          These verses describe the inner qualities
          of a responsible individual.

          When these values are present,
          actions become naturally aligned and appropriate.

          Without these values,
          even correct actions can become harmful or ego-driven.

          Responsibility is therefore both external and internal.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility is supported by character.

          Right values guide right action.

          When values are clear,
          decisions become easier.

          This transforms responsibility
          from effort into natural expression.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          Which of these values are strong in me?

          Which ones need more attention
          for my actions to become more aligned?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-13-16-1-3" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-13-16-1-3" />
        </aside>
      </div>
    </div>
  );
}
