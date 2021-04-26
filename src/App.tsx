import QuizQuestionPage, {
  QuizQuestionPageRoute,
} from "pages/QuizQuestion/QuizQuestion";
import QuizResultsPage, {
  QuizResultsPageRoute,
} from "pages/QuizResults/QuizResults";
import StartQuizPage, { StartQuizPageRoute } from "pages/StartQuiz/StartQuiz";
import React, { useState } from "react";

const App = () => {
  const [currentPageURL, setCurrentPageURL] = useState(StartQuizPageRoute);
  const [time, setTime] = useState(100);
  const [timer, setTimer] = useState<number | undefined>(undefined);

  const startTimer = () => {
    const interval = (setInterval(() => {
      setTime((currentTime) => {
        if (currentTime - 1 < 0) {
          stopTimer();
          setCurrentPageURL(QuizResultsPageRoute);
          return 0;
        } else {
          return currentTime - 1;
        }
      });
    }, 1000) as unknown) as number;
    setTimer(interval);
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  const resetTimer = () => {
    setTimer(undefined);
    setTime(100);
  };

  const decrementTime = (amount: number) => {
    setTime((currentTime) => {
      if (currentTime - amount < 0) {
        stopTimer();
        setCurrentPageURL(QuizResultsPageRoute);
        return 0;
      } else {
        return currentTime - amount;
      }
    });
  };

  switch (currentPageURL) {
    case StartQuizPageRoute: {
      return (
        <StartQuizPage
          setCurrentPageURL={setCurrentPageURL}
          startTimer={startTimer}
        />
      );
    }
    case QuizQuestionPageRoute: {
      return (
        <QuizQuestionPage
          time={time}
          stopTimer={stopTimer}
          decrementTime={decrementTime}
          setCurrentPageURL={setCurrentPageURL}
        />
      );
    }
    case QuizResultsPageRoute: {
      return (
        <QuizResultsPage
          time={time}
          setCurrentPageURL={setCurrentPageURL}
          resetTimer={resetTimer}
        />
      );
    }
    default: {
      throw new Error("Page does not exist");
    }
  }
};

export default App;
