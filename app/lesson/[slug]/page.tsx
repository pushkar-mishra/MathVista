import Link from "next/link";
import { notFound } from "next/navigation";
import { LessonCompletion } from "@/components/LessonCompletion";
import { VisualDemo } from "@/components/VisualDemo";
import { getLesson, getNextLesson, lessons } from "@/lib/lessons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lessons.map((lesson) => ({
    slug: lesson.slug
  }));
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const nextLesson = getNextLesson(lesson.slug);

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
      <header className="grid gap-6 lg:grid-cols-[0.75fr_0.25fr] lg:items-end">
        <div>
          <Link href="/learning-path" className="focus-ring rounded-md text-sm font-black uppercase text-blue-700">
            Learning Path
          </Link>
          <h1 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{lesson.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{lesson.summary}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-sm font-bold text-slate-500">Formula</p>
          <p className="formula mt-2 text-lg font-black text-slate-950 sm:text-xl">{lesson.formula}</p>
        </div>
      </header>

      <section className="mt-6 math-card rounded-lg p-4 sm:mt-8 sm:p-5">
        <div className="mb-5">
          <h2 className="text-xl font-black text-slate-950">Visual Demo</h2>
          <p className="mt-1 text-sm text-slate-600">{lesson.concept}</p>
        </div>
        <VisualDemo demoId={lesson.demoId} />
      </section>

      <section className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="math-card rounded-lg p-4 sm:p-5">
          <h2 className="text-xl font-black text-slate-950">What The Symbols Mean</h2>
          <ul className="mt-4 grid gap-3">
            {lesson.symbols.map((item) => (
              <li key={item} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="math-card rounded-lg p-4 sm:p-5">
          <h2 className="text-xl font-black text-slate-950">Why This Works</h2>
          <ol className="mt-4 grid gap-3">
            {lesson.why.map((item, index) => (
              <li key={item} className="grid grid-cols-[2rem_1fr] gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-700">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-950 font-black text-white">{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-6">
        <LessonCompletion lessonSlug={lesson.slug} />
      </section>

      <section className="mt-6 math-card rounded-lg p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-950">Ready for practice?</h2>
            <p className="mt-1 text-sm text-slate-600">Practice is separate from the learning path so the lesson stays focused on visual understanding.</p>
          </div>
          <Link href={`/practice/${lesson.slug}`} className="focus-ring w-full rounded-md bg-amber-500 px-4 py-3 text-center text-sm font-black text-white transition hover:bg-amber-600 sm:w-auto sm:py-2">
            Start Practice
          </Link>
        </div>
      </section>

      <nav className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:justify-between">
        <Link href="/learning-path" className="focus-ring rounded-md border border-slate-200 bg-white px-4 py-3 text-center text-sm font-black text-slate-700 transition hover:border-blue-300 sm:py-2">
          Back to Learning Path
        </Link>
        {nextLesson ? (
          <Link href={`/lesson/${nextLesson.slug}`} className="focus-ring rounded-md bg-slate-950 px-4 py-3 text-center text-sm font-black text-white transition hover:bg-blue-700 sm:py-2">
            Next: {nextLesson.title}
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
