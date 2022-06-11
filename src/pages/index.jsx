import { CommonLayout } from '@components/CommonLayout';
import { About } from '@components/section/About';
import { CategoryIntruduce } from '@components/section/CategoryIntruduce';
import { ClassIntroduce } from '@components/section/ClassIntroduce';
import { Footer } from '@components/section/Footer';
import { Service } from '@components/section/Service';
import { Thumnail } from '@components/section/Thumnail';
import styled from '@emotion/styled';
import { breakPoints } from '@utils/breakpoints';
import { Scroll } from 'scrollex';

export default function Home() {
  return (
    <CommonLayout>
      <Scroll.Container id="main" scrollAxis="y" style={{ maxHeight: '100vh' }}>
        <Scroll.Section style={{ overflowY: 'scroll' }}>
          <Thumnail />
          <About />
          <ClassIntroduce />
          <Service />
          <CategoryIntruduce />
          <Footer />
        </Scroll.Section>
      </Scroll.Container>
    </CommonLayout>
  );
}

const ThumnailWrapper = styled.div`
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
  }
`;

const AboutContainer = styled.div`
  background-color: #ffc85d;
  height: 50vh;
  width: 100vw;
`;

const TrainingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-image: url('/img/back2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
`;

const ThirdWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-image: url('/img/back3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
`;
