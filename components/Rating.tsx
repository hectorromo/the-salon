import styled, { css } from 'styled-components';

import { Salon } from 'types/Salon';
import { ThemeColors } from 'styles/theme';

import { StarFilledIcon, StarEmptyIcon } from 'components/Icons';
import { Paragraph } from 'components/Typography/Paragraph';

interface Props {
  rating: Salon['rating'];
  reviewsCount: Salon['reviews_count'];
  large?: boolean;
  color?: keyof typeof ThemeColors;
}

export const Rating: React.FC<Props> = ({ rating, reviewsCount, ...props }) => {
  const emptyStars: number = 5 - rating;

  const renderComponentsFromNumber = (number, Component) => {
    if (number < 1) return null;
    return Array.from(Array(number), (e, i) => <Component key={i} />);
  };

  return (
    <RatingWrapper {...props}>
      {renderComponentsFromNumber(rating, StarFilledIcon)}
      {renderComponentsFromNumber(emptyStars, StarEmptyIcon)}

      <Paragraph
        size={props.large ? 'small' : 'xSmall'}
        color={props.color ? props.color : 'grayDark'}
      >
        ({reviewsCount})
      </Paragraph>
    </RatingWrapper>
  );
};

const RatingWrapper = styled.div<Pick<Props, 'large'>>`
  display: flex;
  align-items: center;

  svg {
    margin-right: 4px;
  }

  p {
    margin-left: 4px;
  }

  ${(props) =>
    props.large &&
    css`
      svg {
        margin-right: 5px;
        width: 11px;
        height: auto;
      }
      p {
        margin-left: 5px;
      }
    `}
`;
