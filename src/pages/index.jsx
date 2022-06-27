import { CommonLayout } from '@components/CommonLayout';
import { About } from '@components/section/About';
import { CategoryIntruduce } from '@components/section/CategoryIntruduce';
import { ClassIntroduce } from '@components/section/ClassIntroduce';
import { Footer } from '@components/section/Footer';
import { Service } from '@components/section/Service';
import { Thumnail } from '@components/section/Thumnail';
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
