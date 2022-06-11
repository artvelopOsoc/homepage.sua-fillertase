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
  heading: ({ section, data }) => ({
    [data.index * 150]: {
      translateY: 10,
    },
    [data.index * 150 + 350]: {
      translateY: -10,
    },
  }),
};

export const Thumnail = () => {
  const moveScroll = () => {
    const thumnailHeight =
      window.document.getElementById('thumnail').clientHeight;
    window.document
      .getElementById('main')
      .scrollTo({ left: 0, top: thumnailHeight, behavior: 'smooth' });
  };

  return (
    <ImageContainer id="thumnail">
      <TitleContainer>
        <Item
          keyframes={keyframes.heading}
          springs={springs}
          data={{ index: 0 }}>
          <Content>원하는 바디를 만들어드려요</Content>
          <Content>오늘부터 원트 필라테스와 시작하세요</Content>
        </Item>
        <Item
          keyframes={keyframes.heading}
          springs={springs}
          data={{ index: 1 }}>
          <MoveButton onClick={moveScroll}>DETAIL PROCESS</MoveButton>
        </Item>
      </TitleContainer>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
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

// const ContentContainer = styled(Scroll.Container)`
//   display: flex;
//   flex: 1;

//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  ${breakPoints.sm} {
    height: 50vh;
  }
`;

const Item = styled(Scroll.Item)``;

const Content = styled.div`
  text-align: center;
  color: #fff;
  font: normal normal normal 72px/100px Noto Serif KR;
  font-weight: 500;
  letter-spacing: -0.12px;

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
  margin-top: 48px;
  margin-left: auto;
  margin-right: auto;
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

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
