import styled from "styled-components";
import useScrollTop from "../hooks/useScrollTop";
import useWindowSize from "../hooks/useWindowSize";
import { H1 } from "../comps/text/H1";
import { Section } from "../comps/Section";
import { Header } from "../comps/Header";
import { Button } from "../comps/Button";
import { Text } from "../comps/text/Text";
import { useState, useEffect } from "react";
import { Scene } from "../comps/Scene";
import { Cursor } from "../comps/Cursor";


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
        <Header />
        <Section style={{ marginTop: "100px", flexDirection: "column" }}>
          <H1
            text="Helping you navigate"
            transition={{ delay: 0, duration: 1 }}
          />
          <H1
            text={
              <>
                the <Outline>w</Outline>ild <Outline>w</Outline>ild{" "}
                <Outline>w</Outline>est.
              </>
            }
            style={{ marginBottom: "20px" }}
            transition={{ delay: 0, duration: 1 }}
          />
          <Text
            text="We are a digital design team focused on creating unique and interactive experiences for businesses."
            style={{ marginBottom: "60px" }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <Button />
        </Section>
        <Section></Section>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Outline = styled.span`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px;
`;
