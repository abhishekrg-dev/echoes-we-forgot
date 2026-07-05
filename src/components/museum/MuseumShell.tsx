import type { ReactNode } from "react";
import { BlobBackground } from "../BlobBackground";
import { themes } from "../../types/themes";

interface MuseumShellProps {
  children: ReactNode;
  variant?: "default" | "sound" | "ambient";
  result?: boolean;
}

function SoundMuseumBlobs({ result = false }: { result?: boolean }) {
  if (result) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-clip">
        <div className="absolute left-[864px] top-[-160px] size-[720px] rounded-full bg-[#ffd98a] blur-[100px]" />
        <div className="absolute left-[-140px] top-[180px] size-[560px] rounded-full bg-[#ffb26b] blur-[95px]" />
        <div className="absolute right-[-120px] bottom-[-150px] size-[520px] rounded-full bg-[#ffb3c6] blur-[100px]" />
        <div className="absolute left-[200px] bottom-10 size-[440px] rounded-full bg-[#cbb8ff] blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,_224,_150,_0.6)_50%,_rgba(0,_0,_0,_0)_58%)]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-clip">
      <div className="absolute left-[-130px] top-[-150px] size-[640px] rounded-full bg-[#ffcba4] blur-[95px]" />
      <div className="absolute right-[-160px] top-[110px] size-[560px] rounded-full bg-[#cbb8ff] blur-[100px]" />
      <div className="absolute left-[240px] bottom-[-170px] size-[520px] rounded-full bg-[#a9e7cf] blur-[110px]" />
      <div className="absolute right-[170px] bottom-[70px] size-[420px] rounded-full bg-[#ffb3c6] blur-[90px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,_255,_255,_0.6)_50%,_rgba(0,_0,_0,_0)_55%)]" />
    </div>
  );
}

export function MuseumShell({ children, variant = "default", result = false }: MuseumShellProps) {
  const theme = themes.light;

  if (variant === "ambient") {
    return (
      <div
        className="relative flex min-h-screen flex-col overflow-clip"
        style={{ backgroundColor: "#f2ebe0", color: theme.text }}
      >
        <SoundMuseumBlobs />
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
      </div>
    );
  }

  if (variant === "sound") {
    return (
      <div
        className="relative flex min-h-screen flex-col overflow-clip font-['Inter']"
        style={{ backgroundColor: result ? "#f6e9d6" : "#f2ebe0", color: "#1a1a1a" }}
      >
        <SoundMuseumBlobs result={result} />
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
      </div>
    );
  }

  return (
    <div
      className="relative flex min-h-screen flex-col overflow-clip"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <BlobBackground theme={theme} />
      <div className="relative z-10 flex flex-1 flex-col">{children}</div>
    </div>
  );
}

export const museumTheme = themes.light;
