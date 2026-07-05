import type { MuseumQuestion } from "./soundQuestions";

export const artQuestions: MuseumQuestion[] = [
  {
    id: 1,
    heading: "WHO PAINTED THIS?",
    prompt: "A portrait whose gaze follows you through the room.",
    options: [
      "Leonardo da Vinci",
      "Raphael",
      "Titian",
      "Caravaggio",
    ],
    correctIndex: 0,
    story:
      "Leonardo da Vinci spent years on the Mona Lisa, layering sfumato until her smile became impossible to read. It is the most visited painting on earth — yet most people know it only as an image, divorced from the quiet of the Louvre's Salle des États.",
    media:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mona%20Lisa%2C%20by%20Leonardo%20da%20Vinci%2C%20from%20C2RMF%20retouched.jpg?width=900",
    mediaType: "image",
    mediaAlt: "Mona Lisa by Leonardo da Vinci",
  },
  {
    id: 2,
    heading: "WHO PAINTED THIS?",
    prompt: "Born from sea foam, carried on a shell.",
    options: [
      "Michelangelo",
      "Sandro Botticelli",
      "Botticelli's workshop only",
      "Giorgione",
    ],
    correctIndex: 1,
    story:
      "Botticelli's Birth of Venus captured Renaissance Florence's obsession with classical myth — Venus arriving not with thunder but with grace. The painting survived centuries of neglect before being rediscovered as a symbol of beauty reborn.",
    media:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sandro%20Botticelli%20-%20La%20nascita%20di%20Venere%20-%20Google%20Art%20Project%20-%20edited.jpg?width=900",
    mediaType: "image",
    mediaAlt: "The Birth of Venus by Sandro Botticelli",
  },
  {
    id: 3,
    heading: "WHO PAINTED THIS?",
    prompt: "The artist looks back at you — unflinching, aged, honest.",
    options: [
      "Rembrandt van Rijn",
      "Frans Hals",
      "Jan Vermeer",
      "Peter Paul Rubens",
    ],
    correctIndex: 0,
    story:
      "Rembrandt painted over ninety self-portraits across his lifetime, tracking his own face as fortune rose and fell. Each one is a record of aging without vanity — light falling on wrinkles the way it once fell on velvet.",
    media:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rembrandt%20van%20Rijn%20-%20Self-Portrait%20-%20Google%20Art%20Project.jpg?width=900",
    mediaType: "image",
    mediaAlt: "Self-Portrait by Rembrandt van Rijn",
  },
  {
    id: 4,
    heading: "WHO PAINTED THIS?",
    prompt: "A pearl catches the light. She turns slightly away.",
    options: [
      "Johannes Vermeer",
      "Rembrandt van Rijn",
      "Frans Hals",
      "Gerard ter Borch",
    ],
    correctIndex: 0,
    story:
      "Vermeer's Girl with a Pearl Earring is not a portrait but a tronie — a study of expression and light. The pearl itself may be an illusion, painted without underdrawing. The mystery of her identity keeps viewers returning.",
    media:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Meisje%20met%20de%20parel.jpg?width=900",
    mediaType: "image",
    mediaAlt: "Girl with a Pearl Earring by Johannes Vermeer",
  },
  {
    id: 5,
    heading: "WHO PAINTED THIS?",
    prompt: "A village sleeps beneath a sky that moves.",
    options: [
      "Claude Monet",
      "Vincent van Gogh",
      "Paul Gauguin",
      "Edvard Munch",
    ],
    correctIndex: 1,
    story:
      "Van Gogh painted The Starry Night from memory in the asylum at Saint-Rémy — swirls of blue and gold that no photograph could capture. He considered it a failure. The world disagreed, and made it the most reproduced night sky in history.",
    media:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Van%20Gogh%20-%20Starry%20Night%20-%20Google%20Art%20Project.jpg?width=900",
    mediaType: "image",
    mediaAlt: "The Starry Night by Vincent van Gogh",
  },
  {
    id: 6,
    heading: "WHO PAINTED THIS?",
    prompt: "A wave crests like a claw over tiny boats.",
    options: [
      "Hokusai",
      "Hiroshige",
      "Utamaro",
      "Kuniyoshi",
    ],
    correctIndex: 0,
    story:
      "Hokusai's Great Wave off Kanagawa was one of thirty-six views of Mount Fuji — a woodblock print that crossed oceans and influenced Impressionism. The wave is frozen forever at its peak, about to crash on boats too small to escape.",
    media:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tsunami%20by%20hokusai%2019th%20century.jpg?width=900",
    mediaType: "image",
    mediaAlt: "The Great Wave off Kanagawa by Hokusai",
  },
  {
    id: 7,
    heading: "WHO PAINTED THIS?",
    prompt: "Two fingers almost touch. Creation hangs in the gap.",
    options: [
      "Raphael",
      "Michelangelo",
      "Leonardo da Vinci",
      "Masaccio",
    ],
    correctIndex: 1,
    story:
      "Michelangelo painted the Sistine Chapel ceiling over four years on his back, and The Creation of Adam became its most iconic panel. The space between God's and Adam's fingers holds the entire weight of Renaissance humanism.",
    media:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Michelangelo%20-%20Creation%20of%20Adam%20%28cropped%29.jpg?width=900",
    mediaType: "image",
    mediaAlt: "The Creation of Adam by Michelangelo",
  },
  {
    id: 8,
    heading: "WHO PAINTED THIS?",
    prompt: "Marble. Missing arms. Still unmistakable.",
    options: [
      "Praxiteles",
      "Unknown Hellenistic sculptor",
      "Phidias",
      "Lysippos",
    ],
    correctIndex: 1,
    story:
      "The Venus de Milo was discovered on the island of Milos in 1820, arms already lost to time. Her missing limbs became part of her power — beauty incomplete yet perfect, a masterpiece that asks you to imagine what was taken.",
    media:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Venus%20de%20Milo%20Louvre%20Ma399%20n4.jpg?width=900",
    mediaType: "image",
    mediaAlt: "Venus de Milo sculpture",
  },
];
