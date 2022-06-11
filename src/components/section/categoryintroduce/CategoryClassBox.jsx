import React from 'react';
import styled from '@emotion/styled';
import { breakPoints } from '@utils/breakpoints';

export const CategoryClassBox = ({ sequence, content }) => {
  return (
    <Container sequence={sequence}>
      <BoldTitle>OPEN</BoldTitle>
      <Title>{content}</Title>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff99;
  margin: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 240px;
  min-height: 240px;
  max-width: 240px;
  max-height: 240px;
  ${breakPoints.sm} {
    background-color: #ffffff99;
    min-width: 140px;
    min-height: 140px;
    max-width: 140px;
    max-height: 140px;
  }
`;

const BoldTitle = styled.div`
  color: #303030;
  font-size: 36px;
  font-weight: 800;
  ${breakPoints.sm} {
    font-size: 24px;
    font-weight: 600;
  }
`;

const Title = styled.div`
  color: #303030;
  font-size: 20px;
  letter-spacing: 1px;
  word-break: keep-all;
  text-align: center;
  ${breakPoints.sm} {
    font-size: 14px;
    font-weight: 300;
  }
`;
