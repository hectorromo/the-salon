import Link from 'next/link';
import styled from 'styled-components';

import { Salon } from 'types/Salon';

import { ChevronRightIcon } from 'components/Icons';
import { Rating } from 'components/Rating';
import { Paragraph } from 'components/Typography/Paragraph';
import { Title } from 'components/Typography/Title';

interface Props {
  salon: Salon;
}

export const SalonsListItem: React.FC<Props> = ({ salon }) => {
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
              <Paragraph color="grayDark" weight="light">
                {salon.street}
              </Paragraph>
            </ColMiddle>

            <ColRight>
              <Paragraph>{salon.cutting_price} kr</Paragraph>
              <Paragraph size="small" color="grayDark" weight="light">
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

const StyledListItem = styled.li<{}>`
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  a {
    display: block;
    position: relative;
    margin: 0 ${(props) => props.theme.gutters.mobileX};
    padding: ${(props) => props.theme.gutters.mobileX} 35px
      ${(props) => props.theme.gutters.mobileX} 0;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.56;
      transition: opacity 0.3s;
    }
  }
`;

const ListItemInner = styled.div<{}>`
  display: flex;
  flex-direction: row;
`;

const ColLeft = styled.div<{}>`
  width: 68px;

  p {
    line-height: 24px;
  }
`;

const ColMiddle = styled.div<{}>`
  margin-right: auto;

  div {
    margin: 12px 0 13px;
  }
`;

const ColRight = styled.div<{}>`
  text-align: right;

  p:first-child {
    margin-bottom: 10px;
    line-height: 24px;
  }
`;

const ListIcon = styled.span<{}>`
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;
