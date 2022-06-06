import styled from "styled-components";
import { motion } from "framer-motion";

export const Text = ({
  text = "Heading",
  style = {},
  initial = { y: 1000 },
  animate = { y: 0 },
  transition = { delay: 0, duration: 0.5 },
}) => {
  return (
    <Cont>
      <Paragraph
        style={style}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {text}
      </Paragraph>
    </Cont>
  );
};

const Cont = styled.div`
  overflow: hidden;
`;

const Paragraph = styled(motion.p)`
  font-size: 16px;
  font-weight: 400;
`;
