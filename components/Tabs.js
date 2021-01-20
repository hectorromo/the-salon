import styled, { css } from 'styled-components';

const Tabs = () => {
  return (
    <TabWrapper>
      <Tab active>Info</Tab>
      <Tab>Schema</Tab>
    </TabWrapper>
  );
};

export default Tabs;

const TabWrapper = styled.div`
  background-color: white;
  display: flex;
`;

const Tab = styled.a`
  cursor: pointer;
  padding: 16px 0;
  width: 50%;
  text-align: center;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  ${(props) =>
    props.active &&
    css`
      &::before {
        position: absolute;
        left: 0;
        bottom: -1px;
        content: '';
        width: 100%;
        height: 2px;
        background-color: ${(props) => props.theme.colors.primary};
      }
    `}
`;
