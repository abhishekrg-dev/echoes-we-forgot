interface MemoryChargeBarProps {

  charge: number;

  variant?: "default" | "sound";

}



export function MemoryChargeBar({ charge, variant = "default" }: MemoryChargeBarProps) {

  const pct = Math.min(100, Math.max(0, charge));

  if (variant === "sound") {
    return (
      <div className="flex flex-col items-end gap-[7px]">
        <div className="font-['Inter'] text-[10px] leading-normal tracking-[3px] text-[#5a504a]">
          MEMORY CHARGE
        </div>
        <div className="flex items-center gap-2.5">
          <div className="relative h-[22px] w-[200px] overflow-hidden border-[3px] border-[#1a1a1a] bg-[#fdf7ee]">
            <div
              className="absolute left-0 top-0 h-full bg-[#1a1a1a] transition-all duration-700 ease-out"
              style={{ width: `${pct}%` }}
            />
            <div className="absolute inset-0 flex">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 border-r-2 border-r-[#8a8178]"
                />
              ))}
            </div>
          </div>
          <div className="font-['Inter'] text-[13px] font-bold leading-normal text-[#1a1a1a]">
            {Math.round(pct)}%
          </div>
        </div>
      </div>
    );
  }



  return (

    <div className="w-full">

      <div className="flex items-center justify-between mb-2">

        <span className="font-['Press_Start_2P'] text-[8px] md:text-[10px] text-[#a9752e] tracking-wider">

          MEMORY CHARGE

        </span>

        <span className="font-['Press_Start_2P'] text-[8px] md:text-[10px] text-[#a9752e66]">

          {Math.round(pct)}%

        </span>

      </div>

      <div className="h-3 w-full border border-[#1c1a1726] bg-[#fbf8f180] relative overflow-hidden">

        <div

          className="h-full bg-[#d8b46a] transition-all duration-700 ease-out"

          style={{

            width: `${pct}%`,

            boxShadow: "0 0 10px rgba(216, 180, 106, 0.45)",

          }}

        />

        {Array.from({ length: 8 }).map((_, i) => (

          <div

            key={i}

            className="absolute top-0 bottom-0 w-px bg-[#1c1a1715]"

            style={{ left: `${(i + 1) * 12.5}%` }}

          />

        ))}

      </div>

    </div>

  );

}

