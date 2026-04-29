"use client";

import Link from "next/link";

const KEY_MAP = {
  clarity: {
    name: "Clarity",
    label: "Jnana / Self-understanding",
    link: "/clarity/seer-seen",
    linkText: "Study Seer-Seen Inquiry",
    low: "You may still be taking yourself to be your thoughts, roles, and experiences.",
    medium: "You have begun to question your identity, but the understanding is not yet steady.",
    high: "You are beginning to recognize yourself as the awareness behind changing experiences.",
    actions: [
      "Spend 10 minutes observing thoughts without reacting.",
      "Ask: What is aware of this thought?",
      "Notice what changes and what remains aware.",
      "Reduce one distraction that keeps the mind outward.",
      "Read or listen to one teaching on self-knowledge."
    ],
    one: "Sit quietly and observe thoughts without interfering.",
    direction: "Clarity shifts identity from the mind to awareness.",
    sevenDays: [
      "Notice your thoughts for 10 minutes without judging them.",
      "Write down three things that changed today: body, mood, thoughts, or roles.",
      "Ask several times: What is aware of this experience?",
      "Reduce one unnecessary distraction for the day.",
      "Read one short teaching page on self-knowledge.",
      "Observe one strong emotion and notice that you are aware of it.",
      "Reflect: I am aware of the mind; therefore I am not limited to the mind."
    ]
  },

  responsibility: {
    name: "Responsibility",
    label: "Dharma / Right living",
    link: "/responsibility",
    linkText: "Study Responsibility",
    low: "You may be reacting more from likes and dislikes than from what is appropriate.",
    medium: "You often know what is right, but emotions and convenience still interfere.",
    high: "You are learning to act according to what needs to be done.",
    actions: [
      "Pause before action and ask: What is the right thing here?",
      "Do one difficult but correct action daily.",
      "Reduce one avoidance habit.",
      "Take ownership instead of blaming situations.",
      "Complete small commitments fully."
    ],
    one: "Do what is right once daily, even if uncomfortable.",
    direction: "Responsibility stabilizes life and prepares the mind for deeper growth.",
    sevenDays: [
      "Choose one small responsibility and complete it fully.",
      "Before one decision, pause and ask: What is right here?",
      "Notice one place where you blame others and gently take ownership.",
      "Do one useful action even if you do not feel like doing it.",
      "Keep one promise to yourself today.",
      "Avoid one unnecessary reaction and respond thoughtfully.",
      "Reflect: Responsibility is not pressure; it is alignment with dharma."
    ]
  },

  discipline: {
    name: "Discipline",
    label: "Sadhana / Mastery over mind",
    link: "/discipline",
    linkText: "Study Discipline",
    low: "The mind may feel scattered and pulled by impulse.",
    medium: "You have some structure, but consistency is still developing.",
    high: "You are building the ability to direct the mind steadily.",
    actions: [
      "Fix one simple daily routine.",
      "Sit in silence for 10-15 minutes.",
      "Reduce one impulsive habit.",
      "Do one task with full attention.",
      "Keep small promises to yourself."
    ],
    one: "Sit in silence daily, even if the mind is restless.",
    direction: "Discipline makes the mind available for clarity.",
    sevenDays: [
      "Sit silently for 10 minutes without checking your phone.",
      "Choose one routine and follow it today.",
      "Do one task slowly and with full attention.",
      "Reduce one impulse such as scrolling, snacking, or reacting.",
      "Keep one small promise to yourself.",
      "Spend 15 minutes in focused study or reflection.",
      "Reflect: A steady mind is not forced; it is trained gently."
    ]
  },

  acceptance: {
    name: "Acceptance",
    label: "Prasada Buddhi / Receiving life",
    link: "/acceptance",
    linkText: "Study Acceptance",
    low: "You may be resisting outcomes and carrying frustration or disappointment.",
    medium: "You accept some situations, but still struggle when life does not match your preference.",
    high: "You are learning to receive outcomes with greater balance.",
    actions: [
      "List three things that did not go your way today.",
      "Say: This is prasada; I accept it.",
      "Notice resistance before reacting.",
      "Stop replaying one past situation.",
      "Remember that outcomes are not fully in your control."
    ],
    one: "When something goes wrong, pause and accept first.",
    direction: "Acceptance reduces emotional disturbance and brings inner lightness.",
    sevenDays: [
      "Notice one small disappointment and pause before reacting.",
      "Write down three outcomes you could not fully control.",
      "Say gently: This too is part of the order.",
      "Stop replaying one past event for one day.",
      "Accept one person as they are, without trying to mentally change them.",
      "Receive one difficult result as prasada.",
      "Reflect: Acceptance is not weakness; it is freedom from resistance."
    ]
  },

  offering: {
    name: "Offering",
    label: "Ishvara Arpana Buddhi / Surrender in action",
    link: "/offering",
    linkText: "Study Offering",
    low: "Actions may be driven strongly by control, gain, or recognition.",
    medium: "You sometimes act selflessly, but still expect validation or results.",
    high: "You are learning to act as an offering without holding tightly to outcomes.",
    actions: [
      "Pause before action and mentally offer it.",
      "Focus on doing the action well, not controlling the result.",
      "Reduce the need for recognition.",
      "Serve in one small way without expecting return.",
      "Remember that results are not fully yours."
    ],
    one: "Before any important action, pause and say: I offer this.",
    direction: "Offering reduces ego involvement and connects action to the larger order.",
    sevenDays: [
      "Before one task, pause and mentally offer it.",
      "Do one action carefully without seeking praise.",
      "Help someone in a small way without mentioning it.",
      "Focus only on effort, not result, for one important task.",
      "Notice where you want recognition and soften that need.",
      "Offer one difficult duty to Ishvara or the total order.",
      "Reflect: I am responsible for action, not for total control over results."
    ]
  }
};

function getLevel(score) {
  if (score < 40) return "low";
  if (score < 70) return "medium";
  return "high";
}

export function getAssessmentGuidanceData(scores) {
  if (!scores) return [];

  return Object.keys(scores)
    .filter((key) => KEY_MAP[key])
    .sort((a, b) => scores[a] - scores[b])
    .slice(0, 2)
    .map((key) => {
      const data = KEY_MAP[key];
      const level = getLevel(scores[key]);

      return {
        key,
        score: scores[key],
        level,
        ...data,
        insight: data[level],
        actions: data.actions.slice(0, 3)
      };
    });
}

export default function AssessmentGuidance({ scores }) {
  const guidance = getAssessmentGuidanceData(scores);

  if (!guidance.length) return null;

  return (
    <section className="mt-12 space-y-8">
      <div>
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Your next steps
        </p>
        <h2 className="text-2xl font-semibold text-gray-900">
          How to move forward from here
        </h2>
        <p className="mt-2 text-gray-600">
          These suggestions are based on the areas that need the most support right now.
        </p>
      </div>

      {guidance.map((item) => (
        <div key={item.key} className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
              Score: {item.score}
            </span>
          </div>

          <p className="mt-4 text-gray-700">{item.insight}</p>

          <div className="mt-5">
            <p className="font-medium text-gray-900">What you can do:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
              {item.actions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-xl bg-gray-50 p-4">
            <p className="font-medium text-gray-900">
              If you do just one thing:
            </p>
            <p className="mt-1 text-gray-700">{item.one}</p>
          </div>

          <div className="mt-5">
            <p className="font-medium text-gray-900">Your 7-day practice:</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-gray-700">
              {item.sevenDays.map((day, index) => (
                <li key={index}>{day}</li>
              ))}
            </ol>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">{item.direction}</p>
            <Link
              href={item.link}
              className="inline-flex rounded-full border px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
            >
              {item.linkText}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
