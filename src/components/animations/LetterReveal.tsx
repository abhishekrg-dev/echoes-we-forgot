import { useMemo } from "react";

interface LetterRevealProps {
  text: string;
  className?: string;
  delayMs?: number;
  as?: "h1" | "h2" | "div";
  /** Keep whole words together when wrapping */
  wordMode?: boolean;
}

export function LetterReveal({
  text,
  className = "",
  delayMs = 40,
  as: Tag = "div",
  wordMode = false,
}: LetterRevealProps) {
  const words = useMemo(() => text.split(" "), [text]);
  const letters = useMemo(() => text.split(""), [text]);

  if (wordMode) {
    let letterIndex = 0;

    return (
      <Tag className={className} aria-label={text}>
        {words.map((word, wi) => (
          <span
            key={`${word}-${wi}`}
            className="inline-block whitespace-nowrap"
            style={{ marginRight: wi < words.length - 1 ? "0.22em" : undefined }}
          >
            {word.split("").map((char) => {
              const i = letterIndex++;
              return (
                <span
                  key={`${char}-${i}`}
                  className="animate-letter-rise inline-block"
                  style={{ animationDelay: `${i * delayMs}ms` }}
                  aria-hidden="true"
                >
                  {char}
                </span>
              );
            })}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className} aria-label={text}>
      {letters.map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="animate-letter-rise inline-block"
          style={{
            animationDelay: `${i * delayMs}ms`,
            whiteSpace: char === " " ? "pre" : undefined,
          }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}
