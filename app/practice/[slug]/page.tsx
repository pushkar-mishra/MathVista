import Link from "next/link";
import { notFound } from "next/navigation";
import { PracticeQuiz } from "@/components/PracticeQuiz";
import { getLesson } from "@/lib/lessons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PracticeLessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="max-w-3xl">
        <Link href="/practice" className="focus-ring rounded-md text-sm font-black uppercase text-amber-700">
          Practice
        </Link>
        <h1 className="mt-3 text-4xl font-black text-slate-950">{lesson.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Try the questions after learning the visual idea. If it feels unclear, return to the lesson and replay the demo.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={`/lesson/${lesson.slug}`} className="focus-ring rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 transition hover:border-blue-300">
            Review Lesson
          </Link>
          <Link href="/learning-path" className="focus-ring rounded-md border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-black text-teal-800 transition hover:border-teal-400">
            Learning Path
          </Link>
        </div>
      </header>
      <section className="mt-8">
        <PracticeQuiz questions={lesson.practice} lessonSlug={lesson.slug} />
      </section>
    </main>
  );
}
