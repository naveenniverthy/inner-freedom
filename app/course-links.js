import fs from "node:fs";
import path from "node:path";

const COURSE_CONFIG = {
  course: {
    title: "The 20 Values of Inner Freedom",
    description:
      "A 20-lesson course on the jnana values that prepare the mind for Self-knowledge.",
  },
  "courses/foundations": {
    title: "Inquiry into the Self",
    description:
      "A 10-lesson course that takes up the inquiry into the self more directly.",
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

const COURSE_ORDER = [
  "/course",
  "/courses/foundations",
  "/guided-path",
  "/living-course",
];

function toTitleCase(value) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getCourseLinks() {
  const appDir = path.join(process.cwd(), "app");
  const entries = fs.readdirSync(appDir, { withFileTypes: true });
  const topLevelRoutes = entries
    .filter((entry) => {
      if (!entry.isDirectory()) {
        return false;
      }

      const route = entry.name;
      return route === "course" || route === "guided-path" || route.endsWith("-course");
    })
    .map((entry) => entry.name);
  const nestedRoutes = ["courses/foundations"];

  return [...topLevelRoutes, ...nestedRoutes]
    .filter((route) => {
      const pagePath = path.join(appDir, ...route.split("/"), "page.jsx");
      return fs.existsSync(pagePath);
    })
    .map((route) => {
      const config = COURSE_CONFIG[route];

      return {
        href: `/${route}`,
        title: config?.title ?? toTitleCase(route),
        description:
          config?.description ?? "A guided study path inside Five Keys to Inner Freedom.",
      };
    })
    .sort((a, b) => {
      const aIndex = COURSE_ORDER.indexOf(a.href);
      const bIndex = COURSE_ORDER.indexOf(b.href);

      if (aIndex >= 0 && bIndex >= 0) {
        return aIndex - bIndex;
      }

      if (aIndex >= 0) {
        return -1;
      }

      if (bIndex >= 0) {
        return 1;
      }

      return a.title.localeCompare(b.title);
    });
}
