import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Spacer from "components/Spacer/Spacer";
import { QuizQuestionPageRoute } from "pages/QuizQuestion/QuizQuestion";

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface StartQuizPageProps {
  setCurrentPageURL: (url: string) => void;
  startTimer: () => void;
}

const StartQuizPage = ({
  setCurrentPageURL,
  startTimer,
}: StartQuizPageProps) => {
  const onButtonClick = () => {
    startTimer();
    setCurrentPageURL(QuizQuestionPageRoute);
  };

  return (
    <PageContainer>
      <Typography variant="h3">Coding Quiz</Typography>
      <Spacer height={40} />
      <Button variant="contained" color="primary" onClick={onButtonClick}>
        Start
      </Button>
    </PageContainer>
  );
};

export const StartQuizPageRoute = "/start";

export default StartQuizPage;
