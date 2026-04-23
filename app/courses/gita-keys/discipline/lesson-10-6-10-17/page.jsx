import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-10-6-10-17" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 10
              </h1>

              <h2 className="text-lg text-gray-600">
                A structured life supports a steady mind (Gita 6.10–17)
              </h2>

              {/* Verses (Selected for flow) */}
              <section>
                <h3 className="font-medium text-lg">Verses (Selected)</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  योगी युञ्जीत सततमात्मानं रहसि स्थितः ।<br />
                  एकाकी यतचित्तात्मा निराशीरपरिग्रहः ॥ ६.१० ॥<br /><br />

                  शुचौ देशे प्रतिष्ठाप्य स्थिरमासनमात्मनः ।<br />
                  नात्युच्छ्रितं नातिनीचं चैलाजिनकुशोत्तरम् ॥ ६.११ ॥<br /><br />

                  तत्रैकाग्रं मनः कृत्वा यतचित्तेन्द्रियक्रियः ।<br />
                  उपविश्यासने युञ्ज्याद्योगमात्मविशुद्धये ॥ ६.१२ ॥<br /><br />

                  नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः ।<br />
                  न चातिस्वप्नशीलस्य जाग्रतो नैव चार्जुन ॥ ६.१६ ॥<br /><br />

                  युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु ।<br />
                  युक्तस्वप्नावबोधस्य योगो भवति दुःखहा ॥ ६.१७ ॥
                </div>
              </section>

              {/* Transliteration (key lines) */}
              <section>
                <h3 className="font-medium text-lg">Transliteration (Key Lines)</h3>

                <p className="text-gray-700">
                  rahasi sthitaḥ — in a quiet place <br />
                  ekāgraṁ manaḥ — focused mind <br />
                  ātma-viśuddhaye — for inner purification <br />
                  yukta-āhāra-vihārasya — balanced living <br />
                  yukta-svapna-avabodhasya — proper rest and activity
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  A disciplined person lives with structure and balance.

                  With a steady seat, a quiet place, and a focused mind,
                  one practices for inner clarity.

                  Discipline is not extreme.

                  It is not too much or too little.

                  Proper food, activity, rest, and effort
                  create a balanced life.

                  From this balance,
                  steadiness of mind arises.
                </p>
              </section>

              {/* Key Ideas */}
              <section>
                <h3 className="font-medium text-lg">Key Ideas</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>ekāgratā — focus</li>
                  <li>yukta — balanced</li>
                  <li>āhāra — food</li>
                  <li>vihāra — lifestyle</li>
                  <li>svapna — sleep</li>
                  <li>viśuddhi — inner purification</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now gives practical guidance.

                  Discipline is not only mental.

                  It includes lifestyle.

                  A scattered lifestyle leads to a scattered mind.

                  An extreme lifestyle leads to instability.

                  A balanced life supports a steady mind.

                  Small things matter:
                  how we eat,
                  how we sleep,
                  how we work,
                  how we rest.

                  These shape the condition of the mind.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is daily structure.

                  Not occasional effort,
                  but consistent balance.

                  When life is structured properly,
                  the mind becomes available for clarity.

                  This verse shows that sādhana includes lifestyle design.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Is my daily life balanced?

                  Which one needs adjustment —
                  food, sleep, work, or rest?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-10-6-10-17" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-10-6-10-17" />
        </aside>
      </div>
    </div>
  );
}
