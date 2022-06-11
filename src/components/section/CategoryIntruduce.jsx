import React from 'react';
import styled from '@emotion/styled';
import { breakPoints } from '@utils/breakpoints';
import { CategoryClassBox } from './categoryintroduce/CategoryClassBox';

const fitnessClassNameList = [
  '다이어트',
  '체형 교정',
  '웨딩 케어',
  '산전산후 필라테스',
  '키즈 필라테스',
  '재활 필라테스',
  '골프 필라테스',
  '실버 필라테스',
];

export const CategoryIntruduce = () => {
  return (
    <Container>
      <Middle>
        {fitnessClassNameList.map((item, index) => (
          <CategoryClassBox key={index} sequence={index + 1} content={item} />
        ))}
      </Middle>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url('/img/class_category_bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

const Middle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 732px;
  max-height: 732px;
  ${breakPoints.sm} {
    max-width: 292px;
    max-height: 576px;
  }
`;
