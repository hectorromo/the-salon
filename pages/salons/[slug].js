import Link from "next/link";

import ChevronLeft from "../../assets/icons/chevron-left-white.svg";
import HeartIcon from "../../assets/icons/heart.svg";

import Header from "components/Header";
import Hero from "components/Hero";

const Salon = ({ salon }) => {
  console.log("The salon", salon);
  return (
    <div>
      <Header overlay={true}>
        <Header.Left>
          <Link href="/salons">
            <ChevronLeft />
          </Link>
        </Header.Left>
        <Header.Right>
          <HeartIcon />
        </Header.Right>
      </Header>

      <Hero salon={salon} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/salons/${context.query.slug}`
  );
  const json = await res.json();

  return {
    props: {
      salon: json,
    },
  };
}

export default Salon;
