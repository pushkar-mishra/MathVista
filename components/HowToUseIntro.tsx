"use client";

import { useEffect, useState } from "react";

const storageKey = "mathvista-intro-dismissed";

export function HowToUseIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem(storageKey) !== "true");
  }, []);

  if (!visible) return null;

  return (
    <section className="math-card rounded-lg p-4 sm:p-5">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase text-teal-700">How to use MathVista</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950">Learn visually, then practice.</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <Step number="1" title="Follow Path" text="Open the Learning Path and start with the next concept." />
            <Step number="2" title="Move Sliders" text="Use the visual demo until the formula feels clear." />
            <Step number="3" title="Practice Later" text="Mark the lesson complete, then try the separate practice." />
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            localStorage.setItem(storageKey, "true");
            setVisible(false);
          }}
          className="focus-ring rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 transition hover:border-teal-300 sm:py-2"
        >
          Got it
        </button>
      </div>
    </section>
  );
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-950 text-sm font-black text-white">{number}</span>
      <h3 className="mt-3 font-black text-slate-950">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
