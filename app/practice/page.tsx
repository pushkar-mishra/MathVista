import { PracticeFilters } from "@/components/PracticeFilters";
import { lessons } from "@/lib/lessons";

export default function PracticePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <header className="max-w-3xl">
        <p className="text-sm font-black uppercase text-amber-700">Practice</p>
        <h1 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Practice by topic or level.</h1>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Filter practice separately from the learning path. Review a lesson first when a concept feels unclear.
        </p>
      </header>
      <PracticeFilters lessons={lessons} />
    </main>
  );
}
