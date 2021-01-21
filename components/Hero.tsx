import styled from 'styled-components';

import { Salon } from 'types/Salon';
import { ThemeColors } from 'styles/theme';

import { Rating } from 'components/Rating';
import { Title } from 'components/Typography/Title';

interface Props {
  salon: Salon;
}

export const Hero: React.FC<Props> = ({ salon }) => {
  return (
    <HeroWrapper>
      <img src={salon.img_url} alt={salon.name} />
      <HeroGradient>
        <Title size="large">{salon.name}</Title>
        <Rating rating={salon.rating} reviewsCount={salon.reviews_count} color="white" large />
      </HeroGradient>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div<{}>`
  position: relative;
  height: 251px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    padding: 0 0 1px;
    object-fit: cover;
  }
`;

const HeroGradient = styled.div<{}>`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: absolute;
  height: 125px;
  width: 100%;
  bottom: 0;
  padding: 24px ${(props) => props.theme.gutters.mobileX};
  z-index: 1;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  color: white;

  h1 {
    margin-bottom: 10px;
  }
`;
