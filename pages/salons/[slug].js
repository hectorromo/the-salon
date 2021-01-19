import { salons } from "salonData";

import Link from "next/link";

import ChevronLeft from "../../assets/icons/chevron-left-white.svg";
import HeartIcon from "../../assets/icons/heart.svg";

import Header from "components/Header";
import Hero from "components/Hero";
import HeaderNavItem from "components/Header/HeaderNavItem";
import SalonContent from "components/Salon/SalonContent";
import Tabs from "components/Tabs";

const Salon = ({ salon }) => {
  if (!salon) return null;

  return (
    <div>
      <Header overlay={true}>
        <HeaderNavItem>
          <Link href="/salons">
            <img src={ChevronLeft} alt="" />
          </Link>
        </HeaderNavItem>
        <HeaderNavItem>
          <HeartIcon />
        </HeaderNavItem>
      </Header>

      <Hero salon={salon} />
      <Tabs />
      <SalonContent salon={salon} />
    </div>
  );
};

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
