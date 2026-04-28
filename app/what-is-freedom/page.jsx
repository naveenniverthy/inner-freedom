import { redirect } from "next/navigation";

export const metadata = {
  title: "What is Freedom? | Moksha and Inner Freedom",
  description:
    "Understand freedom not as escape from life, but as inner clarity, peace, and self-knowledge taught in Vedanta."
};

export default function WhatIsFreedomRedirect() {
  redirect("/clarity/what-is-freedom");
}
