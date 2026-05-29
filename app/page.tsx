import Link from "next/link";
import { PersonalizedLearning } from "@/components/PersonalizedLearning";
import { ProgressSummary } from "@/components/ProgressSummary";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <section className="max-w-3xl">
        <div>
          <p className="text-sm font-black uppercase text-teal-700">Dashboard</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Your math journey starts from the path.
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Follow the learning path, understand each visual idea, then move to practice when ready.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learning-path" className="focus-ring rounded-md bg-blue-600 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-700">
              Open Learning Path
            </Link>
            <Link href="/practice" className="focus-ring rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-800 transition hover:border-amber-300">
              Practice
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <PersonalizedLearning />
      </section>

      <section className="mt-6">
        <ProgressSummary compact />
      </section>
    </main>
  );
}
