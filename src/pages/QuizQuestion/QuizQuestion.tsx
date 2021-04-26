import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Spacer from "components/Spacer/Spacer";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { QuizResultsPageRoute } from "pages/QuizResults/QuizResults";

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface QuizQuestionPageProps {
  time: number;
  stopTimer: () => void;
  decrementTime: (amount: number) => void;
  setCurrentPageURL: (url: string) => void;
}

const QuizQuestionPage = ({
  time,
  decrementTime,
  setCurrentPageURL,
  stopTimer,
}: QuizQuestionPageProps) => {
  const questions = [
    {
      question: "What does HTML stand for?",
      answers: [
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Text Markup Language",
      ],
      answerIndex: 2,
    },
    {
      question: "Who is making the Web standards?",
      answers: [
        "The World Wide Web Consortium",
        "Mozilla",
        "Microsoft",
        "Google",
      ],
      answerIndex: 0,
    },
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedIndex(parseInt(event.target.value));
  };

  const onButtonClick = () => {
    if (questions[questionIndex].answerIndex !== selectedIndex) {
      decrementTime(10);
    } else {
      if (questions.length - 1 !== questionIndex) {
        setQuestionIndex(questionIndex + 1);
      } else {
        stopTimer();
        setQuestionIndex(questionIndex + 1);
        setCurrentPageURL(QuizResultsPageRoute);
      }
    }
  };

  return (
    <PageContainer>
      <Spacer height={40} />
      <Typography variant="h6">{time} seconds</Typography>
      <Spacer height={40} />
      <Typography variant="h6">
        Question: {questions[questionIndex].question}
      </Typography>
      <Spacer height={20} />
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="answers"
          name="answers"
          value={selectedIndex}
          onChange={handleChange}
        >
          {questions[questionIndex].answers.map((answer, index) => (
            <FormControlLabel
              key={answer}
              value={index}
              control={<Radio />}
              label={answer}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Spacer height={20} />
      <Button variant="contained" color="primary" onClick={onButtonClick}>
        {questions.length - 1 !== questionIndex ? "Next Question" : "Finish"}
      </Button>
    </PageContainer>
  );
};

export const QuizQuestionPageRoute = "/question";

export default QuizQuestionPage;
