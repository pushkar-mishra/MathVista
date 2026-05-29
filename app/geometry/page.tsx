import { LessonCard } from "@/components/LessonCard";
import { getLessonsBySubject } from "@/lib/lessons";

export default function GeometryPage() {
  const lessons = getLessonsBySubject("geometry");

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <header className="max-w-3xl">
        <p className="text-sm font-black uppercase text-blue-700">Geometry</p>
        <h1 className="mt-3 text-4xl font-black text-slate-950">Shapes, measurements, and visual proofs.</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Learn circle and area formulas by changing shapes and watching the numbers respond.
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
                    {level === 1 ? "Build the basic shape vocabulary." : level === 2 ? "See why the formulas work." : "Apply concepts with mixed practice."}
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
