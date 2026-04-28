import { redirect } from "next/navigation";

export const metadata = {
  title: "Offering and Ishvara Arpana Buddhi | Karma Yoga in Practice",
  description:
    "Understand offering as acting with dedication, humility, and freedom from ego-centered anxiety."
};

export default function OfferingRedirect() {
  redirect("/ishvara-arpana-buddhi");
}
