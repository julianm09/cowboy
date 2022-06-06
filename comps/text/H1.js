import styled from "styled-components";
import { motion } from "framer-motion";

export const H1 = ({
  text = "Heading",
  style = {},
  initial = { y: 1000 },
  animate = { y: 0 },
  transition = { delay: 0, duration: 0.5 },
}) => {
  return (
    <Cont>
      <Text
        style={style}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {text}
      </Text>
    </Cont>
  );
};

const Cont = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Text = styled(motion.h1)`
  font-size: calc(32px + 5vw);
  font-weight: 700;
`;
