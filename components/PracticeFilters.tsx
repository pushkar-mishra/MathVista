"use client";

import { useMemo, useState } from "react";
import { PracticeCard } from "@/components/PracticeCard";
import type { Lesson, Level, Subject } from "@/lib/lessons";

type SubjectFilter = "all" | Subject;
type LevelFilter = "all" | Level;

export function PracticeFilters({ lessons }: { lessons: Lesson[] }) {
  const [subject, setSubject] = useState<SubjectFilter>("all");
  const [level, setLevel] = useState<LevelFilter>("all");

  const filteredLessons = useMemo(
    () =>
      lessons.filter((lesson) => {
        const subjectMatch = subject === "all" || lesson.subject === subject;
        const levelMatch = level === "all" || lesson.level === level;
        return subjectMatch && levelMatch;
      }),
    [lessons, level, subject]
  );

  return (
    <>
      <section className="mt-8 rounded-lg border border-slate-200 bg-white/80 p-4">
        <p className="text-sm font-black uppercase text-amber-700">Filters</p>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <SegmentedControl
            label="Topic"
            options={[
              { label: "All", value: "all" },
              { label: "Geometry", value: "geometry" },
              { label: "Algebra", value: "algebra" }
            ]}
            value={subject}
            onChange={(value) => setSubject(value as SubjectFilter)}
          />
          <SegmentedControl
            label="Level"
            options={[
              { label: "All", value: "all" },
              { label: "Level 1", value: "1" },
              { label: "Level 2", value: "2" },
              { label: "Level 3", value: "3" }
            ]}
            value={String(level)}
            onChange={(value) => setLevel(value === "all" ? "all" : (Number(value) as Level))}
          />
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredLessons.map((lesson) => (
          <PracticeCard key={lesson.slug} lesson={lesson} />
        ))}
      </section>
    </>
  );
}

function SegmentedControl({
  label,
  options,
  value,
  onChange
}: {
  label: string;
  options: Array<{ label: string; value: string }>;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="text-sm font-bold text-slate-700">{label}</p>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`focus-ring rounded-md border px-3 py-3 text-sm font-black transition sm:py-2 ${
              value === option.value
                ? "border-amber-400 bg-amber-50 text-amber-800"
                : "border-slate-200 bg-white text-slate-700 hover:border-amber-300"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
