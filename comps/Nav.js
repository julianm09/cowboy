import styled from "styled-components";
import ThemeSwitch from "./ThemeSwitch";

export const Nav = ({ style = {} }) => {
  return (
    <Container style={style}>
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Pricing</NavLink>
      <NavLink>Contact</NavLink>
      <ThemeSwitch />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 60px 0 0;
  cursor: pointer;
`;
