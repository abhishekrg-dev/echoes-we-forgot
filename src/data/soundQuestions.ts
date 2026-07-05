export interface MuseumQuestion {
  id: number;
  heading: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  story: string;
  media?: string;
  mediaType?: "audio" | "image";
  mediaAlt?: string;
}

export const soundQuestions: MuseumQuestion[] = [
  {
    id: 1,
    heading: "WHAT IS THIS SOUND?",
    prompt: "Listen carefully. A platform, a whistle, a departure.",
    options: [
      "Steam locomotive at a station",
      "Airplane engine on runway",
      "Subway doors closing",
      "Harbor foghorn at dawn",
    ],
    correctIndex: 0,
    story:
      "For a century, the railway whistle marked every arrival and every goodbye. Platforms emptied, families waved, and the sound carried the weight of distance. Today, electric trains glide in near silence — and the steam whistle survives mostly in memory.",
    media: "/audio/railway.mp3",
    mediaType: "audio",
  },
  {
    id: 2,
    heading: "WHAT IS THIS SOUND?",
    prompt: "A bell rings. Class is over — or just beginning.",
    options: [
      "Church bells on Sunday",
      "School dismissal bell",
      "Alarm clock on a nightstand",
      "Front door chime",
    ],
    correctIndex: 1,
    story:
      "The school bell once governed millions of childhoods — a sharp, metallic signal that freedom had arrived or obligation had returned. Digital tones and phone notifications have replaced it, but the memory of that clang still lives in anyone who ran for the exit.",
    media: "/audio/schoolbell.mp3",
    mediaType: "audio",
  },
  {
    id: 3,
    heading: "WHAT IS THIS SOUND?",
    prompt: "Snow on a screen. No signal. Just noise.",
    options: [
      "Radio tuning between stations",
      "Television static between channels",
      "Broken speaker feedback",
      "Rain hitting a tin roof",
    ],
    correctIndex: 1,
    story:
      "Before streaming, late-night TV ended not with credits but with static — a hiss of white noise when broadcasters signed off. Generations learned to read that snow as the edge of the world. Now screens go black instead.",
    media: "/audio/tvstatic.mp3",
    mediaType: "audio",
  },
  {
    id: 4,
    heading: "WHAT IS THIS SOUND?",
    prompt: "A number dialed. A tone held. Someone waiting.",
    options: [
      "Fax machine transmitting",
      "Rotary dial telephone",
      "Payphone coin dropping",
      "Office intercom buzzer",
    ],
    correctIndex: 1,
    story:
      "The rotary dial demanded patience — each number a measured rotation, each call an event. The dial tone that followed was the sound of a connected world. Touch-tone phones arrived, then smartphones, and the slow mechanical ritual vanished.",
    media: "/audio/telephone.mp3",
    mediaType: "audio",
  },
  {
    id: 5,
    heading: "WHAT IS THIS SOUND?",
    prompt: "Rewind. The tape pulls back through time.",
    options: [
      "Cassette fast-forwarding",
      "VHS tape rewinding",
      "Film projector spinning",
      "CD player skipping",
    ],
    correctIndex: 1,
    story:
      "Rewinding a VHS was a physical act — the whir of spools, the countdown on screen, the promise of watching again. Blockbuster nights and home movies lived inside that plastic shell. Streaming erased the ritual entirely.",
    media: "/audio/vhsrewind.mp3",
    mediaType: "audio",
  },
  {
    id: 6,
    heading: "WHAT IS THIS SOUND?",
    prompt: "Screech. Handshake. The internet is connecting.",
    options: [
      "Dial-up modem connecting",
      "Dot matrix printer",
      "Game console booting up",
      "Shortwave radio tuning",
    ],
    correctIndex: 0,
    story:
      "The dial-up modem was the sound of the early internet — a digital scream followed by a handshake that meant the world was opening. Every email, every chat room, every slow-loading page began with that screech. Broadband made it obsolete overnight.",
    media: "/audio/modem.mp3",
    mediaType: "audio",
  },
  {
    id: 7,
    heading: "WHAT IS THIS SOUND?",
    prompt: "A cartridge slides in. The machine accepts it.",
    options: [
      "Floppy disk drive loading",
      "VCR accepting a tape",
      "ATM dispensing cash",
      "Car trunk latch closing",
    ],
    correctIndex: 1,
    story:
      "Inserting a tape into the VCR was a small ceremony — the mechanical clunk, the lid closing, the screen flickering to life. Home video libraries were built one tape at a time. Now we scroll through thumbnails instead.",
    media: "/audio/vcrinsert.mp3",
    mediaType: "audio",
  },
  {
    id: 8,
    heading: "WHAT IS THIS SOUND?",
    prompt: "A pocket buzzes. Everyone knows this melody.",
    options: [
      "Arcade game over jingle",
      "Classic Nokia ringtone",
      "Elevator arrival chime",
      "Digital camera shutter",
    ],
    correctIndex: 1,
    story:
      "Nokia's ascending ringtone became the soundtrack of a mobile revolution — instantly recognizable on buses, in classrooms, in cinemas. Smartphones brought custom tones and silent mode. That particular melody now belongs to a specific era of being reachable.",
    media: "/audio/nokia.mp3",
    mediaType: "audio",
  },
];
