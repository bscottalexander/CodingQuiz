import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const QuizResultsPage = () => {
  return (
    <PageContainer>
      <Typography variant="h3">Results:</Typography>
    </PageContainer>
  );
};

export default QuizResultsPage;
