import React from 'react';
import styled from '@emotion/styled';
import { breakPoints } from '@utils/breakpoints';

export const Footer = () => {
  return (
    <Container>
      <Title>Information</Title>
      {/* <Divider /> */}
      <Content>
        <span>
          <a href="http://naver.me/F8B9UaFp">📍위치 확인하기</a>
        </span>
        <br />
        <br />
        Phone . 010-7319-0138 <br />
        Insta . @want_pilates <br />
        대구광역시 중구 달구벌대로 443길 44-46 503호
        <br />
        <br />
        Copyright © 원트 필라테스 2022
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #a8dff8;
  min-height: 30vh;
  width: 100vw;

  padding-top: 72px;
  padding-bottom: 72px;
`;

const Title = styled.div`
  color: #616161;
  font-size: 24px;
  margin-bottom: 24px;
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
  letter-spacing: 1px;
  > span {
    font-weight: 700;
    color: #3f3f3f;
  }

  ${breakPoints.sm} {
    font-size: 13px;
  }
`;
