import styled, { css } from 'styled-components';

import { Paragraph } from 'components/typography/Paragraph';
import { StarFilledIcon, StarEmptyIcon } from 'components/Icons';

const Rating = ({ rating, reviewsCount, ...props }) => {
  const emptyStars = 5 - rating;

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

export default Rating;

const RatingWrapper = styled.div`
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
