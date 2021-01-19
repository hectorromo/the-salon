import Link from "next/link";
import styled from "styled-components";

import { ChevronRight } from "../../assets/icons/chevron-right.svg";

import Rating from "components/Rating";
import { Paragraph } from "components/typography/Paragraph";
import { Title } from "components/typography/Title";

const ListItem = ({ salon }) => {
  return (
    <StyledListItem>
      <Link href={`/salons/${salon.slug}`}>
        <a>
          <ListItemInner>
            <div>
              <Paragraph>{salon.schedule}</Paragraph>
            </div>

            <div>
              <Title size="medium">{salon.name}</Title>
              <Rating
                rating={salon.rating}
                reviewsCount={salon.reviews_count}
              />
              <Paragraph light>{salon.street}</Paragraph>
            </div>

            <div>
              <Paragraph light>{salon.cutting_price} kr</Paragraph>
              <Paragraph size="small">{salon.cutting_time} min</Paragraph>
            </div>

            <ListIcon>
              <ChevronRight />
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
  margin: 0 ${(props) => props.theme.gutters.mobileX};
  padding: ${(props) => props.theme.gutters.mobileX} 35px
    ${(props) => props.theme.gutters.mobileX} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  a {
    cursor: pointer;
  }
`;

const ListItemInner = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    &:nth-child(1) {
      width: 68px;
      p {
        line-height: 24px;
      }
    }
    &:nth-child(2) {
      margin-right: auto;
      div {
        margin: 12px 0 13px;
      }
    }
    &:nth-child(3) {
      text-align: right;
      p:first-child {
        line-height: 24px;
        margin-bottom: 10px;
      }
    }
  }
`;

const ListIcon = styled.span`
  position: absolute;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;
