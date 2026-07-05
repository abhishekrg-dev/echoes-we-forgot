import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { InteractiveBlobBackground } from "../components/InteractiveBlobBackground";
import { LetterReveal } from "../components/animations/LetterReveal";
import { ScrollRevealHeading } from "../components/animations/ScrollRevealHeading";
import { AnimatedButton } from "../components/animations/AnimatedButton";
import { useTheme } from "../context/ThemeContext";

interface LandingPageProps {
  onEnterSound: () => void;
  onEnterArt: () => void;
}

export function LandingPage({ onEnterSound, onEnterArt }: LandingPageProps) {
  const { theme } = useTheme();

  return (
    <div
      className="theme-transition flex w-full min-h-screen flex-col overflow-clip"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      {/* Fixed Blob Background Layer — mouse-reactive on landing only */}
      <InteractiveBlobBackground theme={theme} />

      {/* Top Navigation */}
      <nav
        className="theme-transition relative z-10 flex h-[76px] shrink-0 items-center border-b px-6 md:px-[100px]"
        style={{ borderColor: theme.navBorder }}
      >
        <div className="flex shrink-0 items-baseline gap-2.5">
          <div
            className="font-['Inter'] text-[15px] font-bold tracking-[2.7px]"
            style={{ color: theme.text }}
          >
            ECHOES WE FORGOT
          </div>
          <div
            className="hidden sm:block font-['Inter'] text-[11px] tracking-[3.08px]"
            style={{ color: theme.textMuted }}
          >
            A SOUND MUSEUM
          </div>
        </div>
        <div className="flex flex-1" />
        <ThemeSwitcher />
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-[640px] flex-col gap-7 px-6 md:px-[100px] pt-[100px] md:pt-[140px] pb-[120px] md:pb-[160px]">
        <div className="flex items-center gap-3">
          <div
            className="font-['Inter'] text-xs font-medium tracking-[3.6px]"
            style={{ color: theme.accent }}
          >
            001 / 005
          </div>
          <div className="h-px w-16" style={{ backgroundColor: `${theme.accent}80` }} />
        </div>

        <LetterReveal
          text="ECHOES WE FORGOT"
          as="h1"
          wordMode
          delayMs={40}
          className="max-w-[1100px] font-['Inter'] text-[38px] sm:text-[56px] md:text-[80px] lg:text-[132px] font-bold leading-[0.95] md:leading-[0.92] tracking-[-0.04em] lg:tracking-[-5.28px]"
        />

        <p
          className="max-w-[620px] font-['Inter'] text-base md:text-[19px] leading-[1.6]"
          style={{ color: theme.textBody }}
        >
          Every sound has a shelf life. Somewhere between memory and silence, there is a room
          where the forgotten still hum. We built it, so the world could listen once more before it
          lets go.
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-4">
          <AnimatedButton
            variant="primary"
            primaryBg={theme.btnPrimaryBg}
            primaryText={theme.btnPrimaryText}
            onClick={onEnterSound}
          >
            ENTER THE SOUND MUSEUM →
          </AnimatedButton>
          <AnimatedButton
            variant="secondary"
            textColor={theme.text}
            secondaryBorder={theme.btnSecondaryBorder}
            onClick={onEnterArt}
          >
            ENTER THE ART MUSEUM ↗
          </AnimatedButton>
        </div>
      </section>

      {/* Idea Section */}
      <section
        className="theme-transition relative z-10 flex min-h-[420px] flex-col gap-7 border-t px-6 md:px-[100px] py-[80px] md:py-[120px]"
        style={{ borderColor: theme.border }}
      >
        <div className="flex items-center gap-3">
          <div
            className="font-['Inter'] text-xs font-medium tracking-[3.6px]"
            style={{ color: theme.accent }}
          >
            002 / 005
          </div>
          <div className="h-px w-16" style={{ backgroundColor: `${theme.accent}80` }} />
        </div>
        <ScrollRevealHeading
          text="A HOME FOR THINGS THAT DISAPPEAR QUIETLY"
          className="max-w-[900px] font-['Inter'] text-4xl md:text-7xl font-bold leading-[1.02] tracking-[-2.16px]"
        />
        <p
          className="max-w-[600px] font-['Inter'] text-base md:text-lg leading-[1.65]"
          style={{ color: theme.textBody }}
        >
          No one photographs a dial tone. No one frames a school bell. They just fade — one
          generation forgets, and the sound is gone forever. This is where we keep them a little
          longer.
        </p>
      </section>

      {/* Cards Section */}
      <section
        className="theme-transition relative z-10 flex flex-col gap-12 border-t px-6 md:px-[100px] py-[80px] md:py-[120px]"
        style={{ borderColor: theme.border }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div
              className="font-['Inter'] text-xs font-medium tracking-[3.6px]"
              style={{ color: theme.accent }}
            >
              003 / 005
            </div>
            <div className="h-px w-16" style={{ backgroundColor: `${theme.accent}80` }} />
          </div>
          <ScrollRevealHeading
            text="EXPLORE WHAT'S INSIDE"
            className="max-w-[760px] font-['Inter'] text-[40px] md:text-[56px] font-bold leading-[1.02] tracking-[-1.68px]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              index: "01",
              title: "Listen",
              desc: "Sounds most of the world has already stopped hearing.",
            },
            {
              index: "02",
              title: "Remember",
              desc: "Every echo carries a memory — where it lived, why it left.",
            },
            {
              index: "03",
              title: "Guess",
              desc: "A quiet test of how much of the past still lives in you.",
            },
          ].map((card) => (
            <div
              key={card.index}
              className="theme-transition flex min-h-[300px] flex-col gap-5 border p-10 flex-1"
              style={{ backgroundColor: theme.cardBg, borderColor: `${theme.text}1f` }}
            >
              <div
                className="font-['Inter'] text-[13px] font-medium tracking-[3.64px]"
                style={{ color: theme.accentMuted }}
              >
                {card.index}
              </div>
              <div
                className="mt-auto font-['Inter'] text-[38px] font-bold tracking-[-0.76px]"
                style={{ color: theme.text }}
              >
                {card.title}
              </div>
              <div
                className="font-['Inter'] text-base leading-[1.6]"
                style={{ color: theme.textBody }}
              >
                {card.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Archive Section */}
      <section
        className="theme-transition relative z-10 flex min-h-[420px] flex-col gap-7 border-t px-6 md:px-[100px] py-[80px] md:py-[120px]"
        style={{ borderColor: theme.border }}
      >
        <div className="flex items-center gap-3">
          <div
            className="font-['Inter'] text-xs font-medium tracking-[3.6px]"
            style={{ color: theme.accent }}
          >
            004 / 005
          </div>
          <div className="h-px w-16" style={{ backgroundColor: `${theme.accent}80` }} />
        </div>
        <ScrollRevealHeading
          text="EIGHT SOUNDS. ONE WORLD GROWING QUIET."
          className="max-w-[900px] font-['Inter'] text-4xl md:text-7xl font-bold leading-[1.02] tracking-[-2.16px]"
        />
        <p
          className="max-w-[600px] font-['Inter'] text-base md:text-lg leading-[1.65]"
          style={{ color: theme.textBody }}
        >
          From railway platforms to modem screeches — small, ordinary noises, disappearing without
          ceremony.
        </p>
      </section>

      {/* Closing Section */}
      <section
        className="theme-transition relative z-10 flex min-h-[460px] flex-col items-center gap-7 border-t text-center px-6 md:px-[100px] py-[100px] md:py-[160px]"
        style={{ borderColor: theme.border }}
      >
        <div className="flex items-center gap-3">
          <div
            className="font-['Inter'] text-xs font-medium tracking-[3.6px]"
            style={{ color: theme.accent }}
          >
            005 / 005
          </div>
        </div>
        <ScrollRevealHeading
          text="SOME SOUNDS NOW LIVE ONLY IN MEMORY."
          className="max-w-[900px] font-['Inter'] text-[40px] md:text-[76px] font-bold leading-none tracking-[-2.28px]"
        />
        <p
          className="max-w-[460px] font-['Inter'] text-base md:text-lg leading-[1.6]"
          style={{ color: theme.textBody }}
        >
          Step inside, before the last of them fades.
        </p>
        <AnimatedButton
          variant="primary"
          primaryBg={theme.btnPrimaryBg}
          primaryText={theme.btnPrimaryText}
          className="mt-3 h-[58px] px-[34px]"
          onClick={onEnterSound}
        >
          BEGIN THE ARCHIVE →
        </AnimatedButton>
      </section>

      {/* Footer */}
      <footer
        className="theme-transition relative z-10 flex min-h-[110px] shrink-0 flex-col md:flex-row items-center border-t px-6 md:px-[100px] py-6 md:py-0 gap-4"
        style={{ borderColor: theme.border }}
      >
        <div
          className="font-['Inter'] text-[13px] font-bold tracking-[2.34px]"
          style={{ color: theme.text }}
        >
          ECHOES WE FORGOT
        </div>
        <div className="flex flex-1 flex-wrap justify-end items-center gap-4 md:gap-8">
          <div
            className="font-['Inter'] text-xs tracking-[1.68px]"
            style={{ color: theme.textMuted }}
          >
            A DIGITAL MUSEUM OF DISAPPEARING SOUND
          </div>
          <div
            className="font-['Inter'] text-xs tracking-[1.68px]"
            style={{ color: theme.textMuted }}
          >
            © 2026 BY ABHISHEK
          </div>
        </div>
      </footer>
    </div>
  );
}
