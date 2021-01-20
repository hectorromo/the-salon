import styled from 'styled-components';

import { ClockIcon, GlobeIcon, PhoneIcon, PinIcon } from './SalonIcons';

import { ChevronDownIcon } from 'components/Icons';
import { Paragraph } from 'components/typography/Paragraph';

const SalonContent = ({ salon }) => {
  return (
    <SalonContentWrapper>
      <SalonDetail>
        <PinIcon />{' '}
        <Paragraph weight="300">
          {salon.street}, {salon.postal_address}
        </Paragraph>
      </SalonDetail>
      <SalonDetail>
        <ClockIcon /> <Paragraph weight="300">Öppet till {salon.opening_hours.end} idag</Paragraph>
        <span>
          <ChevronDownIcon />
        </span>
      </SalonDetail>
      <SalonDetail>
        <PhoneIcon /> <Paragraph weight="300">{salon.phone}</Paragraph>
      </SalonDetail>
      <SalonDetail>
        <GlobeIcon /> <Paragraph weight="300">{salon.website}</Paragraph>
      </SalonDetail>
      <SalonDescription>
        <Paragraph weight="300">{salon.description}</Paragraph>
      </SalonDescription>
    </SalonContentWrapper>
  );
};

export default SalonContent;

const SalonContentWrapper = styled.div`
  margin-top: 20px;
  padding: 0 ${(props) => props.theme.gutters.mobileX};
  font-weight: 300;
  background-color: white;
`;

export const SalonDetail = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  padding: ${(p) => p.theme.gutters.mobileX} 0;

  svg {
    margin-right: 10px;
  }

  span {
    margin-left: 16px;
    margin-top: -5px;
  }
`;

export const SalonDescription = styled.div`
  padding: 20px 0;
  color: ${(props) => props.theme.colors.paragraph};
`;
