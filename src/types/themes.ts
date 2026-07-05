export type ThemeId = "light" | "yellow" | "sky" | "dark";

export interface ThemeColors {
  id: ThemeId;
  label: string;
  bg: string;
  text: string;
  textMuted: string;
  textBody: string;
  accent: string;
  accentMuted: string;
  border: string;
  cardBg: string;
  blobTerracotta: string;
  blobBlue: string;
  blobGold: string;
  blobRose: string;
  blobWarm: string;
  blobSage: string;
  btnPrimaryBg: string;
  btnPrimaryText: string;
  btnSecondaryBorder: string;
  navBorder: string;
}

export const themes: Record<ThemeId, ThemeColors> = {
  light: {
    id: "light",
    label: "Light",
    bg: "#faf6ee",
    text: "#1c1a17",
    textMuted: "#8a8072",
    textBody: "#4a4438",
    accent: "#a9752e",
    accentMuted: "#b89a6a",
    border: "#1c1a171a",
    cardBg: "#fbf8f1b3",
    blobTerracotta: "#d98b63",
    blobBlue: "#8aa2b0",
    blobGold: "#d8b46a",
    blobRose: "#c98a86",
    blobWarm: "#e0a878",
    blobSage: "#9caa8a",
    btnPrimaryBg: "#1c1a17",
    btnPrimaryText: "#faf6ee",
    btnSecondaryBorder: "#1c1a174d",
    navBorder: "#1c1a171a",
  },
  yellow: {
    id: "yellow",
    label: "Yellow",
    bg: "#f5e6b8",
    text: "#1c1a17",
    textMuted: "#7a6e52",
    textBody: "#4a4438",
    accent: "#a9752e",
    accentMuted: "#b89a6a",
    border: "#1c1a1726",
    cardBg: "#faf0d4b3",
    blobTerracotta: "#e8a070",
    blobBlue: "#c4b07a",
    blobGold: "#f2c94c",
    blobRose: "#d4a080",
    blobWarm: "#f0c060",
    blobSage: "#b8c080",
    btnPrimaryBg: "#1c1a17",
    btnPrimaryText: "#faf6ee",
    btnSecondaryBorder: "#1c1a174d",
    navBorder: "#1c1a1726",
  },
  sky: {
    id: "sky",
    label: "Sky Blue",
    bg: "#dceef8",
    text: "#1c1a17",
    textMuted: "#6a7a82",
    textBody: "#3a4448",
    accent: "#4a8098",
    accentMuted: "#7a9aaa",
    border: "#1c1a1720",
    cardBg: "#e8f4fab3",
    blobTerracotta: "#a9c4d4",
    blobBlue: "#a9d7ee",
    blobGold: "#b8d4e8",
    blobRose: "#98b8c8",
    blobWarm: "#88b8d8",
    blobSage: "#8ab0c0",
    btnPrimaryBg: "#1c1a17",
    btnPrimaryText: "#faf6ee",
    btnSecondaryBorder: "#1c1a174d",
    navBorder: "#1c1a1720",
  },
  dark: {
    id: "dark",
    label: "Dark",
    bg: "#0e1a24",
    text: "#e8e4dc",
    textMuted: "#8a9aa8",
    textBody: "#b0b8c0",
    accent: "#d8b46a",
    accentMuted: "#a89060",
    border: "#e8e4dc1a",
    cardBg: "#162028b3",
    blobTerracotta: "#3a2830",
    blobBlue: "#1a3040",
    blobGold: "#2a3820",
    blobRose: "#382028",
    blobWarm: "#302818",
    blobSage: "#1a2820",
    btnPrimaryBg: "#e8e4dc",
    btnPrimaryText: "#0e1a24",
    btnSecondaryBorder: "#e8e4dc4d",
    navBorder: "#e8e4dc1a",
  },
};

export const themeDotColors: Record<ThemeId, string> = {
  light: "#faf6ee",
  yellow: "#f2c94c",
  sky: "#a9d7ee",
  dark: "#0e1a24",
};
