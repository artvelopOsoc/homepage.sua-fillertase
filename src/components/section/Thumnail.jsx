import React from 'react';
import styled from '@emotion/styled';
import { breakPoints } from '@utils/breakpoints';
import { Keyframes, Scroll } from 'scrollex';

const springs = {
  translateY: {
    damping: 100,
    stiffness: 1200,
    mass: 8,
  },
};

const keyframes = {
  container: ({ maxScrollPosition }) => ({
    0: {
      translateY: 50,
    },
    [maxScrollPosition]: {
      translateY: -50,
    },
  }),
  item: ({ data }) => ({
    [data.index * 150]: {
      translateY: 35,
    },
    [data.index * 150 + 400]: {
      translateY: -35,
    },
  }),
};

export const Thumnail = () => {
  return (
    <Container>
      <ContentContainer>
        <TitleWrapper>
          <Title keyframes={keyframes.item} springs={springs}>
            원하는 바디를 만들어드려요
            <br />
            오늘부터 원트 필라테스와 시작하세요
          </Title>
          <MoveButton>DETAIL PROCESS</MoveButton>
        </TitleWrapper>
        {/* <MoveButton>DETAIL PROCESS</MoveButton> */}
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-image: url('/img/pc_mainbackground.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  ${breakPoints.sm} {
    background-image: url('/img/pc_mainbackground.png');
    height: 50vh;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Scroll.Container)`
  display: flex;
  text-align: center;
  color: #fff;
  font: normal normal normal 72px/100px Noto Serif KR;
  font-weight: 500;
  letter-spacing: -0.12px;
  margin-bottom: 72px;

  ${breakPoints.sm} {
    font: normal normal normal 24px/32px Noto Serif KR;
    font-weight: 300;
    letter-spacing: 2px;
    word-break: keep-all;
    letter-spacing: -0.1px;
    margin-bottom: 0px;
  }
`;

const MoveButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  width: fit-content;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 48px;
  padding-right: 48px;
  color: #fff;
  font: normal normal normal 36px/50px Noto Serif KR;
  font-weight: 200;
  letter-spacing: -0.12px;

  ${breakPoints.sm} {
    font: normal normal normal 24px/32px Noto Serif KR;
    font-weight: 300;
    letter-spacing: 2px;
    word-break: keep-all;
    display: none;
  }
`;

const MoveButton2 = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 48px;
  padding-right: 48px;
  color: #fff;
  font: normal normal normal 36px/50px Noto Serif KR;
  font-weight: 200;
  letter-spacing: -0.12px;
  margin-bottom: 128px;

  ${breakPoints.sm} {
    font: normal normal normal 24px/32px Noto Serif KR;
    font-weight: 300;
    letter-spacing: 2px;
    word-break: keep-all;
    margin-bottom: 128px;
  }
`;
