export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-950">
        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6">
          <circle cx="12" cy="12" r="7" fill="#dbeafe" stroke="#60a5fa" strokeWidth="2" />
          <path d="M12 12 L19 12" stroke="#fb7185" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M17 19 H25 V27 H17 Z" fill="#fbbf24" />
          <path d="M7 25 C12 20 17 28 25 22" fill="none" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
      {!compact ? (
        <span className="leading-none">
          <span className="block text-xl font-black text-slate-950">MathVista</span>
          <span className="block text-[10px] font-bold uppercase text-slate-500">See why it works</span>
        </span>
      ) : null}
    </span>
  );
}
