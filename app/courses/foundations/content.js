export const course = {
  title: "Foundations of Self-Knowledge",
  subtitle: "A clear introduction to Vedanta",
  description:
    "A step-by-step understanding of the human problem and the nature of freedom, based on traditional Vedanta.",
};

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function splitContent(content) {
  return content
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

const rawLessons = [
  {
    title: "Lesson 1 — What Are You Really Seeking?",
    content: `
Every human being is constantly seeking something.

Security, pleasure, success, recognition.

But behind all these, there is one deeper search — to feel complete.

This search is universal. It is not taught. It is natural.

Vedanta begins by asking:
What is it that you are truly seeking?
`,
    takeaway:
      "All pursuits are expressions of a deeper search for completeness.",
  },
  {
    title: "Lesson 2 — The Four Pursuits (Purushartha)",
    content: `
Human life revolves around four pursuits:

Dharma — a life of order and values
Artha — security and resources
Kama — pleasure and enjoyment
Moksha — freedom from limitation

The first three are common.

The fourth — moksha — is unique.

It is the search for total freedom.
`,
    takeaway: "All human pursuits culminate in the search for freedom.",
  },
  {
    title: "Lesson 3 — The Problem Is Not Outside",
    content: `
We assume:
"If things change, I will be complete."

But even after gaining what we want, something remains incomplete.

This shows:
The problem is not in the world.

It is in how we see ourselves.
`,
    takeaway:
      "The problem is not lack of things, but a sense of inadequacy.",
  },
  {
    title: "Lesson 4 — The Sense of Inadequacy",
    content: `
At the center of all struggle is one feeling:

"I am not enough."

This feeling drives all effort.

But no amount of achievement removes it permanently.

Because the problem is centered on oneself.
`,
    takeaway: "Inadequacy is not solved by gaining or losing anything.",
  },
  {
    title: "Lesson 5 — Why Security Cannot Solve It",
    content: `
We seek security through wealth, status, control.

But security never feels complete.

No matter how much we gain, it never feels enough.

Because insecurity is not in things — it is in the sense of self.
`,
    takeaway: "External security cannot remove inner insecurity.",
  },
  {
    title: "Lesson 6 — Why Pleasure Cannot Solve It",
    content: `
Pleasure depends on:

Object
Instrument
State of mind

All three are changing.

So pleasure is temporary.

It cannot give lasting completeness.
`,
    takeaway:
      "Pleasure is momentary and cannot solve the human problem.",
  },
  {
    title: "Lesson 7 — The Turning Point",
    content: `
A moment comes when you see clearly:

Nothing I gain solves this.

This is maturity.

Not giving up life — but understanding it correctly.
`,
    takeaway:
      "Clarity begins when you see the limits of all pursuits.",
  },
  {
    title: "Lesson 8 — The Seeker (Mumukshu)",
    content: `
Now the search changes.

From:
"I want things"

To:
"I want freedom"

This is the birth of a true seeker — a mumukshu.
`,
    takeaway: "A mumukshu is one who seeks freedom directly.",
  },
  {
    title: "Lesson 9 — What Is Moksha?",
    content: `
Moksha is not becoming something new.

It is freedom from the sense of limitation.

It is recognizing:
"I am already complete."

Not an achievement — a discovery.
`,
    takeaway: "Moksha is recognition, not attainment.",
  },
  {
    title: "Lesson 10 — Why Action Cannot Give Freedom",
    content: `
Action produces results.

All results are limited.

So action cannot produce something limitless.

Freedom is not a result of action.
`,
    takeaway: "What is limitless cannot be produced by action.",
  },
  {
    title: "Lesson 11 — Knowledge Is the Only Means",
    content: `
If the problem is ignorance,
the solution must be knowledge.

Not experience.
Not change.

But clear understanding.
`,
    takeaway: "Self-knowledge alone resolves the problem.",
  },
  {
    title: "Lesson 12 — What Is Ignorance?",
    content: `
Ignorance is not absence of knowledge.

It is wrong understanding.

Like mistaking a rope for a snake.

The self is misunderstood.
`,
    takeaway: "Ignorance is error about oneself.",
  },
  {
    title: "Lesson 13 — Knowledge Is Not Created",
    content: `
Knowledge does not create something new.

It reveals what is already true.

Like recognizing the tenth man.

Nothing new is gained — only understood.
`,
    takeaway: "Self-knowledge reveals what already is.",
  },
  {
    title: "Lesson 14 — Means of Knowledge (Pramana)",
    content: `
Each type of knowledge requires a means.

Eyes for form
Ears for sound

For the Self — Vedanta is the means.

It is a unique means of knowledge.
`,
    takeaway: "Vedanta is a valid means of knowing the Self.",
  },
  {
    title: "Lesson 15 — Why Experience Is Not Enough",
    content: `
Experiences come and go.

What comes and goes cannot define you.

You are the one to whom all experience appears.
`,
    takeaway:
      "You are not an experience — you are the knower.",
  },
  {
    title: "Lesson 16 — The Role of the Teacher",
    content: `
The Self cannot be objectified.

So it must be taught.

A teacher unfolds the truth using words.

Proper teaching removes confusion.
`,
    takeaway:
      "A teacher is essential to remove wrong conclusions.",
  },
  {
    title: "Lesson 17 — The Teaching Tradition",
    content: `
This knowledge is passed down carefully.

Teacher to student.

Not invented — unfolded.

This is the Vedanta tradition.
`,
    takeaway: "Vedanta is a living teaching tradition.",
  },
  {
    title: "Lesson 18 — The Text (Upanishads)",
    content: `
Vedanta is found in the Upanishads.

These are not beliefs.

They are a means of knowledge.

They reveal what you are.
`,
    takeaway:
      "The Upanishads reveal the nature of the Self.",
  },
  {
    title: "Lesson 19 — The Final Understanding",
    content: `
You are not lacking.

You are not incomplete.

The problem was never real.

Only misunderstood.
`,
    takeaway:
      "Freedom is recognizing you were always whole.",
  },
];

export const lessons = rawLessons.map((lesson, index) => {
  const numberedTitle = lesson.title;
  const title = numberedTitle.replace(/^Lesson\s+\d+\s+—\s+/, "");
  const paragraphs = splitContent(lesson.content);

  return {
    ...lesson,
    number: index + 1,
    slug: slugify(title),
    title,
    numberedTitle,
    intro: paragraphs[0] ?? "",
    paragraphs,
  };
});

export const courseTitle = course.title;
export const courseSubtitle = course.subtitle;
export const courseDescription = course.description;
export const courseIntro = [course.description];

export function getLessonBySlug(slug) {
  return lessons.find((lesson) => lesson.slug === slug);
}
