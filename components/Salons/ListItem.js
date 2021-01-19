import Link from "next/link";
import styled from "styled-components";

const StyledListItem = styled.li`
  margin: 0 ${(props) => props.theme.gutters.mobileX};
  padding: ${(props) => props.theme.gutters.mobileX} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

const ListItem = ({ salon }) => {
  return (
    <StyledListItem>
      <Link href={`/salons/${salon.slug}`}>{salon.name}</Link>
    </StyledListItem>
  );
};

export default ListItem;
