export const metadata = {
  title: "Authentication Error",
  description:
    "The confirmation link is invalid or has expired."
};

export default function AuthErrorPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Authentication error</h2>
      <p>Invalid or expired confirmation link.</p>
    </div>
  );
}
