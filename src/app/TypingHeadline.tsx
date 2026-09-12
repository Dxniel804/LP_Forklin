"use client";

import { useEffect, useState } from "react";


// Pares de frase (linha 1 / linha 2) que o efeito de digitação alterna.
// A primeira é a pedida; as demais eu criei seguindo o mesmo tom.
const PHRASES: { l1: string; l2: string }[] = [
  { l1: "Conecte. Cresça. Simule.", l2: "Inspire. Inovação. Destino." },
  { l1: "Simplifique. Automatize.", l2: "Gestão. Clareza. Resultado." },
  { l1: "Uma plataforma. Muitas soluções.", l2: "Comece pequeno. Cresça sem limites." },
];

const TYPE_MS = 45;
const DELETE_MS = 20;
const HOLD_MS = 1800;
const BETWEEN_LINES_MS = 250;
const BETWEEN_PHRASES_MS = 350;

function splitColor(line: string) {
  const idx = line.indexOf(" ");
  if (idx === -1) return { first: line, rest: "" };
  return { first: line.slice(0, idx + 1), rest: line.slice(idx + 1) };
}

function ColoredLine({ line, typed }: { line: string; typed: number }) {
  const { first, rest } = splitColor(line);
  const typedFirst = first.slice(0, Math.min(typed, first.length));
  const typedRest = typed > first.length ? rest.slice(0, typed - first.length) : "";
  return (
    <>
      <span className="text-[var(--brand)]">{typedFirst}</span>
      <span className="text-[var(--ink)]">{typedRest}</span>
    </>
  );
}

type Phase = "l1" | "l2" | "hold" | "del2" | "del1";

export default function TypingHeadline() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [l1Typed, setL1Typed] = useState(0);
  const [l2Typed, setL2Typed] = useState(0);
  const [phase, setPhase] = useState<Phase>("l1");

  useEffect(() => {
    const phrase = PHRASES[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "l1") {
      if (l1Typed < phrase.l1.length) {
        timeout = setTimeout(() => setL1Typed((n) => n + 1), TYPE_MS);
      } else {
        timeout = setTimeout(() => setPhase("l2"), BETWEEN_LINES_MS);
      }
    } else if (phase === "l2") {
      if (l2Typed < phrase.l2.length) {
        timeout = setTimeout(() => setL2Typed((n) => n + 1), TYPE_MS);
      } else {
        timeout = setTimeout(() => setPhase("hold"), HOLD_MS);
      }
    } else if (phase === "hold") {
      timeout = setTimeout(() => setPhase("del2"), 0);
    } else if (phase === "del2") {
      if (l2Typed > 0) {
        timeout = setTimeout(() => setL2Typed((n) => n - 1), DELETE_MS);
      } else {
        timeout = setTimeout(() => setPhase("del1"), 150);
      }
    } else {
      if (l1Typed > 0) {
        timeout = setTimeout(() => setL1Typed((n) => n - 1), DELETE_MS);
      } else {
        timeout = setTimeout(() => {
          setPhraseIdx((n) => (n + 1) % PHRASES.length);
          setPhase("l1");
        }, BETWEEN_PHRASES_MS);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, l1Typed, l2Typed, phraseIdx]);

  const phrase = PHRASES[phraseIdx];
  const typingLine1 = phase === "l1";
  const typingLine2 = phase === "l2";

  return (
    <h1
      className="mt-6 min-h-[2.3em] text-5xl leading-[1.05] font-bold tracking-tight sm:text-7xl"
      style={{ fontFamily: "var(--font-display), sans-serif" }}
    >
      <span className="block">
        <ColoredLine line={phrase.l1} typed={l1Typed} />
        {typingLine1 && <span className="animate-pulse text-[var(--brand)]">|</span>}
      </span>
      <span className="block">
        <ColoredLine line={phrase.l2} typed={l2Typed} />
        {typingLine2 && <span className="animate-pulse text-[var(--brand)]">|</span>}
      </span>
    </h1>
  );
}
