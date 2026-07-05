import { useEffect, useRef, useState } from "react";

interface ScrollRevealHeadingProps {
  text: string;
  className?: string;
  wordDelayMs?: number;
  as?: "h2" | "h3" | "div";
}

export function ScrollRevealHeading({
  text,
  className = "",
  wordDelayMs = 60,
  as: Tag = "h2",
}: ScrollRevealHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <Tag className={className} aria-label={text}>
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={visible ? "animate-word-rise inline-block mr-[0.28em]" : "inline-block mr-[0.28em] opacity-0"}
            style={visible ? { animationDelay: `${i * wordDelayMs}ms` } : undefined}
            aria-hidden="true"
          >
            {word}
          </span>
        ))}
      </Tag>
    </div>
  );
}
