import React from 'react';
import styled from '@emotion/styled';
import { breakPoints } from '@utils/breakpoints';
import { motion } from 'framer-motion';
import { useViewportObserver } from '@hooks/useViewportObserver';
import { themeColor } from '@constants/themeColor';

export const PrivateDescriptionBox = () => {
  const { visible, viewTarget } = useViewportObserver();

  return (
    <Container ref={viewTarget}>
      <ContentContainer
        animate={{
          opacity: visible ? [0, 1] : [1, 0],
        }}>
        <Title>Private Lesson</Title>
        <Description>
          개개인의 체형과 체질에 대한 고충을 최단 시간에 해결하는 프로그램으로
          운동 시작 전 강사와 목표를 설정하고 영양 분석을 통해 식단 제공과 함께
          원트 필라테스 자체 분석 과정을 통해 개인의 특성과 운동 능력을 파악하여
          자신만의 맞춤형 운동 프로그램을 제공합니다.
        </Description>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  /* background-color: #4cbade; */
  background-color: ${themeColor.beige};
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

const ContentContainer = styled(motion.div)``;

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
