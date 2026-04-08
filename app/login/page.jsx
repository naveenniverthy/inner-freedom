import AuthForm from "@/components/AuthForm";

export const metadata = {
  title: "Login",
  description:
    "Log in to continue your saved path, daily insight, and study progress."
};

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
