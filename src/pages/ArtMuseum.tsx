import { MuseumFlow } from "../components/museum/MuseumFlow";
import { artQuestions } from "../data/artQuestions";

export function ArtMuseum() {
  return (
    <MuseumFlow
      questions={artQuestions}
      museumTitle="THE ART MUSEUM"
      itemLabel="masterpieces"
    />
  );
}
