import styled from "styled-components";
import { useTheme } from "../utils/provider";
import { Nav } from "./Nav";
import { sizes, themes } from "../utils/variables";

export const Header = ({ style = {} }) => {
  const { theme } = useTheme();

  return (
    <Container style={style} background={themes[theme].primary} sizes={sizes}>
      <Logo>Cowboy Interactive®</Logo>
      <Nav />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  position: fixed;
  padding: 0 10%;
  background: ${props => props.background};

  @media (max-width: ${(props) => props.sizes.medium}) {
    padding: 0px 2.5%;
  }
`;

const Logo = styled.div`
  font-family: "Plein-Variable";
`;
