import Link from "next/link";
import { lessons } from "@/lib/lessons";

const levelCopy = {
  1: {
    title: "Level 1: Basic Understanding",
    detail: "Build the vocabulary and mental pictures: points, lines, area, perimeter, variables, and equations."
  },
  2: {
    title: "Level 2: Visual Explanation",
    detail: "Use diagrams to see why formulas and identities work."
  },
  3: {
    title: "Level 3: Practice and Application",
    detail: "Apply concepts through mixed questions and real examples."
  }
};

export default function LearningPathPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <header className="max-w-3xl">
        <p className="text-sm font-black uppercase text-teal-700">Learning Path</p>
        <h1 className="mt-3 text-4xl font-black text-slate-950">Learn first. Practice separately.</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Follow this path in order to build visual understanding before taking practice questions.
        </p>
      </header>

      <section className="mt-8 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-lg font-black text-blue-900">Beginner</p>
          <p className="mt-1 text-sm font-bold text-blue-700">Up to Grade 5</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">Best for basic shapes, area, perimeter, and simple variables.</p>
        </div>
        <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
          <p className="text-lg font-black text-teal-900">Intermediate</p>
          <p className="mt-1 text-sm font-bold text-teal-700">Grades 6-7</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">Best for formulas, equations, and visual proof building.</p>
        </div>
        <div className="rounded-lg border border-violet-200 bg-violet-50 p-4">
          <p className="text-lg font-black text-violet-900">Advanced</p>
          <p className="mt-1 text-sm font-bold text-violet-700">Grades 8-10</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">Best for faster movement into identities and mixed applications.</p>
        </div>
      </section>

      <section className="mt-8 grid gap-6">
        {[1, 2, 3].map((level) => {
          const levelLessons = lessons.filter((lesson) => lesson.level === level);
          const copy = levelCopy[level as 1 | 2 | 3];

          return (
            <div key={level} className="rounded-lg border border-slate-200 bg-white/80 p-5">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-950">{copy.title}</h2>
                  <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">{copy.detail}</p>
                </div>
                <Link href="/practice" className="focus-ring rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-black text-amber-800 transition hover:border-amber-400">
                  Practice Area
                </Link>
              </div>

              {levelLessons.length ? (
                <ol className="mt-5 grid gap-3">
                  {levelLessons.map((lesson, index) => (
                    <li key={lesson.slug} className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 sm:grid-cols-[3rem_1fr_auto] sm:items-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 font-black text-white">{index + 1}</span>
                      <div>
                        <p className="text-xs font-black uppercase text-slate-500">{lesson.subject}</p>
                        <h3 className="mt-1 text-lg font-black text-slate-950">{lesson.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{lesson.summary}</p>
                      </div>
                      <Link href={`/lesson/${lesson.slug}`} className="focus-ring rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-black text-white transition hover:bg-blue-700">
                        Learn
                      </Link>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-5 rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">
                  Level {level} application lessons will be added after the basic path is complete.
                </p>
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
}
