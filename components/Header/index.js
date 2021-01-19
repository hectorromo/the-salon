import styled, { css } from "styled-components";

import findByType from "utils/findByType";
import HeaderTitle from "./Title";

const StyledHeader = styled.header`
  text-align: center;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  border-bottom-width: ${(props) => (props.overlay ? 0 : "1px")};
  height: 60px;
  padding: 0 ${(props) => props.theme.gutters.mobileX};
  position: ${(props) => (props.overlay ? "absolute" : "relative")};
`;

const Title = () => null;
Title.displayName = "Title";
const Right = () => null;
Right.displayName = "Right";
const Left = () => null;
Left.displayName = "Left";

const Header = ({ children, ...props }) => {
  const renderTitle = () => {
    const title = findByType(children, Title);
    if (!title) {
      return null;
    }

    return <HeaderTitle>{title.props.children}</HeaderTitle>;
  };

  const renderLeft = () => {
    const left = findByType(children, Left);
    if (!left) {
      return null;
    }

    return <div>{left.props.children}</div>;
  };
  const renderRight = () => {
    const right = findByType(children, Right);
    if (!right) {
      return null;
    }

    return <div>{right.props.children}</div>;
  };

  return (
    <StyledHeader {...props}>
      {renderLeft()}
      {renderTitle()}
      {renderRight()}
    </StyledHeader>
  );
};

Header.Title = Title;
Header.Left = Left;
Header.Right = Right;
export default Header;
