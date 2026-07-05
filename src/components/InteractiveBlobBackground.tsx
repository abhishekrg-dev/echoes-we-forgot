import { useEffect, useRef } from "react";
import type { ThemeColors } from "../types/themes";
import { getBlobConfigs } from "./BlobBackground";

interface InteractiveBlobBackgroundProps {
  theme: ThemeColors;
}

export function InteractiveBlobBackground({ theme }: InteractiveBlobBackgroundProps) {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const smooth = useRef({ x: -9999, y: -9999 });
  const blobs = getBlobConfigs(theme);

  useEffect(() => {
    const LERP = 0.065;
    const INFLUENCE_RADIUS = 480;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    let frame = 0;
    const tick = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * LERP;
      smooth.current.y += (mouse.current.y - smooth.current.y) * LERP;

      blobRefs.current.forEach((el, index) => {
        if (!el) return;

        const blob = blobs[index];
        const baseLeft =
          typeof blob.left === "number"
            ? blob.left
            : window.innerWidth - (blob.right ?? 0) - blob.width;
        const cx = baseLeft + blob.width / 2;
        const cy = blob.top + blob.height / 2;
        const dx = smooth.current.x - cx;
        const dy = smooth.current.y - cy;
        const dist = Math.hypot(dx, dy);
        const influence = Math.max(0, 1 - dist / INFLUENCE_RADIUS);
        const eased = influence * influence * (3 - 2 * influence);

        const pullX = dx * eased * 0.07;
        const pullY = dy * eased * 0.07;
        const angle = Math.atan2(dy, dx);
        const stretchX = 1 + eased * 0.14 * Math.abs(Math.cos(angle));
        const stretchY = 1 + eased * 0.2 * Math.abs(Math.sin(angle));
        const brightness = 1 + eased * 0.18;
        const glow = eased * 58;

        el.style.transform = `translate3d(${pullX}px, ${pullY}px, 0) scale(${stretchX}, ${stretchY})`;
        el.style.opacity = `${0.88 + eased * 0.12}`;

        const baseBlur = Number(el.dataset.blur ?? 110);
        el.style.filter = `blur(${baseBlur}px) brightness(${brightness}) drop-shadow(0 0 ${glow}px ${blob.color})`;
      });

      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [theme]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-clip">
      {blobs.map((blob, i) => (
        <div
          key={i}
          ref={(el) => {
            blobRefs.current[i] = el;
          }}
          data-blur={blob.blur}
          className="absolute rounded-full will-change-[transform,opacity,filter]"
          style={{
            backgroundColor: blob.color,
            left: blob.left,
            right: blob.right,
            top: blob.top,
            width: blob.width,
            height: blob.height,
            filter: `blur(${blob.blur}px)`,
          }}
        />
      ))}
    </div>
  );
}
