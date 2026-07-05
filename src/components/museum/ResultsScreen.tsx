import { useRef } from "react";

import html2canvas from "html2canvas";

import { GlitchText } from "../animations/GlitchText";

import { MuseumShell, museumTheme } from "./MuseumShell";



interface ResultsScreenProps {

  correctCount: number;

  totalQuestions: number;

  museumTitle: string;

  itemLabel: string;

  onTryAgain: () => void;

  onHome: () => void;

  unlocked: boolean;

}



export function ResultsScreen({

  correctCount,

  totalQuestions,

  museumTitle,

  itemLabel,

  onTryAgain,

  onHome,

  unlocked,

}: ResultsScreenProps) {

  const cardRef = useRef<HTMLDivElement>(null);

  const stars = Math.round((correctCount / totalQuestions) * 10);

  const t = museumTheme;

  const isSoundMuseum = museumTitle === "THE SOUND MUSEUM";
  const shellVariant = museumTitle === "THE ART MUSEUM" ? "ambient" : "default";



  const handleShare = async () => {

    const text = `I recovered ${correctCount} of ${totalQuestions} ${itemLabel} at Echoes We Forgot — ${stars}/10 stars!`;

    const url = window.location.href;



    if (navigator.share) {

      try {

        await navigator.share({ title: "Echoes We Forgot", text, url });

        return;

      } catch {

        /* fall through */

      }

    }



    await navigator.clipboard.writeText(`${text}\n${url}`);

    alert("Results copied to clipboard!");

  };



  const handleDownload = async () => {

    if (!cardRef.current) return;



    const canvas = await html2canvas(cardRef.current, {

      backgroundColor: isSoundMuseum ? "#f6e9d6" : t.bg,

      scale: 2,

    });



    const link = document.createElement("a");

    link.download = "echoes-we-forgot-results.png";

    link.href = canvas.toDataURL("image/png");

    link.click();

  };



  if (isSoundMuseum && !unlocked) {
    return (
      <MuseumShell variant="sound" result>
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
          <GlitchText
            text={museumTitle}
            className="mb-12 font-['Inter'] text-[15px] font-bold leading-normal tracking-[4.2px] text-[#1a1a1a]"
          />
          <p className="mb-8 max-w-lg font-['Inter'] text-lg leading-[1.7] tracking-[0.51px] text-[#4a4038] md:text-xl">
            Some echoes are harder to catch. Explore the museum again to remember more.
          </p>
          <p className="mb-8 font-['Inter'] text-[13px] leading-normal tracking-[2.86px] text-[#6a5f52]">
            YOU RECOVERED {correctCount} OF {totalQuestions} FORGOTTEN {itemLabel.toUpperCase()}.
          </p>
          <button
            type="button"
            onClick={onTryAgain}
            className="museum-btn cursor-pointer border-[3px] border-[#1a1a1a] bg-[#1a1a1a] px-[26px] py-4 font-['Inter'] text-sm font-bold leading-normal tracking-[1.96px] text-[#fdf7ee] shadow-[5px_5px_0px_rgb(232,165,58)] hover:opacity-90"
          >
            TRY AGAIN
          </button>
        </div>
      </MuseumShell>
    );
  }

  if (!unlocked) {

    return (

      <MuseumShell variant={shellVariant}>

        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center py-16">

          <GlitchText

            text={museumTitle}

            className="font-['Press_Start_2P'] text-xs mb-12"

            style={{ color: t.text }}

          />

          <p

            className="font-['Inter'] text-lg md:text-xl max-w-lg leading-relaxed mb-8"

            style={{ color: t.textBody }}

          >

            Some echoes are harder to catch. Explore the museum again to remember more.

          </p>

          <p

            className="font-['Press_Start_2P'] text-[10px] mb-8"

            style={{ color: t.textMuted }}

          >

            {correctCount} / {totalQuestions} RECOVERED

          </p>

          <button

            type="button"

            onClick={onTryAgain}

            className="museum-btn px-8 py-4 border cursor-pointer font-['Press_Start_2P'] text-[10px] hover:opacity-90"

            style={{

              borderColor: t.text,

              backgroundColor: t.btnPrimaryBg,

              color: t.btnPrimaryText,

            }}

          >

            TRY AGAIN

          </button>

        </div>

      </MuseumShell>

    );

  }



  if (isSoundMuseum) {
    return (
      <MuseumShell variant="sound" result>
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-[72px]">
          <div
            ref={cardRef}
            className="flex w-full max-w-[760px] flex-col items-center gap-[26px] text-center"
          >
            <div className="flex items-center gap-2 border-[3px] border-[#1a1a1a] bg-[#1a1a1a] px-4 py-2 shadow-[4px_4px_0px_rgb(232,165,58)]">
              <span className="text-[15px] leading-none text-[#ffd98a]">★</span>
              <div className="font-['Inter'] text-xs font-bold leading-normal tracking-[3.6px] text-[#fdf7ee]">
                ARCHIVE COMPLETE
              </div>
            </div>

            <GlitchText
              text="YOUR ARCHIVE IS COMPLETE."
              className="text-shadow-[rgb(255,_217,_138)_4px_4px_0px] font-['Inter'] text-[40px] font-bold leading-[1.05] tracking-[1.12px] text-[#1a1a1a] md:text-[56px]"
            />

            <p className="max-w-[560px] font-['Inter'] text-[17px] leading-[1.7] tracking-[0.51px] text-[#4a4038]">
              Some sounds fade because the world moves on. You just chose to remember a little longer.
            </p>

            <div className="mt-1 flex items-center gap-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={i}
                  className="font-['Inter'] text-[30px] leading-none"
                  style={{ color: i < stars ? "#e8a53a" : "#d6c6ac" }}
                >
                  ★
                </span>
              ))}
            </div>

            <div className="font-['Inter'] text-[13px] leading-normal tracking-[2.86px] text-[#6a5f52]">
              YOU RECOVERED {correctCount} OF {totalQuestions} FORGOTTEN {itemLabel.toUpperCase()}.
            </div>

            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-[18px]">
              <button
                type="button"
                onClick={handleShare}
                className="museum-btn flex cursor-pointer items-center gap-2.5 border-[3px] border-[#1a1a1a] bg-[#1a1a1a] px-[26px] py-4 font-['Inter'] text-sm font-bold leading-normal tracking-[1.96px] text-[#fdf7ee] shadow-[5px_5px_0px_rgb(232,165,58)] hover:opacity-90"
              >
                SHARE YOUR RESULTS
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="museum-btn flex cursor-pointer items-center gap-2.5 border-[3px] border-[#1a1a1a] bg-[#fdf7ee] px-[26px] py-4 font-['Inter'] text-sm font-bold leading-normal tracking-[1.96px] text-[#1a1a1a] shadow-[5px_5px_0px_rgb(26,26,26)]"
              >
                DOWNLOAD YOUR CARD
              </button>
              <button
                type="button"
                onClick={onHome}
                className="museum-btn flex cursor-pointer items-center gap-2.5 border-[3px] border-[#1a1a1a] bg-[#fdf7ee] px-[26px] py-4 font-['Inter'] text-sm font-bold leading-normal tracking-[1.96px] text-[#1a1a1a] shadow-[5px_5px_0px_rgb(26,26,26)]"
              >
                HOME
              </button>
            </div>

            <div className="mt-1.5 font-['Inter'] text-[11px] leading-normal tracking-[3.3px] text-[#8a7d6a]">
              ARCHIVE ID - SM-1998-A
            </div>
          </div>
        </div>
      </MuseumShell>
    );
  }

  return (

    <MuseumShell variant={shellVariant}>

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">

        <div

          ref={cardRef}

          className="border p-8 md:p-12 max-w-lg w-full text-center"

          style={{ borderColor: `${t.text}26`, backgroundColor: t.cardBg }}

        >

          <GlitchText

            text="RESULTS"

            className="font-['Press_Start_2P'] text-sm mb-2"

            style={{ color: t.text }}

          />

          <p

            className="font-['Press_Start_2P'] text-[8px] mb-8"

            style={{ color: t.textMuted }}

          >

            {museumTitle}

          </p>



          <div className="flex justify-center gap-1 mb-6">

            {Array.from({ length: 10 }).map((_, i) => (

              <span

                key={i}

                className="text-xl"

                style={{ color: i < stars ? t.accent : `${t.accent}30` }}

              >

                ★

              </span>

            ))}

          </div>



          <p

            className="font-['Press_Start_2P'] text-xs mb-2"

            style={{ color: t.accent }}

          >

            {stars} / 10 STARS

          </p>

          <p

            className="font-['Inter'] text-base mb-8"

            style={{ color: t.textBody }}

          >

            You recovered {correctCount} of {totalQuestions} forgotten {itemLabel}

          </p>



          <div

            className="font-['Press_Start_2P'] text-[8px]"

            style={{ color: t.textMuted }}

          >

            ECHOES WE FORGOT — 2026

          </div>

        </div>



        <div className="flex flex-wrap gap-4 mt-8 justify-center">

          <button

            type="button"

            onClick={handleShare}

            className="museum-btn px-6 py-3 border cursor-pointer font-['Press_Start_2P'] text-[10px] hover:opacity-90"

            style={{

              borderColor: t.text,

              backgroundColor: t.btnPrimaryBg,

              color: t.btnPrimaryText,

            }}

          >

            SHARE

          </button>

          <button

            type="button"

            onClick={handleDownload}

            className="museum-btn px-6 py-3 border cursor-pointer font-['Press_Start_2P'] text-[10px]"

            style={{

              borderColor: `${t.text}4d`,

              backgroundColor: "transparent",

              color: t.text,

            }}

          >

            DOWNLOAD

          </button>

          <button

            type="button"

            onClick={onHome}

            className="museum-btn px-6 py-3 border cursor-pointer font-['Press_Start_2P'] text-[10px]"

            style={{

              borderColor: `${t.text}26`,

              backgroundColor: "transparent",

              color: t.textMuted,

            }}

          >

            HOME

          </button>

        </div>

      </div>

    </MuseumShell>

  );

}

