"use client";
import { useState } from "react";

const initialMessages = [
  { role: "assistant", text: "Hi there! Ask me about our bikes, performance, or services." }
];

export function AIChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (!prompt.trim()) return;

    const userMessage = { role: "user", text: prompt.trim() };
    setMessages((current) => [...current, userMessage]);
    setPrompt("");
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage.text })
      });

      if (!response.ok) {
        throw new Error("Assistant failed to respond.");
      }

      const data = await response.json();
      setMessages((current) => [...current, { role: "assistant", text: data.message }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
      <h2 className="text-3xl font-bold mb-4">AI Assistant</h2>
      <p className="text-gray-300 mb-6">
        Chat with our assistant to learn more about the bikes, specs, and premium features.
      </p>
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`rounded-3xl p-4 ${message.role === "assistant" ? "bg-white/10 text-gray-100" : "bg-accent/10 text-white"}`}
          >
            <span className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
              {message.role === "assistant" ? "Assistant" : "You"}
            </span>
            <p className="whitespace-pre-line">{message.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          rows={3}
          placeholder="Ask about a bike, pricing, or custom options..."
          className="w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
        {error ? <p className="text-sm text-red-400">{error}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Thinking..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
