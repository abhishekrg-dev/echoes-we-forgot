import { useRef, useState } from "react";

import { GlitchText } from "../animations/GlitchText";

import { MemoryChargeBar } from "./MemoryChargeBar";

import { MuseumShell, museumTheme } from "./MuseumShell";

import type { MuseumQuestion } from "../../data/soundQuestions";



interface QuestionScreenProps {

  question: MuseumQuestion;

  screenIndex: number;

  totalScreens: number;

  charge: number;

  alreadyCorrect: boolean;

  onAnswer: (index: number) => boolean;

  onNext: () => void;

  onBack: () => void;

  museumTitle: string;

}



export function QuestionScreen({

  question,

  screenIndex,

  totalScreens,

  charge,

  alreadyCorrect,

  onAnswer,

  onNext,

  onBack,

  museumTitle,

}: QuestionScreenProps) {

  const audioRef = useRef<HTMLAudioElement>(null);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(

    alreadyCorrect ? question.correctIndex : null,

  );

  const [revealed, setRevealed] = useState(alreadyCorrect);

  const [shakeIndex, setShakeIndex] = useState<number | null>(null);

  const [playing, setPlaying] = useState(false);

  const [imageLoaded, setImageLoaded] = useState(false);

  const t = museumTheme;

  const isSoundMuseum = museumTitle === "THE SOUND MUSEUM";
  const shellVariant = museumTitle === "THE ART MUSEUM" ? "ambient" : "default";



  const handlePlay = () => {

    if (question.mediaType === "audio" && audioRef.current) {

      audioRef.current.currentTime = 0;

      audioRef.current.play();

      setPlaying(true);

    }

  };



  const handleOptionClick = (index: number) => {

    if (revealed) return;



    const correct = onAnswer(index);

    setSelectedIndex(index);



    if (correct) {

      setRevealed(true);

    } else {

      setShakeIndex(index);

      setTimeout(() => setShakeIndex(null), 500);

    }

  };

  if (isSoundMuseum) {
    return (
      <MuseumShell variant="sound">
        <header className="relative z-10 flex w-full items-start justify-between px-6 pb-0 pt-10 md:px-14">
          <div className="flex items-center gap-3">
            <div className="size-[18px] bg-[#1a1a1a]" />
            <GlitchText
              text={museumTitle}
              className="font-['Inter'] text-[15px] font-bold leading-normal tracking-[4.2px] text-[#1a1a1a]"
              as="div"
            />
          </div>
          <MemoryChargeBar charge={charge} variant="sound" />
        </header>

        <main className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-6 py-7 md:px-14">
          <button
            type="button"
            onClick={handlePlay}
            className="museum-btn flex size-[104px] cursor-pointer items-center justify-center border-4 border-[#1a1a1a] bg-[#fff7ef] shadow-[6px_6px_0px_rgb(26,26,26)]"
            aria-label={playing ? "Playing sound" : "Play sound"}
          >
            <svg
              className="size-11"
              fill="#1a1a1a"
              viewBox="0 0 512 512"
              aria-hidden="true"
            >
              <path d="m96 448 320-192L96 64v384z" />
            </svg>
            <audio
              ref={audioRef}
              src={question.media}
              onEnded={() => setPlaying(false)}
              preload="auto"
            />
          </button>

          <div className="font-['Inter'] text-xs leading-normal tracking-[3.6px] text-[#6a5f57]">
            {playing ? "PLAYING" : "FRAGMENT"} {String(screenIndex + 1).padStart(2, "0")}
          </div>

          <GlitchText
            text={question.heading}
            className="text-shadow-[rgb(203,_184,_255)_3px_3px_0px] font-['Inter'] text-[28px] font-bold leading-normal tracking-[3.8px] text-[#1a1a1a] md:text-[38px]"
          />

          <div className="grid w-full max-w-[660px] grid-cols-1 gap-4 md:grid-cols-2">
            {question.options.map((option, i) => {
              const isSelected = selectedIndex === i;
              const isShaking = shakeIndex === i;
              const isCorrectSelected = revealed && isSelected;
              const letter = String.fromCharCode(65 + i);

              const optionStyle = isCorrectSelected
                ? {
                    backgroundColor: "#bff0c9",
                    borderColor: "#1a6b2f",
                    boxShadow: "4px 4px 0px rgb(26,107,47)",
                    color: "#123f1c",
                  }
                : isShaking
                  ? {
                      backgroundColor: "#ffd1d1",
                      borderColor: "#9b1c1c",
                      boxShadow: "4px 4px 0px rgb(155,28,28)",
                      color: "#4d0f0f",
                    }
                  : {
                      backgroundColor: "#fdf7ee",
                      borderColor: "#1a1a1a",
                      boxShadow: "4px 4px 0px rgb(26,26,26)",
                      color: "#1a1a1a",
                    };

              const badgeStyle = isCorrectSelected
                ? {
                    backgroundColor: "#1a6b2f",
                    borderColor: "#1a6b2f",
                    color: "#eafff0",
                  }
                : isShaking
                  ? {
                      backgroundColor: "#9b1c1c",
                      borderColor: "#9b1c1c",
                      color: "#fff2f2",
                    }
                  : {
                      backgroundColor: "#1a1a1a",
                      borderColor: "#1a1a1a",
                      color: "#fdf7ee",
                    };

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleOptionClick(i)}
                  disabled={revealed}
                  className={`museum-btn flex cursor-pointer items-center gap-3.5 border-[3px] px-5 py-[18px] text-left font-['Inter'] transition-colors ${
                    isShaking ? "animate-shake" : ""
                  }`}
                  style={optionStyle}
                >
                  <span
                    className="flex size-[30px] shrink-0 items-center justify-center border-2 text-[13px] font-bold leading-normal"
                    style={badgeStyle}
                  >
                    {letter}
                  </span>
                  <span className="text-[15px] font-bold leading-normal tracking-[0.75px]">
                    {option.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </div>

          {revealed && (
            <div className="flex w-full max-w-[660px] flex-col border-4 border-[#1a1a1a] bg-[#12100e] shadow-[6px_6px_0px_rgb(26,107,47)] animate-[word-rise_0.5s_ease_forwards]">
              <div className="flex items-center gap-2.5 bg-[#1a6b2f] px-5 py-[11px]">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="#eafff0"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  strokeWidth="44"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path d="M416 128 192 384l-96-96" />
                </svg>
                <div className="font-['Inter'] text-sm font-bold leading-normal tracking-[2.52px] text-[#eafff0]">
                  RECOVERED. YOU REMEMBERED.
                </div>
              </div>
              <div className="flex flex-col gap-3 px-6 py-[22px]">
                <p className="font-['Inter'] text-base leading-[1.7] tracking-[0.48px] text-[#e9dfd2]">
                  {question.story}
                </p>
                <div className="font-['Inter'] text-[11px] leading-normal tracking-[3.08px] text-[#8fbf9c]">
                  ARCHIVED - SOUND {String(screenIndex + 1).padStart(2, "0")}/
                  {String(totalScreens).padStart(2, "0")}
                </div>
              </div>
            </div>
          )}
        </main>

        <footer className="relative z-10 flex w-full items-center justify-between px-6 pb-10 pt-0 md:px-14">
          <button
            type="button"
            onClick={onBack}
            className="museum-btn flex h-14 w-16 cursor-pointer items-center justify-center border-[3px] border-[#1a1a1a] bg-[#fdf7ee] shadow-[4px_4px_0px_rgb(26,26,26)]"
            aria-label="Back"
          >
            <svg className="size-[26px]" fill="none" stroke="#1a1a1a" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="48" viewBox="0 0 512 512" aria-hidden="true">
              <path d="M244 400 100 256l144-144M120 256h292" />
            </svg>
          </button>
          <div className="hidden font-['Inter'] text-[11px] leading-normal tracking-[3.08px] text-[#6a5f57] md:block">
            TAP AN ANSWER OR SKIP AHEAD
          </div>
          <button
            type="button"
            onClick={onNext}
            className="museum-btn flex h-14 w-16 cursor-pointer items-center justify-center border-[3px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[4px_4px_0px_rgb(26,26,26)]"
            aria-label="Next"
          >
            <svg className="size-[26px]" fill="none" stroke="#fdf7ee" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="48" viewBox="0 0 512 512" aria-hidden="true">
              <path d="m268 112 144 144-144 144m124-144H100" />
            </svg>
          </button>
        </footer>
      </MuseumShell>
    );
  }



  return (

    <MuseumShell variant={shellVariant}>

      <header

        className="flex items-center justify-between px-6 md:px-12 py-6 border-b"

        style={{ borderColor: t.border }}

      >

        <GlitchText

          text={museumTitle}

          className="font-['Press_Start_2P'] text-[10px] md:text-xs"

          style={{ color: t.text }}

        />

        <span

          className="font-['Press_Start_2P'] text-[8px] md:text-[10px]"

          style={{ color: t.textMuted }}

        >

          {String(screenIndex + 1).padStart(2, "0")} / {String(totalScreens).padStart(2, "0")}

        </span>

      </header>



      <main className="flex-1 flex flex-col px-6 md:px-12 py-8 md:py-12 max-w-3xl mx-auto w-full gap-8">

        <MemoryChargeBar charge={charge} />



        <div>

          <GlitchText

            text={question.heading}

            className="font-['Press_Start_2P'] text-sm md:text-base mb-4 leading-relaxed"

            style={{ color: t.text }}

          />

          <p

            className="font-['Inter'] text-sm md:text-base leading-relaxed"

            style={{ color: t.textBody }}

          >

            {question.prompt}

          </p>

        </div>



        <div className="flex justify-center">

          {question.mediaType === "audio" ? (

            <button

              type="button"

              onClick={handlePlay}

              className="museum-btn group flex flex-col items-center gap-4 cursor-pointer bg-transparent border-0"

            >

              <div

                className="size-24 md:size-28 flex items-center justify-center border-2 transition-all"

                style={{

                  borderColor: t.text,

                  backgroundColor: playing ? `${t.text}12` : `${t.text}06`,

                }}

              >

                <svg

                  className="size-10 ml-1"

                  fill="currentColor"

                  viewBox="0 0 24 24"

                  style={{ color: t.accent }}

                >

                  <path d="M8 5v14l11-7z" />

                </svg>

              </div>

              <span

                className="font-['Press_Start_2P'] text-[8px] transition-colors group-hover:opacity-100"

                style={{ color: t.textMuted }}

              >

                {playing ? "PLAYING..." : "▶ PLAY SOUND"}

              </span>

              <audio

                ref={audioRef}

                src={question.media}

                onEnded={() => setPlaying(false)}

                preload="auto"

              />

            </button>

          ) : (

            <div

              className="w-full max-w-md border-2 p-2"

              style={{ borderColor: `${t.text}33`, backgroundColor: t.cardBg }}

            >

              <div className="relative h-48 md:h-64 w-full overflow-hidden">

                {!imageLoaded && (

                  <div

                    className="absolute inset-0 animate-pulse"

                    style={{

                      background: `linear-gradient(110deg, ${t.text}08 8%, ${t.text}18 18%, ${t.text}08 33%)`,

                      backgroundSize: "200% 100%",

                    }}

                  />

                )}

                <img

                  src={question.media}

                  alt={question.mediaAlt ?? "Artwork"}

                  className={`h-full w-full object-contain transition-opacity duration-700 ${

                    imageLoaded ? "opacity-100" : "opacity-0"

                  }`}

                  onLoad={() => setImageLoaded(true)}

                />

              </div>

            </div>

          )}

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          {question.options.map((option, i) => {

            const isSelected = selectedIndex === i;

            const isShaking = shakeIndex === i;

            const isCorrectSelected = revealed && isSelected;



            return (

              <button

                key={option}

                type="button"

                onClick={() => handleOptionClick(i)}

                disabled={revealed}

                className={`museum-btn text-left px-4 py-4 border cursor-pointer font-['Inter'] text-xs md:text-sm leading-relaxed transition-colors ${

                  isShaking ? "animate-shake border-[#c94a4a] bg-[#c94a4a18] text-[#a03030]" : ""

                }`}

                style={

                  isCorrectSelected

                    ? {

                        borderColor: t.text,

                        backgroundColor: `${t.accent}18`,

                        color: t.text,

                      }

                    : !isShaking

                      ? {

                          borderColor: `${t.text}1f`,

                          backgroundColor: t.cardBg,

                          color: t.textBody,

                        }

                      : undefined

                }

              >

                <span>{option}</span>

              </button>

            );

          })}

        </div>



        {revealed && (

          <div

            className="border p-6 animate-[word-rise_0.5s_ease_forwards]"

            style={{ borderColor: t.text, backgroundColor: t.cardBg }}

          >

            <p

              className="font-['Press_Start_2P'] text-[10px] md:text-xs mb-4"

              style={{ color: t.accent }}

            >

              RECOVERED. YOU REMEMBERED.

            </p>

            <p

              className="font-['Inter'] text-sm md:text-base leading-relaxed"

              style={{ color: t.textBody }}

            >

              {question.story}

            </p>

          </div>

        )}



        <div className="flex items-center justify-between mt-auto pt-4">

          <button

            type="button"

            onClick={onBack}

            className="museum-btn flex items-center gap-2 bg-transparent border-0 cursor-pointer font-['Press_Start_2P'] text-[10px] hover:opacity-100"

            style={{ color: t.textMuted }}

          >

            <span>◀</span>

            <span>BACK</span>

          </button>

          <button

            type="button"

            onClick={onNext}

            className="museum-btn flex items-center gap-2 bg-transparent border-0 cursor-pointer font-['Press_Start_2P'] text-[10px] hover:opacity-100"

            style={{ color: t.textMuted }}

          >

            <span>NEXT</span>

            <span>▶</span>

          </button>

        </div>

      </main>

    </MuseumShell>

  );

}


