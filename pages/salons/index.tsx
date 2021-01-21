import Head from 'next/head';
import { useState } from 'react';
import { salons } from 'salonData';

import { Salon } from 'types/Salon';

import { ChevronLeft, FilterIcon } from 'components/Icons';
import { Header } from 'components/Header';
import { HeaderNavItem } from 'components/Header/HeaderNavItem';
import { HeaderTitle } from 'components/Header/HeaderTitle';
import { PriceFilter } from 'components/PriceFilter';
import { SalonsList } from 'components/Salons/SalonsList';
import { SalonsListItem } from 'components/Salons/SalonsListItem';
import { SalonsListEmpty } from 'components/Salons/SalonsListEmpty';

interface Props {
  salons: Salon[];
}

const SalonsPage: React.FC<Props> = ({ salons }) => {
  const [salonList, setSalonList] = useState([]);

  const filterSalons = (filteredSalons) => {
    setSalonList(filteredSalons);
  };

  return (
    <div>
      <Head>
        <title>Salonger | The Salon</title>
      </Head>
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

export async function getStaticProps() {
  return {
    props: {
      salons,
    },
  };
}

export default SalonsPage;
