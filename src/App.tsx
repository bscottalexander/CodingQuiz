import QuizQuestionPage, {
  QuizQuestionPageRoute,
} from "pages/QuizQuestion/QuizQuestion";
import StartQuizPage, { StartQuizPageRoute } from "pages/StartQuiz/StartQuiz";
import React, { useState } from "react";

const App = () => {
  const [currentPageURL, setCurrentPageURL] = useState(StartQuizPageRoute);
  const [time, setTime] = useState(100);
  const [timer, setTimer] = useState<number | undefined>(undefined);

  const startTimer = () => {
    setTimer(
      (setInterval(() => {
        setTime((currentTime) => currentTime - 1);
      }, 1000) as unknown) as number
    );
  };

  const stopTimer = () => {
    clearInterval(timer);
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
      return <QuizQuestionPage time={time} stopTimer={stopTimer} />;
    }
    default: {
      throw new Error("Page does not exist");
    }
  }
};

export default App;
