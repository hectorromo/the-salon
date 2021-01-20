import Link from 'next/link';

import { Button } from 'components/Button';

const Home = () => (
  <div>
    <h1>Start</h1>
    <Button>
      <Link href="/salons">Se salonger</Link>
    </Button>
  </div>
);

export default Home;
