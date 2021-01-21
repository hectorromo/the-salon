import Link from 'next/link';
import styled from 'styled-components';

import { Button } from 'components/Button';
import { Title } from 'components/Typography/Title';

const Home = () => (
  <Intro>
    <IntroTitle size="large">The Salon</IntroTitle>
    <Link href="/salons">
      <Button>Se salonger</Button>
    </Link>
  </Intro>
);

export default Home;

const Intro = styled.div<{}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const IntroTitle = styled(Title)<{}>`
  margin-bottom: 20px;
`;
