import Head from 'next/head';
import Link from 'next/link';
import { salons } from 'salonData';
import { HeartIconInverted, ChevronLeftInverted } from 'components/Icons';

import Header from 'components/Header';
import Hero from 'components/Hero';
import HeaderNavItem from 'components/Header/HeaderNavItem';
import SalonContent from 'components/Salon/SalonContent';
import Tabs from 'components/Tabs';
import styled from 'styled-components';

const Salon = ({ salon }) => {
  if (!salon) return null;

  return (
    <SalonWrapper>
      <Head>
        <title>{salon.name} | The Salon</title>
      </Head>
      <Header overlay={true}>
        <HeaderNavItem>
          <Link href="/salons">
            <a>
              <ChevronLeftInverted />
            </a>
          </Link>
        </HeaderNavItem>
        <HeaderNavItem>
          <HeartIconInverted />
        </HeaderNavItem>
      </Header>

      <Hero salon={salon} />
      <Tabs />
      <SalonContent salon={salon} />
    </SalonWrapper>
  );
};

const SalonWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

export async function getStaticPaths() {
  const paths = salons.map((salon) => ({
    params: {
      slug: salon.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const salon = salons.filter((salon) => salon.slug === params.slug);

  if (!salon.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      salon: salon[0],
    },
  };
}

export default Salon;
