"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus("sending");
    setError(null);
    const payload = Object.fromEntries(formData) as Record<string, string>;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch (e) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <form action={onSubmit} className="space-y-3">
      <div className="grid md:grid-cols-2 gap-3">
        <input className="h-10 rounded-md border px-3 bg-transparent" name="name" placeholder="Your name" required />
        <input className="h-10 rounded-md border px-3 bg-transparent" name="email" type="email" placeholder="Email" required />
      </div>
      <textarea className="min-h-28 rounded-md border px-3 py-2 w-full bg-transparent" name="message" placeholder="Message" required />
      <div className="flex items-center gap-3">
        <button disabled={status === "sending"} className="rounded-full border px-4 h-9 inline-flex items-center hover:bg-black/5 dark:hover:bg-white/5 disabled:opacity-50">
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        {status === "sent" && <p className="text-sm text-green-600 dark:text-green-400">Message sent!</p>}
        {status === "error" && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      </div>
    </form>
  );
}
