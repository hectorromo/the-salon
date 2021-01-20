import Link from "next/link";
import styled from "styled-components";

import { ChevronRightIcon } from "components/Icons";

import Rating from "components/Rating";
import { Paragraph } from "components/typography/Paragraph";
import { Title } from "components/typography/Title";

const ListItem = ({ salon }) => {
  return (
    <StyledListItem>
      <Link href={`/salons/${salon.slug}`}>
        <a>
          <ListItemInner>
            <ColLeft>
              <Paragraph>{salon.schedule}</Paragraph>
            </ColLeft>

            <ColMiddle>
              <Title size="medium" as="h2">
                {salon.name}
              </Title>
              <Rating rating={salon.rating} reviewsCount={salon.reviews_count} />
              <Paragraph color="grayDark" weight="300">
                {salon.street}
              </Paragraph>
            </ColMiddle>

            <ColRight>
              <Paragraph>{salon.cutting_price} kr</Paragraph>
              <Paragraph size="small" color="grayDark" weight="300">
                {salon.cutting_time} min
              </Paragraph>
            </ColRight>

            <ListIcon>
              <ChevronRightIcon />
            </ListIcon>
          </ListItemInner>
        </a>
      </Link>
    </StyledListItem>
  );
};

export default ListItem;

const StyledListItem = styled.li`
  position: relative;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  a {
    display: block;
    position: relative;
    margin: 0 ${props => props.theme.gutters.mobileX};
    padding: ${props => props.theme.gutters.mobileX} 35px ${props => props.theme.gutters.mobileX} 0;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.56;
      transition: opacity 0.3s;
    }
  }
`;

const ListItemInner = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColLeft = styled.div`
  width: 68px;
  p {
    line-height: 24px;
  }
`;
const ColMiddle = styled.div`
  margin-right: auto;
  div {
    margin: 12px 0 13px;
  }
`;
const ColRight = styled.div`
  text-align: right;
  p:first-child {
    line-height: 24px;
    margin-bottom: 10px;
  }
`;

const ListIcon = styled.span`
  position: absolute;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;
