import styled from "styled-components";
import { sizes } from "../utils/variables";

export const Grid = ({ children, style = {} }) => {
  return (
    <Container sizes={sizes} style={style}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 20px;

  @media (max-width: ${(props) => props.sizes.medium}) {
    grid-template-columns: 2fr;
  }
`;

const Item = styled.div`
  display: flex;
`;
