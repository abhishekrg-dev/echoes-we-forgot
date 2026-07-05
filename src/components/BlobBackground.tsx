import type { CSSProperties } from "react";
import type { ThemeColors } from "../types/themes";

export interface BlobConfig {
  color: string;
  left?: number;
  right?: number;
  top: number;
  width: number;
  height: number;
  blur: number;
}

export function getBlobConfigs(theme: ThemeColors): BlobConfig[] {
  return [
    {
      color: theme.blobTerracotta,
      left: -160,
      top: -120,
      width: 820,
      height: 720,
      blur: 110,
    },
    {
      color: theme.blobBlue,
      left: -220,
      top: 1200,
      width: 900,
      height: 800,
      blur: 120,
    },
    {
      color: theme.blobGold,
      right: -160,
      top: 1900,
      width: 780,
      height: 720,
      blur: 110,
    },
    {
      color: theme.blobRose,
      left: -180,
      top: 2700,
      width: 860,
      height: 760,
      blur: 120,
    },
    {
      color: theme.blobWarm,
      left: 420,
      top: 760,
      width: 700,
      height: 640,
      blur: 130,
    },
    {
      color: theme.blobSage,
      right: -234,
      top: 123,
      width: 760,
      height: 760,
      blur: 110,
    },
  ];
}

function blobStyle(blob: BlobConfig): CSSProperties {
  return {
    backgroundColor: blob.color,
    left: blob.left,
    right: blob.right,
    top: blob.top,
    width: blob.width,
    height: blob.height,
    filter: `blur(${blob.blur}px)`,
  };
}

interface BlobBackgroundProps {
  theme: ThemeColors;
}

export function BlobBackground({ theme }: BlobBackgroundProps) {
  const blobs = getBlobConfigs(theme);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-clip">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={blobStyle(blob)}
        />
      ))}
    </div>
  );
}
