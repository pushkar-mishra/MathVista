import Link from "next/link";
import type { Lesson } from "@/lib/lessons";

export function PracticeCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link href={`/practice/${lesson.slug}`} className="focus-ring math-card block rounded-lg p-5 transition hover:-translate-y-0.5 hover:border-amber-300">
      <p className="text-xs font-black uppercase text-amber-700">Level {lesson.level} Practice · {lesson.subject}</p>
      <h2 className="mt-3 text-xl font-black text-slate-950">{lesson.title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{lesson.practice.length} questions with explanations.</p>
      <p className="mt-4 rounded-md bg-amber-50 px-3 py-2 text-sm font-black text-amber-800">Start Practice</p>
    </Link>
  );
}
