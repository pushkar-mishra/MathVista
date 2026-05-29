import { LessonCard } from "@/components/LessonCard";
import { getLessonsBySubject } from "@/lib/lessons";

export default function AlgebraPage() {
  const lessons = getLessonsBySubject("algebra");

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <header className="max-w-3xl">
        <p className="text-sm font-black uppercase text-violet-700">Algebra</p>
        <h1 className="mt-3 text-4xl font-black text-slate-950">Expressions you can see.</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Turn identities into colored blocks so each term has a clear meaning.
        </p>
      </header>
      <section className="mt-8 grid gap-6">
        {[1, 2, 3].map((level) => {
          const levelLessons = lessons.filter((lesson) => lesson.level === level);
          if (levelLessons.length === 0) return null;

          return (
            <div key={level} className="rounded-lg border border-slate-200 bg-white/70 p-4">
              <div className="mb-4">
                <div>
                  <h2 className="text-xl font-black text-slate-950">Level {level}</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    {level === 1 ? "Understand variables and expressions." : level === 2 ? "Turn identities into area models." : "Solve and simplify with practice."}
                  </p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {levelLessons.map((lesson) => (
                  <LessonCard key={lesson.slug} lesson={lesson} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
