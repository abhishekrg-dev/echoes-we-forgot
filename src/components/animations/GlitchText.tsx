import { useEffect, useState, type CSSProperties } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  as?: "h1" | "h2" | "div";
}

export function GlitchText({ text, className = "", style, as: Tag = "h1" }: GlitchTextProps) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 900);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <Tag
      key={text}
      className={`${className} ${animate ? "animate-glitch-entry" : ""}`}
      style={style}
    >
      {text}
    </Tag>
  );
}
