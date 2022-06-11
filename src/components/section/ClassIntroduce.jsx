import React from 'react';
import styled from '@emotion/styled';
import { breakPoints } from '@utils/breakpoints';
import { PrivateDescriptionBox } from './classintroduce/PrivateDescriptionBox';
import { GroupDescriptionBox } from './classintroduce/GroupDescriptionBox';

export const ClassIntroduce = () => {
  return (
    <Container>
      <PrivateDescriptionBox />
      <GroupDescriptionBox />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url('/img/back3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  ${breakPoints.sm} {
    flex-direction: column;
  }
`;
