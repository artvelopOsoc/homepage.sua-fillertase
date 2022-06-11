import React from 'react';
import styled from '@emotion/styled';
import { breakPoints } from '@utils/breakpoints';
import { useViewportObserver } from '@hooks/useViewportObserver';
import { motion } from 'framer-motion';

export const Service = () => {
  const { visible, viewTarget } = useViewportObserver();

  return (
    <Container ref={viewTarget}>
      <ContentContainer
        animate={{
          opacity: visible ? [0, 1] : [1, 0],
        }}>
        <Title>“대표 원장이 직접 지도를 합니다” </Title>
        <Divider />
        <Content>
          원트 필라테스 자체 제작 교재와 실전에 바로 투입 가능한
          <br /> 교육 프로그램을 통하여 대표 원장이 직접 지도를 합니다.
          <br /> 전문적인 필라테스 지도자 양성을 위해
          <br /> 매 기수별 교육마다 “오직 5분”을
          <br /> 모집하여 세밀한 티칭 스킬과 경영 노하우를 가르쳐 드립니다.
          <br />
          <br />
          <br />
          필라테스 이론, 기초 해부학과 기능 해부학교육 ,<br /> 영양학 교육,
          캐딜락&리포머&바렐&체어 동작 이해 및 실습,
          <br /> 핸즈온&버벌 스킬 교육, 실제 수업 참관 및 진행,
          <br /> 회원 상담 및 체형 분석 평가 ,<br /> CS교육& 센터 운영 노하우
          제공
          <br />
          수강생 혜택 : 원트 필라테스 전속 계약 기회 제공 ,<br /> 센터 컨설팅
          무료, 원트 필라테스 주최 세미나 할인,
          <br /> 그룹 수업 20시간 무료 제공
        </Content>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdd0c0;
  min-height: 50vh;
  width: 100vw;

  padding-top: 72px;
  padding-bottom: 72px;
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
