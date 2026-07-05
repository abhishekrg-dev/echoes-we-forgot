import { themeDotColors, type ThemeId } from "../types/themes";
import { useTheme } from "../context/ThemeContext";

const themeOrder: ThemeId[] = ["light", "yellow", "sky", "dark"];

export function ThemeSwitcher() {
  const { themeId, setThemeId, theme } = useTheme();

  return (
    <div className="flex shrink-0 items-center gap-3.5">
      <div
        className="font-['Inter'] text-[10px] leading-normal tracking-[2.8px]"
        style={{ color: theme.textMuted }}
      >
        THEME
      </div>
      <div className="flex items-center gap-2.5">
        {themeOrder.map((id) => {
          const active = themeId === id;
          return (
            <button
              key={id}
              type="button"
              aria-label={`Switch to ${id} theme`}
              aria-pressed={active}
              onClick={() => setThemeId(id)}
              className="size-5 cursor-pointer rounded-full border transition-transform hover:scale-110"
              style={{
                backgroundColor: themeDotColors[id],
                borderColor: active ? theme.text : `${theme.text}26`,
                boxShadow: active
                  ? `0 0 0 2px ${theme.bg}, 0 0 0 3px ${theme.text}`
                  : undefined,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
