"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import {
  persistPendingAssessmentIfPresent,
  upsertProfileAndPreferences
} from "@/lib/auth";

export default function AuthForm({ mode = "login" }) {
  const isRegister = mode === "register";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const supabase = createBrowserSupabaseClient();

    try {
      if (isRegister) {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName
            }
          }
        });

        if (signUpError) throw signUpError;

        if (data.user) {
          await upsertProfileAndPreferences({ user: data.user, fullName });
        }

        if (data.session && data.user) {
          const saved = await persistPendingAssessmentIfPresent(data.user);
          router.push(saved ? "/dashboard?saved=1" : "/dashboard");
          router.refresh();
          return;
        }

        setMessage(
          "Your account has been created. If email confirmation is enabled, please verify your email and then log in."
        );
      } else {
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (signInError) throw signInError;

        const saved = await persistPendingAssessmentIfPresent(data.user);
        const next = searchParams.get("next") || "/dashboard";
        router.push(
          saved && next === "/dashboard" ? "/dashboard?saved=1" : next
        );
        router.refresh();
        return;
      }
    } catch (authError) {
      setError(authError.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="surface mx-auto w-full max-w-xl px-6 py-8 sm:px-8 sm:py-10">
      <p className="eyebrow">{isRegister ? "Create account" : "Welcome back"}</p>
      <h1 className="section-title mt-3">
        {isRegister ? "Save your path" : "Login to continue"}
      </h1>
      <p className="body-copy mt-5">
        {isRegister
          ? "Create an account to save your latest assessment result, revisit your dashboard, and receive daily insight later."
          : "Login to access your saved path, preparation areas, and latest insight."}
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
        {isRegister ? (
          <label className="grid gap-2">
            <span className="text-sm text-ink-900/65">Full name</span>
            <input
              className="input-shell"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Your name"
            />
          </label>
        ) : null}

        <label className="grid gap-2">
          <span className="text-sm text-ink-900/65">Email</span>
          <input
            type="email"
            className="input-shell"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm text-ink-900/65">Password</span>
          <input
            type="password"
            className="input-shell"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="At least 6 characters"
            minLength={6}
            required
          />
        </label>

        {error ? (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        {message ? (
          <p className="rounded-2xl border border-sage-300/50 bg-sage-100/55 px-4 py-3 text-sm text-sage-700">
            {message}
          </p>
        ) : null}

        <button type="submit" disabled={loading} className="btn-primary mt-2">
          {loading ? "Please wait..." : isRegister ? "Create account" : "Login"}
        </button>
      </form>

      <p className="mt-6 text-sm text-ink-900/55">
        {isRegister ? "Already have an account?" : "Need an account?"}{" "}
        <Link
          href={isRegister ? "/login" : "/register"}
          className="font-semibold text-sage-700"
        >
          {isRegister ? "Login" : "Register"}
        </Link>
      </p>
    </section>
  );
}
