import clsx from "clsx";

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatDate(dateString) {
  if (!dateString) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(dateString));
}
