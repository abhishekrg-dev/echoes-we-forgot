import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionScreen } from "./QuestionScreen";
import { ResultsScreen } from "./ResultsScreen";
import type { MuseumQuestion } from "../../data/soundQuestions";

interface MuseumFlowProps {
  questions: MuseumQuestion[];
  museumTitle: string;
  itemLabel: string;
}

export function MuseumFlow({ questions, museumTitle, itemLabel }: MuseumFlowProps) {
  const navigate = useNavigate();
  const [screenIndex, setScreenIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState<boolean[]>(
    () => new Array(questions.length).fill(false),
  );

  const correctCount = correctAnswers.filter(Boolean).length;
  const charge = correctCount * 12.5;
  const isResults = screenIndex >= questions.length;
  const minCorrect = 4;

  const handleAnswer = useCallback(
    (index: number): boolean => {
      const q = questions[screenIndex];
      const correct = index === q.correctIndex;

      if (correct && !correctAnswers[screenIndex]) {
        setCorrectAnswers((prev) => {
          const next = [...prev];
          next[screenIndex] = true;
          return next;
        });
      }

      return correct;
    },
    [correctAnswers, questions, screenIndex],
  );

  const handleNext = () => {
    if (screenIndex < questions.length) {
      setScreenIndex((i) => i + 1);
    }
  };

  const handleBack = () => {
    if (screenIndex > 0) {
      setScreenIndex((i) => i - 1);
    } else {
      navigate("/");
    }
  };

  const handleTryAgain = () => {
    setScreenIndex(0);
    setCorrectAnswers(new Array(questions.length).fill(false));
  };

  if (isResults) {
    return (
      <ResultsScreen
        correctCount={correctCount}
        totalQuestions={questions.length}
        museumTitle={museumTitle}
        itemLabel={itemLabel}
        onTryAgain={handleTryAgain}
        onHome={() => navigate("/")}
        unlocked={correctCount >= minCorrect}
      />
    );
  }

  return (
    <QuestionScreen
      key={screenIndex}
      question={questions[screenIndex]}
      screenIndex={screenIndex}
      totalScreens={questions.length}
      charge={charge}
      alreadyCorrect={correctAnswers[screenIndex]}
      onAnswer={handleAnswer}
      onNext={handleNext}
      onBack={handleBack}
      museumTitle={museumTitle}
    />
  );
}
