import Link from "next/link";
import type { Lesson } from "@/lib/lessons";

const accentClasses = {
  blue: "border-blue-200 bg-blue-50 text-blue-800",
  green: "border-teal-200 bg-teal-50 text-teal-800",
  amber: "border-amber-200 bg-amber-50 text-amber-800",
  rose: "border-rose-200 bg-rose-50 text-rose-800",
  violet: "border-violet-200 bg-violet-50 text-violet-800"
};

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link href={`/lesson/${lesson.slug}`} className="focus-ring math-card block rounded-lg p-5 transition hover:-translate-y-0.5 hover:border-blue-300">
      <div className={`inline-flex rounded-md border px-2 py-1 text-xs font-black ${accentClasses[lesson.accent]}`}>
        Level {lesson.level} · {lesson.subject}
      </div>
      <h2 className="mt-4 text-xl font-black text-slate-950">{lesson.title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{lesson.summary}</p>
      <p className="formula mt-4 rounded-md bg-slate-950 px-3 py-2 text-sm font-bold text-white">{lesson.formula}</p>
    </Link>
  );
}
