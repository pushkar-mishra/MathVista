"use client";

import { FormEvent, useEffect, useState } from "react";

const storageKey = "mathvista-student-name";
const levelStorageKey = "mathvista-student-level";

type StudentLevel = "beginner" | "intermediate" | "advanced";

const levelOptions: Array<{ id: StudentLevel; label: string; grades: string; description: string }> = [
  {
    id: "beginner",
    label: "Beginner",
    grades: "Up to Grade 5",
    description: "Start with shapes, basic measurements, and simple variables."
  },
  {
    id: "intermediate",
    label: "Intermediate",
    grades: "Grades 6-7",
    description: "Build formula understanding, equations, and visual proofs."
  },
  {
    id: "advanced",
    label: "Advanced",
    grades: "Grades 8-10",
    description: "Move faster into identities, applications, and mixed practice."
  }
];

export function StudentNameGate() {
  const [name, setName] = useState("");
  const [draftName, setDraftName] = useState("");
  const [level, setLevel] = useState<StudentLevel>("beginner");
  const [draftLevel, setDraftLevel] = useState<StudentLevel>("beginner");
  const [ready, setReady] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem(storageKey) ?? "";
    const savedLevel = (localStorage.getItem(levelStorageKey) as StudentLevel | null) ?? "beginner";
    setName(savedName);
    setDraftName(savedName);
    setLevel(savedLevel);
    setDraftLevel(savedLevel);
    setReady(true);
  }, []);

  function saveName(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanName = draftName.trim().slice(0, 32);

    if (!cleanName) return;

    localStorage.setItem(storageKey, cleanName);
    localStorage.setItem(levelStorageKey, draftLevel);
    setName(cleanName);
    setDraftName(cleanName);
    setLevel(draftLevel);
    setEditing(false);
    window.dispatchEvent(new Event("mathvista-profile-updated"));
  }

  if (!ready) return null;

  return (
    <>
      {name ? (
        <div className="border-b border-slate-200/80 bg-teal-50/80">
          <div className="mx-auto grid max-w-7xl gap-2 px-4 py-2 sm:flex sm:items-center sm:justify-between">
            <p className="text-sm font-bold text-slate-800">
              Welcome, <span className="text-teal-700">{name}</span>. Your path is{" "}
              <span className="text-blue-700">{level}</span>. Ready to see why formulas work?
            </p>
            <div className="grid grid-cols-2 gap-2 sm:flex">
              <button
                type="button"
                onClick={() => {
                  setDraftName(name);
                  setDraftLevel(level);
                  setEditing(true);
                }}
                className="focus-ring rounded-md border border-teal-200 bg-white px-3 py-2 text-xs font-black text-teal-800 transition hover:border-teal-400"
              >
                Edit Name
              </button>
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem(storageKey);
                  localStorage.removeItem(levelStorageKey);
                  setName("");
                  setDraftName("");
                setLevel("beginner");
                setDraftLevel("beginner");
                setEditing(true);
                window.dispatchEvent(new Event("mathvista-profile-updated"));
              }}
                className="focus-ring rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 transition hover:border-rose-300 hover:text-rose-700"
              >
                Reset Profile
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {!name || editing ? (
        <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-slate-950/55 px-4 py-4">
          <form onSubmit={saveName} className="math-card max-h-[92vh] w-full max-w-2xl overflow-auto rounded-lg bg-white p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-950">
                <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7">
                  <circle cx="12" cy="12" r="7" fill="#dbeafe" stroke="#60a5fa" strokeWidth="2" />
                  <path d="M12 12 L19 12" stroke="#fb7185" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M17 19 H25 V27 H17 Z" fill="#fbbf24" />
                  <path d="M7 25 C12 20 17 28 25 22" fill="none" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-950">Welcome to MathVista</h2>
                <p className="text-sm text-slate-600">Enter your name and choose a learning level.</p>
              </div>
            </div>

            <label htmlFor="student-name" className="mt-5 block text-sm font-bold text-slate-700">
              Student name
            </label>
            <input
              id="student-name"
              value={draftName}
              onChange={(event) => setDraftName(event.target.value)}
              autoFocus
              maxLength={32}
              className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-base font-bold text-slate-950"
              placeholder="Example: Anika Kumari"
            />

            <fieldset className="mt-5">
              <legend className="text-sm font-bold text-slate-700">Learning level</legend>
              <div className="mt-2 grid gap-3 md:grid-cols-3">
                {levelOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`cursor-pointer rounded-lg border p-3 transition ${
                      draftLevel === option.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200 bg-white hover:border-blue-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="student-level"
                      value={option.id}
                      checked={draftLevel === option.id}
                      onChange={() => setDraftLevel(option.id)}
                      className="sr-only"
                    />
                    <span className="block text-base font-black text-slate-950">{option.label}</span>
                    <span className="mt-1 block text-xs font-black uppercase text-blue-700">{option.grades}</span>
                    <span className="mt-2 block text-sm leading-5 text-slate-600">{option.description}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <button
              type="submit"
              className="focus-ring mt-4 w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-black text-white transition hover:bg-blue-700"
            >
              Start Learning
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
