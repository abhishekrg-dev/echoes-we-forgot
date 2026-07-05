import { MuseumFlow } from "../components/museum/MuseumFlow";
import { soundQuestions } from "../data/soundQuestions";

export function SoundMuseum() {
  return (
    <MuseumFlow
      questions={soundQuestions}
      museumTitle="THE SOUND MUSEUM"
      itemLabel="sounds"
    />
  );
}
