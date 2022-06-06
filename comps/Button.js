import styled from "styled-components";
import { useTheme } from "../utils/provider";
import { sizes } from "../utils/variables";
import { themes } from "../utils/variables";

export const Button = ({ style = {}, text = "Contact Us" }) => {
  const { theme } = useTheme();
  return (
    <Container
      sizes={sizes}
      style={style}
      background={themes[theme].secondary}
      color={themes[theme].primary}
    >
      {text}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: white;
  flex-direction: column;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  width: 200px;
  height: 40px;
  cursor: pointer;
`;
