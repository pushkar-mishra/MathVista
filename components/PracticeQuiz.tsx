"use client";

import { useState } from "react";
import type { PracticeQuestion } from "@/lib/lessons";

export function PracticeQuiz({ questions, lessonSlug }: { questions: PracticeQuestion[]; lessonSlug: string }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, string> | null>(null);
  const visibleAnswers = submittedAnswers ?? answers;
  const score = questions.filter((question) => visibleAnswers[question.id] === question.correctAnswer).length;
  const missedQuestions = questions.filter((question) => visibleAnswers[question.id] !== question.correctAnswer);

  function submit() {
    const finalAnswers = { ...answers };
    const finalScore = questions.filter((question) => finalAnswers[question.id] === question.correctAnswer).length;
    const finalMissedQuestions = questions.filter((question) => finalAnswers[question.id] !== question.correctAnswer);
    setSubmittedAnswers(finalAnswers);
    setSubmitted(true);
    const progress = JSON.parse(localStorage.getItem("mathvista-progress") ?? "{}");
    localStorage.setItem(
      "mathvista-progress",
      JSON.stringify({
        ...progress,
        [lessonSlug]: {
          completed: finalScore === questions.length,
          score: finalScore,
          total: questions.length,
          mistakes: finalMissedQuestions.map((question) => question.prompt),
          updatedAt: new Date().toISOString()
        }
      })
    );
    window.dispatchEvent(new Event("mathvista-progress-updated"));
  }

  return (
    <section className="math-card rounded-lg p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-slate-950">Practice</h2>
          <p className="mt-1 text-sm text-slate-600">Answer and get a visual-thinking explanation.</p>
        </div>
        {submitted ? (
          <p className="rounded-md bg-blue-50 px-3 py-2 text-sm font-black text-blue-700">
            Score {score}/{questions.length}
          </p>
        ) : null}
      </div>
      {submitted ? (
        <div className={`mt-5 rounded-lg border p-4 ${score === questions.length ? "border-teal-200 bg-teal-50" : "border-amber-200 bg-amber-50"}`}>
          <h3 className="text-lg font-black text-slate-950">{score === questions.length ? "Concept mastered" : "Practice recap"}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-700">
            {score === questions.length
              ? "You answered every question correctly. This lesson now counts toward your badges."
              : "Review the questions below, replay the lesson visual if needed, then try again."}
          </p>
          {missedQuestions.length ? (
            <ul className="mt-3 grid gap-2">
              {missedQuestions.map((question) => (
                <li key={question.id} className="rounded-md bg-white px-3 py-2 text-sm font-bold text-slate-700">
                  Review: {question.prompt}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
      <div className="mt-5 grid gap-4">
        {questions.map((question, index) => {
          const selected = visibleAnswers[question.id];
          const isCorrect = submitted && selected === question.correctAnswer;
          const isWrong = submitted && selected && selected !== question.correctAnswer;
          return (
            <div key={question.id} className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="font-bold text-slate-900">
                {index + 1}. {question.prompt}
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {question.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    disabled={submitted}
                    onClick={() => setAnswers((current) => ({ ...current, [question.id]: option }))}
                    className={`focus-ring min-h-11 rounded-md border px-3 py-3 text-left text-sm font-bold transition sm:py-2 ${
                      selected === option
                        ? "border-blue-500 bg-blue-50 text-blue-800"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 disabled:hover:border-slate-200"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {submitted ? (
                <div
                  className={`mt-3 rounded-md border px-3 py-2 text-sm ${
                    isCorrect
                      ? "border-teal-200 bg-teal-50 text-teal-900"
                      : isWrong
                        ? "border-rose-200 bg-rose-50 text-rose-900"
                        : "border-amber-200 bg-amber-50 text-amber-900"
                  }`}
                >
                  <strong>{isCorrect ? "Correct. " : isWrong ? "Look again. " : "Try this one. "}</strong>
                  {question.explanation}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={submit}
          className="focus-ring w-full rounded-md bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-blue-700 sm:w-auto sm:py-2"
        >
          Check Answers
        </button>
        {submitted ? (
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setSubmittedAnswers(null);
              setAnswers({});
            }}
            className="focus-ring w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 transition hover:border-blue-300 sm:w-auto sm:py-2"
          >
            Try Again
          </button>
        ) : null}
      </div>
    </section>
  );
}
