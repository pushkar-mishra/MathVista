"use client";

import { useEffect, useState } from "react";

type LessonCompletionMap = Record<string, { completed: boolean; updatedAt: string }>;

const storageKey = "mathvista-lesson-completions";

export function LessonCompletion({ lessonSlug }: { lessonSlug: string }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const completions = JSON.parse(localStorage.getItem(storageKey) ?? "{}") as LessonCompletionMap;
    setCompleted(Boolean(completions[lessonSlug]?.completed));
  }, [lessonSlug]);

  function markCompleted() {
    const completions = JSON.parse(localStorage.getItem(storageKey) ?? "{}") as LessonCompletionMap;
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        ...completions,
        [lessonSlug]: {
          completed: true,
          updatedAt: new Date().toISOString()
        }
      })
    );
    setCompleted(true);
    window.dispatchEvent(new Event("mathvista-lessons-updated"));
  }

  return (
    <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
      <div className="grid gap-3 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase text-blue-700">Learning progress</p>
          <h2 className="mt-1 text-xl font-black text-slate-950">{completed ? "Lesson marked complete" : "Finished learning this concept?"}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-700">
            This is separate from practice. Mark it when the visual explanation makes sense.
          </p>
        </div>
        <button
          type="button"
          onClick={markCompleted}
          disabled={completed}
          className="focus-ring rounded-md bg-blue-600 px-4 py-3 text-sm font-black text-white transition hover:bg-blue-700 disabled:bg-teal-600 sm:py-2"
        >
          {completed ? "Completed" : "Mark Lesson Complete"}
        </button>
      </div>
    </div>
  );
}
