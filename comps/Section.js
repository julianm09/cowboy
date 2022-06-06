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
  display: flex;
  justify-content: flex-start;
  margin: 0 0 100px 0;
  padding: 0px 10%;

  @media (max-width: ${(props) => props.sizes.small}) {
    flex-direction: column;
  }
`;
