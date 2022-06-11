import React from 'react';
import styled from '@emotion/styled';
import { breakPoints } from '@utils/breakpoints';

export const About = () => {
  return (
    <Container>
      <Title>“원하는 바디를 만드는 필라테스” </Title>
      <Divider />
      <Content>
        원트필라테스는 체형 분석, 움직임 분석, 영양 분석을 바탕으로 <br />
        체계적인 관리 프로그램으로 구성되어있습니다. <br />
        전문성과 열정을 갖춘 우수한 강사진들의 오랜 경력과 노하우로
        <br /> 회원님들께 양질의 수업을 제공하여 원하는 바디로 만들어 냅니다.{' '}
        <br />
        <br />
        <br />
        지속적인 관리를 통해 내가 원하는 몸의 변화를 느껴보세요!
        <br />
        저희 원트필라테스가 회원님과 함께 합니다.
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffc85d;
  min-height: 50vh;
  width: 100vw;

  padding-top: 72px;
  padding-bottom: 72px;
`;

const Title = styled.div`
  color: #616161;
  font-size: 24px;
`;

const Divider = styled.div`
  height: 80px;
  width: 1px;
  background-color: #61616133;
  margin-top: 24px;
  margin-bottom: 24px;

  ${breakPoints.sm} {
    height: 1px;
    width: 128px;
    margin-top: 28px;
    margin-bottom: 28px;
  }
`;

const Content = styled.div`
  color: #616161;
  text-align: center;
  word-break: keep-all;
  letter-spacing: 0.8px;
  ${breakPoints.sm} {
    font-size: 13px;
  }
`;
