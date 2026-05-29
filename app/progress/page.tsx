import { PersonalizedLearning } from "@/components/PersonalizedLearning";
import { ProgressSummary } from "@/components/ProgressSummary";

export default function ProgressPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <header className="max-w-3xl">
        <p className="text-sm font-black uppercase text-teal-700">Progress</p>
        <h1 className="mt-3 text-4xl font-black text-slate-950">Your progress stays on this device.</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          No login is required in Phase 1. Completed quizzes are stored anonymously in your browser.
        </p>
      </header>
      <section className="mt-8">
        <PersonalizedLearning />
      </section>
      <section className="mt-6">
        <ProgressSummary />
      </section>
    </main>
  );
}
