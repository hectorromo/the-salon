import styled from 'styled-components';

import { Salon } from 'types/Salon';

import { ChevronDownIcon, ClockIcon, GlobeIcon, PhoneIcon, PinIcon } from 'components/Icons';
import { Paragraph } from 'components/Typography/Paragraph';

interface Props {
  salon: Salon;
}

export const SalonContent: React.FC<Props> = ({ salon }) => {
  return (
    <SalonContentWrapper>
      <SalonDetail>
        <PinIcon />{' '}
        <Paragraph weight="light">
          {salon.street}, {salon.postal_address}
        </Paragraph>
      </SalonDetail>
      <SalonDetail>
        <ClockIcon />{' '}
        <Paragraph weight="light">Öppet till {salon.opening_hours.end} idag</Paragraph>
        <span>
          <ChevronDownIcon />
        </span>
      </SalonDetail>
      <SalonDetail>
        <PhoneIcon /> <Paragraph weight="light">{salon.phone}</Paragraph>
      </SalonDetail>
      <SalonDetail>
        <GlobeIcon /> <Paragraph weight="light">{salon.website}</Paragraph>
      </SalonDetail>
      <SalonDescription>
        <Paragraph weight="light">{salon.description}</Paragraph>
      </SalonDescription>
    </SalonContentWrapper>
  );
};

const SalonContentWrapper = styled.div<{}>`
  margin-top: 20px;
  padding: 0 ${(props) => props.theme.gutters.mobileX};
  font-weight: 300;
  background-color: white;
`;

export const SalonDetail = styled.div<{}>`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.gutters.mobileX} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  svg {
    margin-right: 10px;
  }

  span {
    margin-left: 16px;
    margin-top: -5px;
  }
`;

export const SalonDescription = styled.div<{}>`
  padding: 20px 0;
  color: ${(props) => props.theme.colors.paragraph};
`;
