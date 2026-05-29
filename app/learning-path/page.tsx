import { LearningPathList } from "@/components/LearningPathList";

export default function LearningPathPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <header className="max-w-3xl">
        <p className="text-sm font-black uppercase text-teal-700">Learning Path</p>
        <h1 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Learn first. Practice separately.</h1>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Follow the path that matches your selected level. You can change your level from the profile bar anytime.
        </p>
      </header>

      <section className="mt-8 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-lg font-black text-blue-900">Beginner</p>
          <p className="mt-1 text-sm font-bold text-blue-700">Up to Grade 5</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">Best for basic shapes, area, perimeter, number lines, and simple variables.</p>
        </div>
        <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
          <p className="text-lg font-black text-teal-900">Intermediate</p>
          <p className="mt-1 text-sm font-bold text-teal-700">Grades 6-7</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">Best for formulas, equations, and visual proof building.</p>
        </div>
        <div className="rounded-lg border border-violet-200 bg-violet-50 p-4">
          <p className="text-lg font-black text-violet-900">Advanced</p>
          <p className="mt-1 text-sm font-bold text-violet-700">Grades 8-10</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">Best for faster movement into identities, factorization, and mixed applications.</p>
        </div>
      </section>

      <LearningPathList />
    </main>
  );
}
