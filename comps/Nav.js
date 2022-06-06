import styled from "styled-components";
import { sizes } from "../utils/variables";
import ThemeSwitch from "./ThemeSwitch";

export const Nav = ({ style = {} }) => {
  return (
    <Container style={style}>
      <NavLink sizes={sizes}>Home</NavLink>
      <NavLink sizes={sizes}>About</NavLink>
      <NavLink sizes={sizes}>Pricing</NavLink>
      <NavLink sizes={sizes}>Contact</NavLink>
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

  @media(max-width: ${props => props.sizes.small}){
    display: none;
  }
`;
