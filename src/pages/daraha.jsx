import React from 'react';
import { Scroll } from 'scrollex';
import styled from '@emotion/styled';
import Head from 'next/head';

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
      translateY: 30,
    },
    [data.index * 150 + 350]: {
      translateY: -30,
    },
  }),
};

export default function daraha() {
  return (
    <Container scrollAxis="y">
      <Section>
        <Item
          keyframes={keyframes.heading}
          springs={springs}
          data={{ index: 0 }}>
          <Heading>피카츄</Heading>
        </Item>
        <Item
          keyframes={keyframes.heading}
          springs={springs}
          data={{ index: 1 }}>
          <Heading>라이츄</Heading>
        </Item>
        <Item
          keyframes={keyframes.heading}
          springs={springs}
          data={{ index: 2 }}>
          <Heading>파이리</Heading>
        </Item>
        <Item
          keyframes={keyframes.heading}
          springs={springs}
          data={{ index: 3 }}>
          <Heading>꼬부기</Heading>
        </Item>
        <Item
          keyframes={keyframes.heading}
          springs={springs}
          data={{ index: 4 }}>
          <Heading>버터풀</Heading>
        </Item>
        <Item
          keyframes={keyframes.heading}
          springs={springs}
          data={{ index: 5 }}>
          <Heading>야도란</Heading>
        </Item>
        <Item
          keyframes={keyframes.heading}
          springs={springs}
          data={{ index: 6 }}>
          <Heading>피죤투</Heading>
        </Item>
        <Item
          keyframes={keyframes.heading}
          springs={springs}
          data={{ index: 7 }}>
          <Heading>또가스</Heading>
        </Item>
      </Section>
    </Container>
  );
}

const Container = styled(Scroll.Container)`
  height: 100vh;
  background-color: #000;
  color: #fff;
  background-image: url('/img/pc_mainbackground.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
const Section = styled(Scroll.Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200vh;
`;
const Item = styled(Scroll.Item)``;

const Heading = styled.h2`
  font-size: 64px;
  text-align: center;
`;
