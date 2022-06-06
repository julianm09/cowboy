import { motion } from "framer-motion";
import styled from "styled-components";
import { useTheme } from "../utils/provider";
import { sizes } from "../utils/variables";
import { themes } from "../utils/variables";

export const Button = ({
  style = {},
  text = "Contact Us",
  initial = { opacity: 0 },
  animate = { opacity: 100 },
  transition = { delay: 2, duration: 6 }
}) => {
  const { theme } = useTheme();
  return (
    <Container
      sizes={sizes}
      style={style}
      background={themes[theme].secondary}
      color={themes[theme].primary}        
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {text}
    </Container>
  );
};

const Container = styled(motion.div)`
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
