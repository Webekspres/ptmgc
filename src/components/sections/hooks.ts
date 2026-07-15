import { useEffect, useState } from "react";

/**
 * Cycles through a list of phrases with a type → pause → delete rhythm,
 * mimicking a typewriter. Returns the current visible substring.
 */
export function useTypewriter(
  words: readonly string[],
  {
    typingSpeed = 55,
    deletingSpeed = 32,
    pauseTime = 2200,
  }: { typingSpeed?: number; deletingSpeed?: number; pauseTime?: number } = {},
) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (words.length === 0) return;
    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseTime);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 60);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), deletingSpeed);
      } else {
        setPhase("typing");
        setIndex((i) => (i + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, phase, index, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

export function useCounter(target: number, active: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return val;
}
