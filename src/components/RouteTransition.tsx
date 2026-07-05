import { useCallback, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface RouteTransitionProps {
  children: (navigateWithTransition: (path: string, label: string) => void) => ReactNode;
}

export function RouteTransitionProvider({ children }: RouteTransitionProps) {
  const navigate = useNavigate();
  const [overlay, setOverlay] = useState<{ label: string; active: boolean } | null>(null);

  const navigateWithTransition = useCallback(
    (path: string, label: string) => {
      setOverlay({ label, active: true });

      setTimeout(() => {
        navigate(path);
      }, 900);

      setTimeout(() => {
        setOverlay(null);
      }, 1600);
    },
    [navigate],
  );

  return (
    <>
      {children(navigateWithTransition)}
      {overlay && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
          style={{ backgroundColor: "rgba(14, 26, 36, 0.92)" }}
        >
          <div
            className={`text-center px-8 ${overlay.active ? "animate-route-wipe" : "animate-route-fade-out"}`}
          >
            <p
              className="font-['Press_Start_2P'] text-[#7cfc00] text-sm md:text-base leading-relaxed tracking-wider"
              style={{ textShadow: "0 0 12px rgba(124, 252, 0, 0.5)" }}
            >
              {overlay.label}
            </p>
            <div className="mt-6 mx-auto w-48 h-0.5 bg-[#7cfc00]/30 overflow-hidden">
              <div className="h-full bg-[#7cfc00] animate-[route-wipe_1.2s_ease_forwards]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
