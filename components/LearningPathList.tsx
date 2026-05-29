"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { lessons, type Lesson } from "@/lib/lessons";

type StudentLevel = "beginner" | "intermediate" | "advanced";

const levelCopy = {
  1: {
    title: "Level 1: Basic Understanding",
    detail: "Build the vocabulary and mental pictures: points, lines, area, perimeter, variables, and equations."
  },
  2: {
    title: "Level 2: Visual Explanation",
    detail: "Use diagrams to see why formulas and identities work."
  },
  3: {
    title: "Level 3: Practice and Application",
    detail: "Apply concepts through mixed questions and real examples."
  }
};

const pathOrder: Record<StudentLevel, number[]> = {
  beginner: [1, 2, 3],
  intermediate: [1, 2, 3],
  advanced: [2, 1, 3]
};

const pathLabel: Record<StudentLevel, string> = {
  beginner: "Beginner path",
  intermediate: "Intermediate path",
  advanced: "Advanced path"
};

export function LearningPathList() {
  const [studentLevel, setStudentLevel] = useState<StudentLevel>("beginner");

  useEffect(() => {
    function refreshLevel() {
      setStudentLevel((localStorage.getItem("mathvista-student-level") as StudentLevel | null) ?? "beginner");
    }

    refreshLevel();
    window.addEventListener("mathvista-profile-updated", refreshLevel);

    return () => {
      window.removeEventListener("mathvista-profile-updated", refreshLevel);
    };
  }, []);

  const groupedLessons = useMemo(() => {
    return pathOrder[studentLevel].map((level) => ({
      level,
      lessons: lessons.filter((lesson) => shouldShowLesson(lesson, studentLevel, level))
    }));
  }, [studentLevel]);

  return (
    <section className="mt-8 grid gap-6">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="text-sm font-black uppercase text-blue-700">Active path</p>
        <h2 className="mt-1 text-2xl font-black text-slate-950">{pathLabel[studentLevel]}</h2>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          {studentLevel === "advanced"
            ? "Advanced students start with visual proofs, but the basics stay available for review."
            : "This path starts with fundamentals and gradually moves into visual proofs and application."}
        </p>
      </div>

      {groupedLessons.map(({ level, lessons: levelLessons }) => {
        const copy = levelCopy[level as 1 | 2 | 3];
        if (!levelLessons.length) return null;

        return (
          <div key={level} className="rounded-lg border border-slate-200 bg-white/80 p-4 sm:p-5">
            <div className="grid gap-3 sm:flex sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-950">{copy.title}</h2>
                <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">{copy.detail}</p>
              </div>
              <Link href="/practice" className="focus-ring rounded-md border border-amber-200 bg-amber-50 px-3 py-3 text-center text-sm font-black text-amber-800 transition hover:border-amber-400 sm:py-2">
                Practice Area
              </Link>
            </div>

            <ol className="mt-5 grid gap-3">
              {levelLessons.map((lesson, index) => (
                <li key={lesson.slug} className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 sm:grid-cols-[3rem_1fr_auto] sm:items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 font-black text-white">{index + 1}</span>
                  <div>
                    <p className="text-xs font-black uppercase text-slate-500">{lesson.subject}</p>
                    <h3 className="mt-1 text-lg font-black text-slate-950">{lesson.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{lesson.summary}</p>
                  </div>
                  <Link href={`/lesson/${lesson.slug}`} className="focus-ring rounded-md bg-blue-600 px-4 py-3 text-center text-sm font-black text-white transition hover:bg-blue-700 sm:py-2">
                    Learn
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        );
      })}
    </section>
  );
}

function shouldShowLesson(lesson: Lesson, studentLevel: StudentLevel, level: number) {
  if (lesson.level !== level) return false;
  if (studentLevel === "beginner") return lesson.level === 1 || lesson.slug === "mixed-word-problems";
  if (studentLevel === "intermediate") return true;
  return true;
}
