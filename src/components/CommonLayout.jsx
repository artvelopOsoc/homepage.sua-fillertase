import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
// import Image from 'next/image';
// import BackGround1 from '../asset/img/background1.webp';
// import BackGround2 from '../asset/img/background2.webp';
// import BackGround3 from '../asset/img/background3.webp';
// import BackGround4 from '../asset/img/background4.webp';
// import { breakPoints } from '@utils/breakpoints';

export const CommonLayout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const Container = styled.div``;

const LayoutContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
