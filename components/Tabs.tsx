import styled, { css } from 'styled-components';

export const Tabs = () => {
  return (
    <TabWrapper>
      <Tab active>Info</Tab>
      <Tab>Schema</Tab>
    </TabWrapper>
  );
};

const TabWrapper = styled.div`
  display: flex;
  background-color: white;
`;

const Tab = styled.a<{ active?: boolean }>`
  position: relative;
  padding: 16px 0;
  width: 50%;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      &::before {
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 2px;
        content: '';
        background-color: ${(props) => props.theme.colors.primary};
      }
    `}
`;
