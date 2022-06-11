import React from 'react';
import styled from '@emotion/styled';
import { breakPoints } from '@utils/breakpoints';

export const GroupDescriptionBox = () => {
  return (
    <Container>
      <Title>Group Lesson</Title>
      <Description>
        같이 운동함으로써 운동에 대한 흥미를 느낄 수 있으며 개인의 능력치에 맞게
        운동 강도 조절이 가능하여 누구나 쉽게 따라갈 수 있도록 프로그램을
        구성했습니다. 회원님의 스케줄을 고려하여 고정 수업제가 아닌 어플을 통해
        자유롭게 예약 가능한 시스템을 도입하고 있습니다.
      </Description>
    </Container>
  );
};

const Container = styled.div`
  background-color: #87edb2;
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 360px;
  ${breakPoints.sm} {
    width: 320px;
    height: 320px;
  }
`;

const Title = styled.div`
  color: #333;
  font-size: 36px;
  margin-bottom: 24px;
  ${breakPoints.sm} {
    font-size: 24px;
  }
`;

const Description = styled.div`
  color: #3f3f3f;
  word-break: keep-all;
  ${breakPoints.sm} {
    font-size: 16px;
  }
`;
