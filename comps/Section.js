import styled from "styled-components";
import { sizes } from "../utils/variables";

export const Section = ({ children, style = {} }) => {
  return (
    <Container sizes={sizes} style={style}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0 0 200px 0;
  padding: 0px 10%;
  flex-direction: column;

  @media (max-width: ${(props) => props.sizes.medium}) {
    padding: 0px 2.5%;
  }
`;
