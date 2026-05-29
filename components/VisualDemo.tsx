"use client";

import { useMemo, useState } from "react";
import type { DemoId } from "@/lib/lessons";

export function VisualDemo({ demoId }: { demoId: DemoId }) {
  if (demoId === "geometry-basics") return <GeometryBasics />;
  if (demoId === "perimeter-area") return <PerimeterArea />;
  if (demoId === "circle-explorer") return <CircleExplorer />;
  if (demoId === "rectangle-area") return <RectangleArea />;
  if (demoId === "square-area") return <SquareArea />;
  if (demoId === "circle-circumference") return <CircleCircumference />;
  if (demoId === "triangle-area") return <TriangleArea />;
  if (demoId === "circle-area") return <CircleAreaProof />;
  if (demoId === "variable-balance") return <VariableExpression />;
  if (demoId === "like-terms") return <LikeTerms />;
  if (demoId === "linear-equation") return <LinearEquation />;
  if (demoId === "algebra-minus-square") return <AlgebraMinusSquare />;
  if (demoId === "difference-squares") return <DifferenceSquares />;
  if (demoId === "word-problem") return <WordProblemChooser />;
  return <AlgebraSquare />;
}

function GeometryBasics() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <svg viewBox="0 0 520 280" role="img" aria-label="Point line segment and angle basics" className="h-full min-h-72 w-full">
        <rect width="520" height="280" rx="16" fill="#f8fafc" />
        <text x="24" y="32" fill="#14213d" fontSize="16" fontWeight="800">Geometry starts with positions, straight paths, and turns.</text>
        <g transform="translate(46 80)">
          <circle cx="36" cy="42" r="8" fill="#2563eb" />
          <text x="12" y="88" fill="#1d4ed8" fontSize="15" fontWeight="800">point</text>
        </g>
        <g transform="translate(144 82)">
          <line x1="0" y1="42" x2="120" y2="42" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
          <path d="M0 42 L14 32 M0 42 L14 52 M120 42 L106 32 M120 42 L106 52" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" />
          <text x="42" y="88" fill="#0f766e" fontSize="15" fontWeight="800">line</text>
        </g>
        <g transform="translate(310 82)">
          <line x1="0" y1="42" x2="110" y2="42" stroke="#d97706" strokeWidth="5" strokeLinecap="round" />
          <circle cx="0" cy="42" r="7" fill="#d97706" />
          <circle cx="110" cy="42" r="7" fill="#d97706" />
          <text x="20" y="88" fill="#b45309" fontSize="15" fontWeight="800">segment</text>
        </g>
        <g transform="translate(202 170)">
          <line x1="0" y1="68" x2="96" y2="68" stroke="#e11d48" strokeWidth="5" strokeLinecap="round" />
          <line x1="0" y1="68" x2="76" y2="12" stroke="#e11d48" strokeWidth="5" strokeLinecap="round" />
          <path d="M34 68 A34 34 0 0 1 27 48" fill="none" stroke="#fb7185" strokeWidth="4" />
          <text x="38" y="45" fill="#be123c" fontSize="15" fontWeight="800">turn</text>
          <text x="32" y="100" fill="#be123c" fontSize="15" fontWeight="800">angle</text>
        </g>
      </svg>
    </div>
  );
}

function PerimeterArea() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <svg viewBox="0 0 520 300" role="img" aria-label="Perimeter compared with area" className="h-full min-h-72 w-full">
        <rect width="520" height="300" rx="16" fill="#f8fafc" />
        <text x="24" y="32" fill="#14213d" fontSize="16" fontWeight="800">Perimeter follows the outside. Area fills the inside.</text>
        <g transform="translate(86 76)">
          <rect x="0" y="0" width="150" height="120" fill="#fef3c7" stroke="#d97706" strokeWidth="7" />
          <path d="M0 0 H150 V120 H0 Z" fill="none" stroke="#e11d48" strokeWidth="4" strokeDasharray="10 7" />
          <text x="24" y="156" fill="#be123c" fontSize="16" fontWeight="900">perimeter = outside walk</text>
        </g>
        <g transform="translate(304 76)">
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 5 }).map((__, col) => (
              <rect key={`${row}-${col}`} x={col * 30} y={row * 30} width="30" height="30" fill={(row + col) % 2 ? "#ccfbf1" : "#dbeafe"} stroke="#334155" />
            ))
          )}
          <rect x="0" y="0" width="150" height="120" fill="none" stroke="#2563eb" strokeWidth="4" />
          <text x="18" y="156" fill="#1d4ed8" fontSize="16" fontWeight="900">area = inside tiles</text>
        </g>
      </svg>
    </div>
  );
}

function CircleExplorer() {
  const [radius, setRadius] = useState(5);
  const diameter = radius * 2;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;
  const visualRadius = 24 + radius * 8;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_17rem]">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <svg viewBox="0 0 360 280" role="img" aria-label="Interactive circle showing radius and diameter" className="h-full min-h-72 w-full">
          <rect width="360" height="280" rx="16" fill="#f8fafc" />
          <circle cx="178" cy="142" r={visualRadius} fill="#dbeafe" stroke="#2563eb" strokeWidth="4" />
          <line x1="178" y1="142" x2={178 + visualRadius} y2="142" stroke="#e11d48" strokeWidth="4" />
          <line x1={178 - visualRadius} y1="142" x2="178" y2="142" stroke="#f59e0b" strokeWidth="4" />
          <line x1={178 - visualRadius} y1={142 + visualRadius + 18} x2={178 + visualRadius} y2={142 + visualRadius + 18} stroke="#14b8a6" strokeWidth="4" />
          <circle cx="178" cy="142" r="5" fill="#14213d" />
          <text x={178 + visualRadius / 2 - 8} y="133" fill="#9f1239" fontSize="15" fontWeight="700">r</text>
          <text x={178 - visualRadius / 2 - 8} y="133" fill="#b45309" fontSize="15" fontWeight="700">r</text>
          <text x="132" y={Math.min(260, 142 + visualRadius + 42)} fill="#0f766e" fontSize="15" fontWeight="700">diameter = {diameter}</text>
          <text x="20" y="30" fill="#14213d" fontSize="15" fontWeight="700">Diameter is two radii: d = r + r = 2r</text>
        </svg>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <label className="block text-sm font-bold text-slate-700" htmlFor="radius">Radius</label>
        <input
          id="radius"
          className="mt-3 w-full accent-blue-600"
          type="range"
          min="2"
          max="12"
          value={radius}
          onChange={(event) => setRadius(Number(event.target.value))}
        />
        <dl className="mt-5 grid gap-3 text-sm">
          <Metric label="Radius" value={radius.toString()} color="text-rose-700" />
          <Metric label="Diameter" value={diameter.toString()} color="text-teal-700" />
          <Metric label="Circumference" value={circumference.toFixed(2)} color="text-blue-700" />
          <Metric label="Area" value={area.toFixed(2)} color="text-amber-700" />
        </dl>
      </div>
    </div>
  );
}

function CircleAreaProof() {
  const [slices, setSlices] = useState(12);
  const wedges = useMemo(() => Array.from({ length: slices }, (_, index) => index), [slices]);
  const width = 230;
  const sliceWidth = width / slices;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_16rem]">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <svg viewBox="0 0 460 300" role="img" aria-label="Circle slices rearranged into a rectangle-like shape" className="h-full min-h-72 w-full">
          <rect width="460" height="300" rx="16" fill="#f8fafc" />
          <g transform="translate(110 118)">
            <circle r="72" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="3" />
            {wedges.map((index) => (
              <line
                key={index}
                x1="0"
                y1="0"
                x2={72 * Math.cos((index * 2 * Math.PI) / slices)}
                y2={72 * Math.sin((index * 2 * Math.PI) / slices)}
                stroke="#0f766e"
                strokeWidth="1.5"
              />
            ))}
            <text x="-50" y="98" fill="#0f766e" fontSize="14" fontWeight="700">circle slices</text>
          </g>
          <g transform="translate(210 82)">
            {wedges.map((index) => {
              const isTop = index % 2 === 0;
              return (
                <path
                  key={index}
                  d={`M ${index * sliceWidth} ${isTop ? 70 : 110} L ${(index + 0.5) * sliceWidth} ${isTop ? 20 : 160} L ${(index + 1) * sliceWidth} ${isTop ? 70 : 110} Z`}
                  fill={isTop ? "#bfdbfe" : "#fde68a"}
                  stroke={isTop ? "#2563eb" : "#d97706"}
                  strokeWidth="1.5"
                />
              );
            })}
            <line x1="0" y1="178" x2={width} y2="178" stroke="#14213d" strokeWidth="2" />
            <line x1="0" y1="70" x2="0" y2="178" stroke="#14213d" strokeWidth="2" />
            <text x="82" y="202" fill="#14213d" fontSize="14" fontWeight="700">width ≈ πr</text>
            <text x="-36" y="128" fill="#14213d" fontSize="14" fontWeight="700">r</text>
          </g>
          <text x="20" y="30" fill="#14213d" fontSize="15" fontWeight="700">More slices make the shape closer to a rectangle</text>
        </svg>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <label className="block text-sm font-bold text-slate-700" htmlFor="slices">Number of slices</label>
        <input
          id="slices"
          className="mt-3 w-full accent-teal-600"
          type="range"
          min="8"
          max="24"
          step="4"
          value={slices}
          onChange={(event) => setSlices(Number(event.target.value))}
        />
        <p className="mt-4 text-3xl font-black text-teal-700">{slices}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          The rearranged shape keeps the same area as the circle. Its width approaches πr and its height is r.
        </p>
      </div>
    </div>
  );
}

function CircleCircumference() {
  const [diameter, setDiameter] = useState(6);
  const circumference = Math.PI * diameter;
  const radius = diameter / 2;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_16rem]">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <svg viewBox="0 0 520 300" role="img" aria-label="Circumference unrolled into pi diameters" className="h-full min-h-72 w-full">
          <rect width="520" height="300" rx="16" fill="#f8fafc" />
          <circle cx="118" cy="130" r="64" fill="#dbeafe" stroke="#2563eb" strokeWidth="5" />
          <line x1="54" y1="130" x2="182" y2="130" stroke="#14b8a6" strokeWidth="5" />
          <text x="82" y="158" fill="#0f766e" fontSize="15" fontWeight="900">d = 2r</text>
          <path d="M230 118 H430" stroke="#e11d48" strokeWidth="8" strokeLinecap="round" />
          <path d="M230 145 H430" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />
          <path d="M230 172 H302" stroke="#7c3aed" strokeWidth="8" strokeLinecap="round" />
          <text x="232" y="96" fill="#14213d" fontSize="15" fontWeight="900">unrolled edge ≈ 3.14 diameters</text>
          <text x="252" y="218" fill="#14213d" fontSize="18" fontWeight="900">C = πd = 2πr</text>
        </svg>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <label className="block text-sm font-bold text-slate-700" htmlFor="diameter">Diameter = {diameter}</label>
        <input id="diameter" className="mt-3 w-full accent-blue-600" type="range" min="4" max="14" value={diameter} onChange={(event) => setDiameter(Number(event.target.value))} />
        <dl className="mt-5 grid gap-3 text-sm">
          <Metric label="Radius" value={radius.toString()} color="text-teal-700" />
          <Metric label="πd" value={circumference.toFixed(2)} color="text-rose-700" />
          <Metric label="2πr" value={(2 * Math.PI * radius).toFixed(2)} color="text-blue-700" />
        </dl>
      </div>
    </div>
  );
}

function RectangleArea() {
  const [length, setLength] = useState(6);
  const [breadth, setBreadth] = useState(4);
  const cell = 28;
  const area = length * breadth;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_17rem]">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <svg viewBox="0 0 430 300" role="img" aria-label="Rectangle area grid" className="h-full min-h-72 w-full">
          <rect width="430" height="300" rx="16" fill="#f8fafc" />
          <g transform={`translate(${(430 - length * cell) / 2} 54)`}>
            {Array.from({ length: breadth }).map((_, row) =>
              Array.from({ length }).map((__, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={col * cell}
                  y={row * cell}
                  width={cell}
                  height={cell}
                  fill={(row + col) % 2 === 0 ? "#dbeafe" : "#ccfbf1"}
                  stroke="#334155"
                  strokeWidth="1"
                />
              ))
            )}
            <line x1="0" y1={breadth * cell + 18} x2={length * cell} y2={breadth * cell + 18} stroke="#2563eb" strokeWidth="4" />
            <line x1="-18" y1="0" x2="-18" y2={breadth * cell} stroke="#14b8a6" strokeWidth="4" />
            <text x={length * cell / 2 - 34} y={breadth * cell + 44} fill="#1d4ed8" fontSize="15" fontWeight="800">length = {length}</text>
            <text x="-48" y={breadth * cell / 2 + 5} fill="#0f766e" fontSize="15" fontWeight="800">breadth = {breadth}</text>
          </g>
          <text x="22" y="30" fill="#14213d" fontSize="15" fontWeight="800">Area counts unit squares: {length} x {breadth} = {area}</text>
        </svg>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <label className="block text-sm font-bold text-slate-700" htmlFor="length">Length = {length}</label>
        <input id="length" className="mt-3 w-full accent-blue-600" type="range" min="3" max="9" value={length} onChange={(event) => setLength(Number(event.target.value))} />
        <label className="mt-5 block text-sm font-bold text-slate-700" htmlFor="breadth">Breadth = {breadth}</label>
        <input id="breadth" className="mt-3 w-full accent-teal-600" type="range" min="2" max="6" value={breadth} onChange={(event) => setBreadth(Number(event.target.value))} />
        <dl className="mt-5 grid gap-3 text-sm">
          <Metric label="Rows" value={breadth.toString()} color="text-teal-700" />
          <Metric label="Columns" value={length.toString()} color="text-blue-700" />
          <Metric label="Area" value={`${area} units²`} color="text-amber-700" />
        </dl>
      </div>
    </div>
  );
}

function SquareArea() {
  const [side, setSide] = useState(5);
  const cell = 30;
  const area = side * side;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_16rem]">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <svg viewBox="0 0 430 300" role="img" aria-label="Square area as side times side" className="h-full min-h-72 w-full">
          <rect width="430" height="300" rx="16" fill="#f8fafc" />
          <g transform={`translate(${(430 - side * cell) / 2} 58)`}>
            {Array.from({ length: side }).map((_, row) =>
              Array.from({ length: side }).map((__, col) => (
                <rect key={`${row}-${col}`} x={col * cell} y={row * cell} width={cell} height={cell} fill={(row + col) % 2 ? "#ede9fe" : "#dbeafe"} stroke="#334155" />
              ))
            )}
            <line x1="0" y1={side * cell + 18} x2={side * cell} y2={side * cell + 18} stroke="#7c3aed" strokeWidth="4" />
            <line x1="-18" y1="0" x2="-18" y2={side * cell} stroke="#2563eb" strokeWidth="4" />
            <text x={side * cell / 2 - 25} y={side * cell + 44} fill="#6d28d9" fontSize="15" fontWeight="800">side = {side}</text>
            <text x="-58" y={side * cell / 2 + 5} fill="#1d4ed8" fontSize="15" fontWeight="800">side = {side}</text>
          </g>
          <text x="22" y="30" fill="#14213d" fontSize="15" fontWeight="800">Same rows and columns: {side} x {side} = {area}</text>
        </svg>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <label className="block text-sm font-bold text-slate-700" htmlFor="side">Side = {side}</label>
        <input id="side" className="mt-3 w-full accent-violet-600" type="range" min="3" max="7" value={side} onChange={(event) => setSide(Number(event.target.value))} />
        <dl className="mt-5 grid gap-3 text-sm">
          <Metric label="Rows" value={side.toString()} color="text-blue-700" />
          <Metric label="Columns" value={side.toString()} color="text-violet-700" />
          <Metric label="Area" value={`${area} units²`} color="text-amber-700" />
        </dl>
      </div>
    </div>
  );
}

function TriangleArea() {
  const [base, setBase] = useState(8);
  const [height, setHeight] = useState(5);
  const area = (base * height) / 2;
  const visualBase = base * 28;
  const visualHeight = height * 28;
  const startX = 92;
  const startY = 232;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_17rem]">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <svg viewBox="0 0 430 300" role="img" aria-label="Triangle area as half of rectangle" className="h-full min-h-72 w-full">
          <rect width="430" height="300" rx="16" fill="#f8fafc" />
          <g transform={`translate(${Math.max(0, (430 - visualBase) / 2 - 8)} 0)`}>
            <rect x={startX} y={startY - visualHeight} width={visualBase} height={visualHeight} fill="#fff7ed" stroke="#fed7aa" strokeWidth="3" strokeDasharray="8 6" />
            <polygon points={`${startX},${startY} ${startX + visualBase},${startY} ${startX + visualBase},${startY - visualHeight}`} fill="#fecdd3" stroke="#e11d48" strokeWidth="4" />
            <polygon points={`${startX},${startY} ${startX},${startY - visualHeight} ${startX + visualBase},${startY - visualHeight}`} fill="#bfdbfe" opacity="0.8" stroke="#2563eb" strokeWidth="3" strokeDasharray="7 5" />
            <line x1={startX} y1={startY + 16} x2={startX + visualBase} y2={startY + 16} stroke="#e11d48" strokeWidth="4" />
            <line x1={startX + visualBase + 18} y1={startY} x2={startX + visualBase + 18} y2={startY - visualHeight} stroke="#2563eb" strokeWidth="4" />
            <text x={startX + visualBase / 2 - 30} y={startY + 42} fill="#be123c" fontSize="15" fontWeight="800">base = {base}</text>
            <text x={startX + visualBase + 28} y={startY - visualHeight / 2} fill="#1d4ed8" fontSize="15" fontWeight="800">height = {height}</text>
          </g>
          <text x="20" y="30" fill="#14213d" fontSize="15" fontWeight="800">The red triangle is half of the dashed rectangle.</text>
        </svg>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <label className="block text-sm font-bold text-slate-700" htmlFor="base">Base = {base}</label>
        <input id="base" className="mt-3 w-full accent-rose-600" type="range" min="4" max="9" value={base} onChange={(event) => setBase(Number(event.target.value))} />
        <label className="mt-5 block text-sm font-bold text-slate-700" htmlFor="height">Height = {height}</label>
        <input id="height" className="mt-3 w-full accent-blue-600" type="range" min="3" max="6" value={height} onChange={(event) => setHeight(Number(event.target.value))} />
        <dl className="mt-5 grid gap-3 text-sm">
          <Metric label="Rectangle area" value={(base * height).toString()} color="text-blue-700" />
          <Metric label="Triangle area" value={area.toString()} color="text-rose-700" />
        </dl>
      </div>
    </div>
  );
}

function VariableExpression() {
  const [x, setX] = useState(4);
  const result = x + 3;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_17rem]">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <svg viewBox="0 0 430 260" role="img" aria-label="Variable expression x plus three" className="h-full min-h-64 w-full">
          <rect width="430" height="260" rx="16" fill="#f8fafc" />
          <text x="24" y="32" fill="#14213d" fontSize="15" fontWeight="800">x changes, but the rule stays: add 3</text>
          <g transform="translate(44 82)">
            <rect width="96" height="82" rx="10" fill="#ccfbf1" stroke="#0f766e" strokeWidth="4" />
            <text x="34" y="50" fill="#0f766e" fontSize="25" fontWeight="900">x</text>
            <text x="26" y="112" fill="#0f766e" fontSize="15" fontWeight="800">value {x}</text>
          </g>
          <text x="166" y="134" fill="#14213d" fontSize="32" fontWeight="900">+</text>
          <g transform="translate(214 96)">
            {[0, 1, 2].map((item) => (
              <circle key={item} cx={item * 36} cy="28" r="17" fill="#fde68a" stroke="#d97706" strokeWidth="3" />
            ))}
            <text x="16" y="80" fill="#b45309" fontSize="15" fontWeight="800">3 more</text>
          </g>
          <text x="322" y="134" fill="#14213d" fontSize="32" fontWeight="900">=</text>
          <g transform="translate(362 92)">
            <circle cx="24" cy="32" r="30" fill="#dbeafe" stroke="#2563eb" strokeWidth="4" />
            <text x={result >= 10 ? "10" : "17"} y="42" fill="#1d4ed8" fontSize="26" fontWeight="900">{result}</text>
          </g>
        </svg>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <label className="block text-sm font-bold text-slate-700" htmlFor="x-value">x = {x}</label>
        <input id="x-value" className="mt-3 w-full accent-teal-600" type="range" min="1" max="9" value={x} onChange={(event) => setX(Number(event.target.value))} />
        <dl className="mt-5 grid gap-3 text-sm">
          <Metric label="Variable" value={`x = ${x}`} color="text-teal-700" />
          <Metric label="Expression" value="x + 3" color="text-amber-700" />
          <Metric label="Value" value={result.toString()} color="text-blue-700" />
        </dl>
      </div>
    </div>
  );
}

function LikeTerms() {
  const [left, setLeft] = useState(3);
  const [right, setRight] = useState(2);
  const total = left + right;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_16rem]">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <svg viewBox="0 0 430 280" role="img" aria-label="Like terms combined as algebra tiles" className="h-full min-h-72 w-full">
          <rect width="430" height="280" rx="16" fill="#f8fafc" />
          <text x="22" y="30" fill="#14213d" fontSize="15" fontWeight="800">Like terms match, so their counts can combine.</text>
          <g transform="translate(46 78)">
            {Array.from({ length: left }).map((_, index) => (
              <rect key={index} x={index * 32} y="0" width="26" height="70" rx="5" fill="#ccfbf1" stroke="#0f766e" strokeWidth="3" />
            ))}
            <text x="0" y="102" fill="#0f766e" fontSize="16" fontWeight="900">{left}x</text>
          </g>
          <text x="178" y="124" fill="#14213d" fontSize="30" fontWeight="900">+</text>
          <g transform="translate(230 78)">
            {Array.from({ length: right }).map((_, index) => (
              <rect key={index} x={index * 32} y="0" width="26" height="70" rx="5" fill="#ccfbf1" stroke="#0f766e" strokeWidth="3" />
            ))}
            <text x="0" y="102" fill="#0f766e" fontSize="16" fontWeight="900">{right}x</text>
          </g>
          <text x="322" y="124" fill="#14213d" fontSize="30" fontWeight="900">=</text>
          <text x="362" y="128" fill="#1d4ed8" fontSize="26" fontWeight="900">{total}x</text>
        </svg>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <label className="block text-sm font-bold text-slate-700" htmlFor="left-x">First group = {left}x</label>
        <input id="left-x" className="mt-3 w-full accent-teal-600" type="range" min="1" max="5" value={left} onChange={(event) => setLeft(Number(event.target.value))} />
        <label className="mt-5 block text-sm font-bold text-slate-700" htmlFor="right-x">Second group = {right}x</label>
        <input id="right-x" className="mt-3 w-full accent-blue-600" type="range" min="1" max="5" value={right} onChange={(event) => setRight(Number(event.target.value))} />
        <dl className="mt-5 grid gap-3 text-sm">
          <Metric label="Expression" value={`${left}x + ${right}x`} color="text-teal-700" />
          <Metric label="Combined" value={`${total}x`} color="text-blue-700" />
        </dl>
      </div>
    </div>
  );
}

function LinearEquation() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <svg viewBox="0 0 520 300" role="img" aria-label="Equation balance x plus three equals seven" className="h-full min-h-72 w-full">
        <rect width="520" height="300" rx="16" fill="#f8fafc" />
        <text x="22" y="32" fill="#14213d" fontSize="16" fontWeight="800">Keep the balance: subtract 3 from both sides.</text>
        <line x1="260" y1="82" x2="260" y2="210" stroke="#14213d" strokeWidth="6" />
        <line x1="120" y1="130" x2="400" y2="130" stroke="#14213d" strokeWidth="6" strokeLinecap="round" />
        <path d="M105 130 L70 218 H180 Z" fill="#dbeafe" stroke="#2563eb" strokeWidth="4" />
        <path d="M415 130 L340 218 H490 Z" fill="#dcfce7" stroke="#16a34a" strokeWidth="4" />
        <rect x="92" y="168" width="42" height="34" rx="6" fill="#ccfbf1" stroke="#0f766e" strokeWidth="3" />
        <text x="106" y="191" fill="#0f766e" fontSize="18" fontWeight="900">x</text>
        {[0, 1, 2].map((item) => (
          <circle key={item} cx={145 + item * 18} cy="185" r="8" fill="#fbbf24" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((item) => (
          <circle key={item} cx={368 + (item % 4) * 22} cy={178 + Math.floor(item / 4) * 24} r="9" fill="#fbbf24" />
        ))}
        <text x="94" y="252" fill="#1d4ed8" fontSize="16" fontWeight="900">x + 3</text>
        <text x="396" y="252" fill="#15803d" fontSize="16" fontWeight="900">7</text>
        <text x="202" y="272" fill="#be123c" fontSize="16" fontWeight="900">remove 3 from both sides → x = 4</text>
      </svg>
    </div>
  );
}

function AlgebraSquare() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(3);
  const scale = 26;
  const aSize = a * scale;
  const bSize = b * scale;
  const total = aSize + bSize;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_17rem]">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <svg viewBox="0 0 360 330" role="img" aria-label="Area model for a plus b squared" className="h-full min-h-80 w-full">
          <rect width="360" height="330" rx="16" fill="#f8fafc" />
          <g transform={`translate(${(360 - total) / 2} 42)`}>
            <rect x="0" y="0" width={aSize} height={aSize} fill="#bfdbfe" stroke="#2563eb" strokeWidth="3" />
            <rect x={aSize} y="0" width={bSize} height={aSize} fill="#fde68a" stroke="#d97706" strokeWidth="3" />
            <rect x="0" y={aSize} width={aSize} height={bSize} fill="#ccfbf1" stroke="#0f766e" strokeWidth="3" />
            <rect x={aSize} y={aSize} width={bSize} height={bSize} fill="#fbcfe8" stroke="#db2777" strokeWidth="3" />
            <text x={aSize / 2 - 12} y={aSize / 2} fill="#1d4ed8" fontSize="18" fontWeight="800">a²</text>
            <text x={aSize + bSize / 2 - 14} y={aSize / 2} fill="#b45309" fontSize="18" fontWeight="800">ab</text>
            <text x={aSize / 2 - 14} y={aSize + bSize / 2 + 6} fill="#0f766e" fontSize="18" fontWeight="800">ab</text>
            <text x={aSize + bSize / 2 - 12} y={aSize + bSize / 2 + 6} fill="#be185d" fontSize="18" fontWeight="800">b²</text>
          </g>
          <text x="24" y="28" fill="#14213d" fontSize="15" fontWeight="700">Full square side = a + b</text>
          <text x="78" y="306" fill="#14213d" fontSize="16" fontWeight="800">(a + b)² = a² + ab + ab + b²</text>
        </svg>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <label className="block text-sm font-bold text-slate-700" htmlFor="a">a = {a}</label>
        <input id="a" className="mt-3 w-full accent-violet-600" type="range" min="3" max="7" value={a} onChange={(event) => setA(Number(event.target.value))} />
        <label className="mt-5 block text-sm font-bold text-slate-700" htmlFor="b">b = {b}</label>
        <input id="b" className="mt-3 w-full accent-pink-600" type="range" min="2" max="5" value={b} onChange={(event) => setB(Number(event.target.value))} />
        <dl className="mt-5 grid gap-3 text-sm">
          <Metric label="a²" value={(a * a).toString()} color="text-blue-700" />
          <Metric label="2ab" value={(2 * a * b).toString()} color="text-amber-700" />
          <Metric label="b²" value={(b * b).toString()} color="text-rose-700" />
          <Metric label="Total" value={((a + b) * (a + b)).toString()} color="text-violet-700" />
        </dl>
      </div>
    </div>
  );
}

function AlgebraMinusSquare() {
  const [a, setA] = useState(7);
  const [b, setB] = useState(3);
  const scale = 30;
  const aSize = a * scale;
  const bSize = b * scale;
  const remaining = a - b;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_16rem]">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <svg viewBox="0 0 430 330" role="img" aria-label="Area model for a minus b squared" className="h-full min-h-80 w-full">
          <rect width="430" height="330" rx="16" fill="#f8fafc" />
          <g transform={`translate(${(430 - aSize) / 2} 46)`}>
            <rect width={aSize} height={aSize} fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
            <rect x={aSize - bSize} y="0" width={bSize} height={aSize} fill="#fecdd3" stroke="#e11d48" strokeWidth="3" opacity="0.86" />
            <rect x="0" y={aSize - bSize} width={aSize} height={bSize} fill="#fde68a" stroke="#d97706" strokeWidth="3" opacity="0.86" />
            <rect x={aSize - bSize} y={aSize - bSize} width={bSize} height={bSize} fill="#ccfbf1" stroke="#0f766e" strokeWidth="3" />
            <rect width={(a - b) * scale} height={(a - b) * scale} fill="none" stroke="#14213d" strokeWidth="5" />
            <text x="16" y="28" fill="#1d4ed8" fontSize="16" fontWeight="900">a²</text>
            <text x={aSize - bSize + 10} y="32" fill="#be123c" fontSize="16" fontWeight="900">-ab</text>
            <text x="14" y={aSize - bSize + 30} fill="#b45309" fontSize="16" fontWeight="900">-ab</text>
            <text x={aSize - bSize + 8} y={aSize - bSize + bSize / 2} fill="#0f766e" fontSize="16" fontWeight="900">+b²</text>
          </g>
          <text x="80" y="306" fill="#14213d" fontSize="16" fontWeight="900">(a - b)² = a² - 2ab + b²</text>
        </svg>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <label className="block text-sm font-bold text-slate-700" htmlFor="minus-a">a = {a}</label>
        <input id="minus-a" className="mt-3 w-full accent-blue-600" type="range" min="5" max="8" value={a} onChange={(event) => setA(Math.max(Number(event.target.value), b + 2))} />
        <label className="mt-5 block text-sm font-bold text-slate-700" htmlFor="minus-b">b = {b}</label>
        <input id="minus-b" className="mt-3 w-full accent-rose-600" type="range" min="1" max="4" value={b} onChange={(event) => setB(Math.min(Number(event.target.value), a - 2))} />
        <dl className="mt-5 grid gap-3 text-sm">
          <Metric label="a - b" value={remaining.toString()} color="text-slate-700" />
          <Metric label="Area" value={(remaining * remaining).toString()} color="text-rose-700" />
        </dl>
      </div>
    </div>
  );
}

function DifferenceSquares() {
  const [a, setA] = useState(7);
  const [b, setB] = useState(3);
  const scale = 30;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_16rem]">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <svg viewBox="0 0 500 310" role="img" aria-label="Difference of squares as removed square" className="h-full min-h-72 w-full">
          <rect width="500" height="310" rx="16" fill="#f8fafc" />
          <g transform="translate(54 54)">
            <rect width={a * scale} height={a * scale} fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
            <rect x={a * scale - b * scale} y={a * scale - b * scale} width={b * scale} height={b * scale} fill="#fecdd3" stroke="#e11d48" strokeWidth="4" />
            <text x="18" y="32" fill="#1d4ed8" fontSize="17" fontWeight="900">a²</text>
            <text x={a * scale - b * scale + 12} y={a * scale - b * scale + 42} fill="#be123c" fontSize="17" fontWeight="900">b²</text>
          </g>
          <g transform="translate(318 82)">
            <rect width={(a + b) * 13} height={(a - b) * 28} fill="#ccfbf1" stroke="#0f766e" strokeWidth="4" />
            <text x="16" y="34" fill="#0f766e" fontSize="16" fontWeight="900">rearranged</text>
            <text x="16" y="64" fill="#0f766e" fontSize="15" fontWeight="900">(a+b)(a-b)</text>
          </g>
          <text x="118" y="286" fill="#14213d" fontSize="16" fontWeight="900">a² - b² = (a + b)(a - b)</text>
        </svg>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <label className="block text-sm font-bold text-slate-700" htmlFor="diff-a">a = {a}</label>
        <input id="diff-a" className="mt-3 w-full accent-blue-600" type="range" min="5" max="8" value={a} onChange={(event) => setA(Math.max(Number(event.target.value), b + 2))} />
        <label className="mt-5 block text-sm font-bold text-slate-700" htmlFor="diff-b">b = {b}</label>
        <input id="diff-b" className="mt-3 w-full accent-rose-600" type="range" min="1" max="4" value={b} onChange={(event) => setB(Math.min(Number(event.target.value), a - 2))} />
        <dl className="mt-5 grid gap-3 text-sm">
          <Metric label="a² - b²" value={(a * a - b * b).toString()} color="text-blue-700" />
          <Metric label="(a+b)(a-b)" value={((a + b) * (a - b)).toString()} color="text-teal-700" />
        </dl>
      </div>
    </div>
  );
}

function WordProblemChooser() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <svg viewBox="0 0 520 300" role="img" aria-label="Word problem model chooser" className="h-full min-h-72 w-full">
        <rect width="520" height="300" rx="16" fill="#f8fafc" />
        <text x="24" y="32" fill="#14213d" fontSize="16" fontWeight="900">Read the clue, then choose the model.</text>
        <g transform="translate(40 78)">
          <rect width="125" height="96" fill="#fef3c7" stroke="#e11d48" strokeWidth="5" strokeDasharray="8 6" />
          <text x="20" y="132" fill="#be123c" fontSize="15" fontWeight="900">fence → perimeter</text>
        </g>
        <g transform="translate(200 78)">
          {Array.from({ length: 3 }).map((_, row) =>
            Array.from({ length: 4 }).map((__, col) => (
              <rect key={`${row}-${col}`} x={col * 28} y={row * 28} width="28" height="28" fill={(row + col) % 2 ? "#ccfbf1" : "#dbeafe"} stroke="#334155" />
            ))
          )}
          <text x="-2" y="132" fill="#1d4ed8" fontSize="15" fontWeight="900">tiles → area</text>
        </g>
        <g transform="translate(360 88)">
          <rect width="54" height="44" rx="7" fill="#ccfbf1" stroke="#0f766e" strokeWidth="4" />
          <text x="20" y="29" fill="#0f766e" fontSize="18" fontWeight="900">x</text>
          <text x="70" y="30" fill="#14213d" fontSize="22" fontWeight="900">+ 3 = 9</text>
          <text x="-4" y="122" fill="#0f766e" fontSize="15" fontWeight="900">unknown → equation</text>
        </g>
      </svg>
    </div>
  );
}

function Metric({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
      <dt className="font-semibold text-slate-600">{label}</dt>
      <dd className={`formula font-black ${color}`}>{value}</dd>
    </div>
  );
}
