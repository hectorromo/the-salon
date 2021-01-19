import styled from "styled-components";
import { ClockIcon, GlobeIcon, PhoneIcon, PinIcon } from "./SalonIcons";

const SalonContent = ({ salon }) => {
  return (
    <SalonContentWrapper>
      <SalonDetail>
        <PinIcon /> {salon.street}, {salon.postal_address}
      </SalonDetail>
      <SalonDetail>
        <ClockIcon /> Öppet till {salon.opening_hours.end} idag.
      </SalonDetail>
      <SalonDetail>
        <PhoneIcon /> {salon.phone}
      </SalonDetail>
      <SalonDetail>
        <GlobeIcon /> {salon.website}
      </SalonDetail>
    </SalonContentWrapper>
  );
};

const SalonContentWrapper = styled.div`
  padding: 0 ${(props) => props.theme.gutters.mobileX};
`;

export const SalonDetail = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  padding: ${(p) => p.theme.gutters.mobileX};

  svg {
    margin-right: 10px;
  }
`;

export default SalonContent;
