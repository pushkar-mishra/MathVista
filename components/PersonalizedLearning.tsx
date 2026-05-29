"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { lessons } from "@/lib/lessons";

type StoredProgress = Record<string, { completed: boolean; score: number; total: number; updatedAt: string }>;
type StudentLevel = "beginner" | "intermediate" | "advanced";

const levelLabels: Record<StudentLevel, string> = {
  beginner: "Beginner · up to Grade 5",
  intermediate: "Intermediate · Grades 6-7",
  advanced: "Advanced · Grades 8-10"
};

const levelPriority: Record<StudentLevel, number[]> = {
  beginner: [1, 2, 3],
  intermediate: [1, 2, 3],
  advanced: [2, 1, 3]
};

export function PersonalizedLearning() {
  const [name, setName] = useState("");
  const [studentLevel, setStudentLevel] = useState<StudentLevel>("beginner");
  const [progress, setProgress] = useState<StoredProgress>({});

  useEffect(() => {
    function refreshProfile() {
      setName(localStorage.getItem("mathvista-student-name") ?? "");
      setStudentLevel((localStorage.getItem("mathvista-student-level") as StudentLevel | null) ?? "beginner");
      setProgress(JSON.parse(localStorage.getItem("mathvista-progress") ?? "{}"));
    }

    refreshProfile();
    window.addEventListener("mathvista-profile-updated", refreshProfile);
    window.addEventListener("storage", refreshProfile);

    return () => {
      window.removeEventListener("mathvista-profile-updated", refreshProfile);
      window.removeEventListener("storage", refreshProfile);
    };
  }, []);

  useEffect(() => {
    function refreshProgress() {
      setProgress(JSON.parse(localStorage.getItem("mathvista-progress") ?? "{}"));
    }

    window.addEventListener("mathvista-progress-updated", refreshProgress);

    return () => {
      window.removeEventListener("mathvista-progress-updated", refreshProgress);
    };
  }, []);

  const orderedLessons = useMemo(() => {
    const priority = levelPriority[studentLevel];
    return [...lessons].sort((a, b) => {
      const levelDifference = priority.indexOf(a.level) - priority.indexOf(b.level);
      if (levelDifference !== 0) return levelDifference;
      if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
      return lessons.indexOf(a) - lessons.indexOf(b);
    });
  }, [studentLevel]);

  const reviewLesson = useMemo(
    () =>
      orderedLessons.find((lesson) => {
        const record = progress[lesson.slug];
        return record && !record.completed;
      }),
    [orderedLessons, progress]
  );

  const nextLesson = useMemo(
    () => orderedLessons.find((lesson) => !progress[lesson.slug]?.completed),
    [orderedLessons, progress]
  );

  const completedCount = lessons.filter((lesson) => progress[lesson.slug]?.completed).length;
  const recommendation = reviewLesson ?? nextLesson ?? lessons[0];
  const isReview = Boolean(reviewLesson);

  return (
    <section className="math-card rounded-lg p-5">
      <div className="grid gap-5 lg:grid-cols-[1fr_18rem] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-violet-700">Next Step</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950">
            {name ? `${name}, ` : ""}{isReview ? "review this before moving ahead." : "continue with the best next lesson."}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            {isReview
              ? "Your practice score shows this concept needs one more pass. Rewatch the visual demo, then retry the practice."
              : `The app uses your ${levelLabels[studentLevel]} path and local practice progress to pick the next lesson. No login is needed.`}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-black uppercase text-slate-500">{isReview ? "Review lesson" : "Next lesson"}</p>
          <h3 className="mt-2 text-lg font-black text-slate-950">{recommendation.title}</h3>
          <p className="mt-1 text-sm text-slate-600">Level {recommendation.level} · {recommendation.subject}</p>
          <Link
            href={isReview ? `/practice/${recommendation.slug}` : `/lesson/${recommendation.slug}`}
            className="focus-ring mt-4 flex rounded-md bg-slate-950 px-4 py-3 text-center text-sm font-black text-white transition hover:bg-blue-700 sm:inline-flex sm:py-2"
          >
            {isReview ? "Review and Practice" : "Continue Learning"}
          </Link>
        </div>
      </div>
      <p className="mt-4 text-xs font-bold uppercase text-slate-500">
        {completedCount}/{lessons.length} complete · {studentLevel} path
      </p>
    </section>
  );
}
