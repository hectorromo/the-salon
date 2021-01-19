import styled from "styled-components";

import Rating from "./Rating";
import { Title } from "./typography/Title";

const Hero = ({ salon }) => {
  return (
    <StyledDiv>
      <img src={salon.img_url} alt={salon.name} />
      <GradientOverlay>
        <Title size="large">{salon.name}</Title>
        <Rating
          rating={salon.rating}
          reviewsCount={salon.reviews_count}
          color="white"
          large
        />
      </GradientOverlay>
    </StyledDiv>
  );
};

export default Hero;

const StyledDiv = styled.div`
  height: 251px;
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    padding: 0 0 1px;
    object-fit: cover;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
  height: 125px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  padding: 24px ${(props) => props.theme.gutters.mobileX};
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  color: white;

  h1 {
    margin-bottom: 10px;
  }
`;
