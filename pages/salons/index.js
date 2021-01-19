import { salons } from "salonData";

import Header from "components/Header";
import HeaderNavItem from "components/Header/HeaderNavItem";
import HeaderTitle from "components/Header/HeaderTitle";
import PriceFilter from "components/PriceFilter";
import SalonsList from "components/Salons/SalonsList";
import SalonsListItem from "components/Salons/SalonsListItem";

import { ChevronLeft, FilterIcon } from "components/Header/HeaderIcons";

const SalonsPage = ({ salons }) => {
  return (
    <div>
      <Header>
        <HeaderNavItem>
          <ChevronLeft />
        </HeaderNavItem>
        <HeaderTitle>Hår</HeaderTitle>
        <HeaderNavItem>
          <FilterIcon />
        </HeaderNavItem>
      </Header>
      <PriceFilter />
      <SalonsList>
        {salons.map((salon) => (
          <SalonsListItem salon={salon} key={salon.id} />
        ))}
      </SalonsList>
    </div>
  );
};

export async function getStaticProps(context) {
  // const res = await fetch(`http://localhost:3000/api/salons`);
  // const json = await res.json();
  return {
    props: {
      salons,
    },
  };
}

export default SalonsPage;
