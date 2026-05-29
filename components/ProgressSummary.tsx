"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { lessons } from "@/lib/lessons";

type StoredProgress = Record<string, { completed: boolean; score: number; total: number; mistakes?: string[]; updatedAt: string }>;

export function ProgressSummary({ compact = false }: { compact?: boolean }) {
  const [progress, setProgress] = useState<StoredProgress>({});

  useEffect(() => {
    function refreshProgress() {
      setProgress(JSON.parse(localStorage.getItem("mathvista-progress") ?? "{}"));
    }

    refreshProgress();
    window.addEventListener("mathvista-progress-updated", refreshProgress);

    return () => {
      window.removeEventListener("mathvista-progress-updated", refreshProgress);
    };
  }, []);

  const completed = lessons.filter((lesson) => progress[lesson.slug]?.completed).length;
  const attempted = lessons.filter((lesson) => progress[lesson.slug]).length;
  const percent = Math.round((completed / lessons.length) * 100);
  const perfectScores = lessons.filter((lesson) => {
    const record = progress[lesson.slug];
    return Boolean(record) && record.total > 0 && record.score === record.total;
  }).length;
  const weakConcepts = lessons
    .filter((lesson) => (progress[lesson.slug]?.mistakes?.length ?? 0) > 0)
    .slice(0, 4);
  const badges = [
    completed >= 1 ? "First Concept" : null,
    completed >= 3 ? "Visual Explorer" : null,
    perfectScores >= 3 ? "Practice Pro" : null,
    completed === lessons.length ? "Path Finisher" : null
  ].filter(Boolean);

  function resetProgress() {
    localStorage.removeItem("mathvista-progress");
    setProgress({});
    window.dispatchEvent(new Event("mathvista-progress-updated"));
  }

  return (
    <div className="math-card rounded-lg p-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-bold uppercase text-blue-700">Local progress</p>
          <h2 className="mt-1 text-2xl font-black text-slate-950">{percent}% complete</h2>
          <p className="mt-1 text-sm text-slate-600">
            {completed} completed, {attempted} attempted, {lessons.length} available.
          </p>
        </div>
        <div className="h-3 w-full rounded-full bg-slate-100 sm:w-56">
          <div className="h-3 rounded-full bg-teal-500" style={{ width: `${percent}%` }} />
        </div>
      </div>
      {compact ? null : (
        <>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-black uppercase text-amber-700">Badges</p>
              {badges.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {badges.map((badge) => (
                    <span key={badge} className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-black text-amber-800">
                      {badge}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-slate-600">Complete one practice perfectly to start earning badges.</p>
              )}
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-black uppercase text-rose-700">Weak Concepts</p>
              {weakConcepts.length ? (
                <ul className="mt-3 grid gap-2">
                  {weakConcepts.map((lesson) => (
                    <li key={lesson.slug}>
                      <Link href={`/practice/${lesson.slug}`} className="focus-ring block rounded-md bg-rose-50 px-3 py-2 text-sm font-bold text-rose-900 transition hover:bg-rose-100">
                        Review {lesson.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-slate-600">No weak concepts yet. Missed practice questions will appear here.</p>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={resetProgress}
            className="focus-ring mt-5 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-black text-slate-700 transition hover:border-rose-300 hover:text-rose-700"
          >
            Reset Progress
          </button>
        </>
      )}
    </div>
  );
}
