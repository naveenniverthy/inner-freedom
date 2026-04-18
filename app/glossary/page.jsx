import Link from "next/link";

const glossarySections = [
  {
    title: "Self and Reality",
    description: "A few foundational words about the self and what is ultimately real.",
    terms: [
      {
        term: "Atma",
        meaning: "your true self",
        explanation:
          "Atma does not mean the body, mind, role, or personality. It points to the conscious self because of which every experience is known. In Vedanta, freedom comes from knowing this clearly."
      },
      {
        term: "Brahman",
        meaning: "the limitless reality",
        explanation:
          "Brahman is the reality because of which everything exists. It is not one object among many. Vedanta reveals that the truth of the self and the truth of reality are not two."
      },
      {
        term: "Satyam",
        meaning: "that which is always true",
        explanation:
          "Satyam is that which does not come and go. It does not depend on changing conditions to exist. Vedanta uses this word for what is ultimately real."
      },
      {
        term: "Mithya",
        meaning: "dependent reality",
        explanation:
          "Mithya does not mean unreal like a total fantasy. It means something that exists, but not independently. The world is experienced, but it depends on a deeper reality."
      },
      {
        term: "Anatma",
        meaning: "not-self",
        explanation:
          "Anatma includes everything that is known as an object of experience, such as the body, mind, thoughts, and emotions. These are important in life, but they are not the essential self."
      }
    ]
  },
  {
    title: "Bondage and Freedom",
    description: "Words that point to the problem Vedanta addresses and the freedom it reveals.",
    terms: [
      {
        term: "Bandha",
        meaning: "bondage",
        explanation:
          "Bondage in Vedanta is not a physical chain. It is the mistake of taking oneself to be limited, lacking, vulnerable, or incomplete. This confusion creates fear, dependence, and struggle."
      },
      {
        term: "Moksha",
        meaning: "freedom",
        explanation:
          "Moksha is freedom from inner limitation and dependence. It is not a result produced in time. It is the recognition that your true nature is already whole."
      },
      {
        term: "Samsara",
        meaning: "the cycle of struggle",
        explanation:
          "Samsara is the life of repeated dependence, fear, chasing, disappointment, and insecurity born of self-misunderstanding. It is not merely rebirth in a distant sense. It is a problem felt here and now."
      },
      {
        term: "Avidya",
        meaning: "self-ignorance",
        explanation:
          "Avidya is not lack of information. It is not knowing the truth of oneself. Because of this, a person looks for lasting security in what is changing."
      },
      {
        term: "Adhyasa",
        meaning: "superimposition",
        explanation:
          "Adhyasa means mixing up what belongs to one thing with another. In daily life, we take the limitations of the body and mind to be \"I.\" Vedanta helps separate the seer from the seen."
      }
    ]
  },
  {
    title: "Living and Action",
    description: "Terms that help bring the teaching into ordinary life, choice, and relationship.",
    terms: [
      {
        term: "Dharma",
        meaning: "what is right or appropriate",
        explanation:
          "Dharma is not the same as religion in a narrow sense. It refers to the order of life and the appropriate response in a given situation. Living in line with dharma helps make the mind steady and mature."
      },
      {
        term: "Karma",
        meaning: "action and its result",
        explanation:
          "Karma includes what we do, why we do it, and the results that follow. We control action more than result. Understanding karma helps us live with maturity and responsibility."
      },
      {
        term: "Karma Yoga",
        meaning: "a mature attitude to action",
        explanation:
          "Karma Yoga means acting responsibly without emotional dependence on outcomes. You do what is to be done and receive results with balance. This turns everyday life into preparation for freedom."
      },
      {
        term: "Yajna",
        meaning: "offering",
        explanation:
          "Yajna is the spirit of contribution rather than grasping. It reminds us that life is sustained through mutual support. It shifts action from self-centeredness to alignment with the whole."
      },
      {
        term: "Prasada Buddhi",
        meaning: "receiving results as given",
        explanation:
          "Prasada Buddhi is the attitude of receiving the result of action with acceptance. This does not mean passivity. It means learning, adjusting, and staying inwardly composed."
      }
    ]
  },
  {
    title: "Inner Preparation",
    description: "Qualities that help the mind become steady enough for clear self-inquiry.",
    terms: [
      {
        term: "Viveka",
        meaning: "discernment",
        explanation:
          "Viveka is the ability to clearly distinguish between the lasting and the changing, the self and the non-self, the essential and the non-essential. It is one of the most important qualifications in Vedanta."
      },
      {
        term: "Vairagya",
        meaning: "dispassion",
        explanation:
          "Vairagya is not hatred of the world. It is freedom from emotional dependence on things, people, and experiences for your fullness. It gives inner space and clarity."
      },
      {
        term: "Shama",
        meaning: "mastery over the mind",
        explanation:
          "Shama is the capacity to quieten and steady the mind. It allows reflection instead of reaction. Without some calmness, deeper inquiry becomes difficult."
      },
      {
        term: "Dama",
        meaning: "mastery over the senses",
        explanation:
          "Dama is the ability to manage sensory impulses. It is not suppression for its own sake. It protects attention and helps a person live deliberately."
      },
      {
        term: "Titiksha",
        meaning: "forbearance",
        explanation:
          "Titiksha is the capacity to endure discomfort without collapsing into complaint, anger, or self-pity. It helps us stay available to what matters even when life is not ideal."
      },
      {
        term: "Shraddha",
        meaning: "trust in the teaching and method",
        explanation:
          "Shraddha is not blind belief. It is a respectful openness to the teaching, teacher, and means of knowledge until understanding becomes clear. It allows learning to happen."
      },
      {
        term: "Samadhana",
        meaning: "inner focus",
        explanation:
          "Samadhana is the ability to stay collected and oriented toward what matters most. It is steadiness of purpose. It keeps the mind from scattering itself."
      },
      {
        term: "Mumukshutva",
        meaning: "desire for freedom",
        explanation:
          "Mumukshutva is the sincere longing to be free from inner bondage. Without this, Vedanta remains only interesting philosophy. With it, the teaching becomes alive and urgent."
      }
    ]
  },
  {
    title: "Knowledge and Teaching",
    description: "Words about the method of learning and how self-knowledge is unfolded.",
    terms: [
      {
        term: "Guru",
        meaning: "teacher",
        explanation:
          "In Vedanta, a guru is not merely an inspirational figure. A guru is one who unfolds the teaching clearly through a living tradition. The role is not to create dependence, but to remove confusion."
      },
      {
        term: "Shastra",
        meaning: "the teaching tradition or scripture",
        explanation:
          "Shastra is the body of knowledge that reveals what cannot be known by ordinary perception or inference alone. In Vedanta, it is a means of self-knowledge."
      },
      {
        term: "Vedanta",
        meaning: "the teaching of the truth of the self",
        explanation:
          "Vedanta is the vision unfolded in the Upanishads and related texts. Its central concern is the nature of the self, reality, bondage, and freedom. It is a means of knowledge, not a belief system."
      },
      {
        term: "Jnana",
        meaning: "knowledge",
        explanation:
          "Jnana in Vedanta means clear knowledge of the truth of oneself. It is not mystical excitement or a special experience. It is understanding that removes self-ignorance."
      },
      {
        term: "Sravana",
        meaning: "listening to the teaching",
        explanation:
          "Sravana is the committed listening through which the vision of Vedanta is unfolded. It is not casual hearing. It is systematic exposure to the teaching from a proper source."
      },
      {
        term: "Manana",
        meaning: "reflection",
        explanation:
          "Manana is the process of thinking through the teaching until doubts are resolved. It helps convert borrowed clarity into personal clarity."
      },
      {
        term: "Nididhyasana",
        meaning: "steady assimilation",
        explanation:
          "Nididhyasana is deep contemplation on what has been understood. It helps dissolve habitual error and emotional resistance. It is not for gaining a new truth, but for owning what is already clear."
      }
    ]
  }
];

const howToUse = [
  "Start with the words you keep seeing on the site",
  "Do not try to memorize everything",
  "Let the meaning become clear through repeated exposure"
];

const nextSteps = [
  { href: "/start-here", label: "Start Here" },
  { href: "/five-keys", label: "Five Keys" },
  { href: "/courses", label: "Courses" }
];

export const metadata = {
  title: "Glossary",
  description:
    "A simple beginner-friendly glossary of core Vedanta terms used across Moksha."
};

export default function GlossaryPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Simple working meanings
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Glossary
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Some Sanskrit words carry a depth that is hard to replace with a
              single English word. This page gives simple working meanings for
              the terms used across this site. The aim is not scholarship, but
              clarity.
            </p>
            <p>
              These are teaching-oriented explanations in simple English. They
              are meant to help you read the site more easily.
            </p>
          </div>
          <div className="mt-6 rounded-[1.25rem] bg-stone-50 px-5 py-4 ring-1 ring-stone-200">
            <p className="text-sm leading-7 text-stone-500">
              These are simple teaching-oriented meanings, not strict scholarly
              definitions.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            How to use this page
          </p>
          <ul className="mt-4 space-y-3 text-base leading-8 text-stone-600 sm:text-lg">
            {howToUse.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-stone-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {glossarySections.map((section) => (
          <section
            key={section.title}
            className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10"
          >
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
              Glossary section
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-stone-900 sm:text-3xl">
              {section.title}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
              {section.description}
            </p>

            <div className="mt-8 space-y-4">
              {section.terms.map((entry) => (
                <article
                  key={entry.term}
                  className="rounded-[1.5rem] bg-stone-50 px-5 py-5 ring-1 ring-stone-200"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-xl font-semibold text-stone-900">
                      {entry.term}
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
                      {entry.meaning}
                    </p>
                  </div>
                  <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
                    {entry.explanation}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-[2rem] bg-stone-50 px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            A final note
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              These words become clearer over time. You do not need to master
              them all at once. If even a few of them begin to feel more
              natural and alive, this page has done its work.
            </p>
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-white px-5 py-5 ring-1 ring-stone-200">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
              Continue reading
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {nextSteps.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
