import { redirect } from "next/navigation";

export const metadata = {
  title: "Start Here | A Simple Path to Inner Freedom",
  description:
    "Begin your journey toward inner freedom through the Five Keys of Moksha: clarity, responsibility, discipline, acceptance, and offering."
};

export default function StartHereRedirect() {
  redirect("/why");
}
