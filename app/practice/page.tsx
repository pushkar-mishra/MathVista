import { PracticeCard } from "@/components/PracticeCard";
import { lessons } from "@/lib/lessons";

export default function PracticePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <header className="max-w-3xl">
        <p className="text-sm font-black uppercase text-amber-700">Practice</p>
        <h1 className="mt-3 text-4xl font-black text-slate-950">Practice after each visual lesson.</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Practice stays attached to each lesson, so students can review the visual demo and retry questions in the same place.
        </p>
      </header>
      <section className="mt-8 grid gap-6">
        {[1, 2, 3].map((level) => {
          const levelLessons = lessons.filter((lesson) => lesson.level === level);
          if (levelLessons.length === 0) return null;

          return (
            <div key={level} className="rounded-lg border border-slate-200 bg-white/70 p-4">
              <h2 className="text-xl font-black text-slate-950">Level {level} Practice</h2>
              <p className="mt-1 text-sm text-slate-600">
                {level === 1 ? "Basic understanding checks." : level === 2 ? "Visual proof and formula reasoning." : "Application and mixed problems."}
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {levelLessons.map((lesson) => (
                  <PracticeCard key={lesson.slug} lesson={lesson} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
