import React, { createRef, useState } from "react";
import MuiTypography from "@material-ui/core/Typography";
import MuiTextField from "@material-ui/core/TextField";
import MuiButton from "@material-ui/core/Button";
import MuiList from "@material-ui/core/List";
import MuiListItem from "@material-ui/core/ListItem";
import MuiListItemText from "@material-ui/core/ListItemText";

import styled from "styled-components";
import Padding from "components/Padding/Padding";
import { StartQuizPageRoute } from "pages/StartQuiz/StartQuiz";

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

interface QuizResultsPageProps {
  time: number;
  setCurrentPageURL: (url: string) => void;
}

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const QuizResultsPage = ({ time, setCurrentPageURL }: QuizResultsPageProps) => {
  const inputRef = createRef<HTMLInputElement>();
  const [isDisabled, setIsDisabled] = useState(false);
  const [leads, setLeads] = useState<string[]>(
    JSON.parse(window.localStorage.getItem("leads") || "[]")
  );

  const onButtonClick = () => {
    setIsDisabled(true);
    const value = inputRef.current?.value || "";
    window.localStorage.setItem(
      "leads",
      JSON.stringify([...leads, `${value} | ${time}`])
    );
    setLeads((currLeads) => [...currLeads, `${value} | ${time}`]);
    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }
  };

  const onStartOver = () => {
    setCurrentPageURL(StartQuizPageRoute);
  };

  return (
    <PageContainer>
      <Padding top={20} bottom={20} right={20} left={20}>
        <MuiTypography variant="h3">Score: {time}</MuiTypography>
        <InputContainer>
          <MuiTextField
            label="Name"
            inputRef={inputRef}
            disabled={isDisabled}
          />
          <MuiButton onClick={onButtonClick} disabled={isDisabled}>
            Add
          </MuiButton>
        </InputContainer>
        <MuiList dense={true}>
          {leads.map((lead, index) => (
            <MuiListItem key={index}>
              <MuiListItemText primary={lead} />
            </MuiListItem>
          ))}
        </MuiList>
        <MuiButton onClick={onStartOver}>Start Over</MuiButton>
      </Padding>
    </PageContainer>
  );
};

export const QuizResultsPageRoute = "/results";

export default QuizResultsPage;
