import fs from "node:fs";
import path from "node:path";

const baseUrl = "https://mokshakeys.com";
const appDirectory = path.join(process.cwd(), "app");

const excludedRoutes = new Set(["/auth/error", "/dashboard", "/login", "/register"]);

function collectRoutes(directory, currentRoute = "") {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const routes = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.startsWith("[") || entry.name.startsWith("_")) {
        continue;
      }

      routes.push(...collectRoutes(entryPath, `${currentRoute}/${entry.name}`));
      continue;
    }

    if (entry.name !== "page.jsx") {
      continue;
    }

    const route = currentRoute || "/";

    if (!excludedRoutes.has(route)) {
      routes.push(route);
    }
  }

  return routes;
}

export default function sitemap() {
  const lastModified = new Date();

  return collectRoutes(appDirectory)
    .sort((left, right) => left.localeCompare(right))
    .map((route) => ({
      url: route === "/" ? baseUrl : `${baseUrl}${route}`,
      lastModified
    }));
}
