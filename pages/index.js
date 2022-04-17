import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Button from "../comps/button";
import Cursor from "../comps/Cursor";
import Scene from "../comps/Scene";
import useScrollTop from "../hooks/useScrollTop";
import useWindowSize from "../hooks/useWindowSize";

import { useState, useEffect } from "react";

export default function Home() {
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <Scene
        windowSize={windowSize}
        scrollTop={scrollTop}
        position={position}
      />
      <Cursor
        position={position}
        setPosition={setPosition}
        hovering={hovering}
      />

      <Container>
        <Section margin="100px 0 0 0">
          <Header margin="0 0 20px 0">
            We are a design focused digital agency, here to help you navigate
            the <br />
            wild wild west.
          </Header>
          <Button />
        </Section>

        <Section align="center">
          <Header>
            We specialize in branding, design, and websites for trailblazers who
            want to stand apart from the crowd.
          </Header>
        </Section>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  color: #4f4f4f;
`;

const Section = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.align};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};

  @media (max-width: 1000px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const Header = styled.div`
  font-size: calc(32px + 1vw);
  max-width: 650px;
  margin: ${(props) => props.margin};
`;
