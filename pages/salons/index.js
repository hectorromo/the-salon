import { useState } from 'react';
import { salons } from 'salonData';

import { ChevronLeft, FilterIcon } from 'components/Header/HeaderIcons';
import Header from 'components/Header';
import HeaderNavItem from 'components/Header/HeaderNavItem';
import HeaderTitle from 'components/Header/HeaderTitle';
import PriceFilter from 'components/PriceFilter';
import SalonsList from 'components/Salons/SalonsList';
import SalonsListItem from 'components/Salons/SalonsListItem';
import SalonsListEmpty from 'components/Salons/SalonsListEmpty';

const SalonsPage = ({ salons }) => {
  const [salonList, setSalonList] = useState([]);

  const filterSalons = (filteredSalons) => {
    setSalonList(filteredSalons);
  };

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

      <PriceFilter salons={salons} onFilter={filterSalons} />

      <SalonsList>
        {salonList.map((salon) => (
          <SalonsListItem salon={salon} key={salon.id} />
        ))}
        {!salonList.length && <SalonsListEmpty>Inga salonger hittades.</SalonsListEmpty>}
      </SalonsList>
    </div>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      salons,
    },
  };
}

export default SalonsPage;
