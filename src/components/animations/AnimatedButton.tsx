import { useState, type ReactNode, ButtonHTMLAttributes } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  primaryBg?: string;
  primaryText?: string;
  secondaryBorder?: string;
  textColor?: string;
}

export function AnimatedButton({
  children,
  variant = "primary",
  className = "",
  primaryBg = "#1c1a17",
  primaryText = "#faf6ee",
  secondaryBorder = "#1c1a174d",
  textColor = "#1c1a17",
  ...props
}: AnimatedButtonProps) {
  const [hovered, setHovered] = useState(false);

  const base =
    "museum-btn flex h-14 shrink-0 items-center px-[30px] gap-3 cursor-pointer border font-['Inter'] text-[13px] font-semibold tracking-[2.08px] transition-all duration-200";

  const styles =
    variant === "primary"
      ? {
          backgroundColor: hovered ? primaryText : primaryBg,
          color: hovered ? primaryBg : primaryText,
          borderColor: hovered ? primaryBg : primaryBg,
        }
      : variant === "secondary"
        ? {
            backgroundColor: hovered ? textColor : "transparent",
            color: hovered ? primaryText : textColor,
            borderColor: hovered ? textColor : secondaryBorder,
          }
        : {
            backgroundColor: hovered ? textColor : "transparent",
            color: hovered ? primaryText : textColor,
            borderColor: "transparent",
          };

  return (
    <button
      type="button"
      className={`${base} ${className}`}
      style={styles}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <span className="transition-[letter-spacing] duration-200">{children}</span>
    </button>
  );
}
