import fs from "node:fs";
import path from "node:path";

const COURSE_CONFIG = {
  course: {
    title: "Foundations of Self-Knowledge",
    description:
      "A step-by-step introduction to self-knowledge and the core vision of Vedanta.",
  },
  "living-course": {
    title: "Living with Clarity",
    description:
      "A practical study path for action, relationships, responsibility, and emotional balance.",
  },
  "guided-path": {
    title: "Guided Path",
    description:
      "A deeper layer of guided study, including 40 steps from Sadhana Panchakam.",
  },
};

function toTitleCase(value) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getCourseLinks() {
  const appDir = path.join(process.cwd(), "app");
  const entries = fs.readdirSync(appDir, { withFileTypes: true });

  return entries
    .filter((entry) => {
      if (!entry.isDirectory()) {
        return false;
      }

      const route = entry.name;
      return route === "course" || route === "guided-path" || route.endsWith("-course");
    })
    .filter((entry) => {
      const pagePath = path.join(appDir, entry.name, "page.jsx");
      return fs.existsSync(pagePath);
    })
    .map((entry) => {
      const route = entry.name;
      const config = COURSE_CONFIG[route];

      return {
        href: `/${route}`,
        title: config?.title ?? toTitleCase(route),
        description:
          config?.description ?? "A guided study path inside Five Keys to Inner Freedom.",
      };
    })
    .sort((a, b) => {
      if (a.href === "/course") {
        return -1;
      }

      if (b.href === "/course") {
        return 1;
      }

      return a.title.localeCompare(b.title);
    });
}
