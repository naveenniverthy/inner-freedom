import AuthForm from "@/components/AuthForm";

export const metadata = {
  title: "Register",
  description:
    "Create an account to save your path and return to your study more easily."
};

export default function RegisterPage() {
  return <AuthForm mode="register" />;
}
