import Header from "components/Header";
import PriceFilter from "components/PriceFilter";
import SalonList from "components/Salons/List";
import SalonListItem from "components/Salons/ListItem";

import ChevronLeft from "../../assets/icons/chevron-left.svg";
import FilterIcon from "../../assets/icons/filter.svg";

const Salons = ({ salons }) => {
  return (
    <div>
      <Header>
        <Header.Left>
          <ChevronLeft />
        </Header.Left>
        <Header.Title>Hår</Header.Title>
        <Header.Right>
          <FilterIcon />
        </Header.Right>
      </Header>
      <PriceFilter />
      <SalonList>
        {salons.map((salon) => (
          <SalonListItem salon={salon} key={salon.id} />
        ))}
      </SalonList>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/salons`);
  const json = await res.json();

  return {
    props: {
      salons: json,
    },
  };
}

export default Salons;
