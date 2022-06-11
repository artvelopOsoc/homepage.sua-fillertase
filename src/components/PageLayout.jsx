import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import BackGround1 from '../asset/img/background1.webp';
import BackGround2 from '../asset/img/background2.webp';
import BackGround3 from '../asset/img/background3.webp';
import BackGround4 from '../asset/img/background4.webp';
import { breakPoints } from '@utils/breakpoints';

export const PageLayout = ({ children }) => {
  const imageContainerRef = useRef(null);
  const layoutContainerRef = useRef(null);

  const [layoutMinHeight, setLayoutMinHeight] = useState(0);

  useEffect(() => {
    setLayoutMinHeight(imageContainerRef.current.clientHeight);
  }, []);

  return (
    <Container>
      <ImageContainer ref={imageContainerRef}>
        <BackgroundImage src={BackGround1} alt="" />
        <BackgroundImage src={BackGround2} alt="" />
        <BackgroundImage src={BackGround3} alt="" />
        <BackgroundImage src={BackGround4} alt="" />
      </ImageContainer>
      <LayoutContainer
        ref={layoutContainerRef}
        style={{ minHeight: layoutMinHeight }}>
        {children}
      </LayoutContainer>
    </Container>
  );
};

const Container = styled.div`
  overflow-y: scroll;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: fixed;
  z-index: 0;
`;

const LayoutContainer = styled.div`
  background-color: transparent;
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-y: scroll;
`;

const BackgroundImage = styled(Image)`
  width: 100vw;
  object-fit: cover;
  ${breakPoints.sm} {
    width: 100vw;
    /* height: 100vh; */
  }
`;
