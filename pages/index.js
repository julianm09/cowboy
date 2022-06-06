import styled from "styled-components";
import Cursor from "../comps/Cursor";
import Scene from "../comps/Scene";
import useScrollTop from "../hooks/useScrollTop";
import useWindowSize from "../hooks/useWindowSize";
import { H1 } from "../comps/text/H1";
import { Section } from "../comps/Section";
import { Header } from "../comps/Header";
import { Grid } from "../comps/Grid";
import { Card } from "../comps/Card";
import { Button } from "../comps/Button";
import { Text } from "../comps/text/Text";

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
        <Header />
        <Section style={{ marginTop: "100px", flexDirection: "column" }}>
          <H1
            text="Grow your business"
            transition={{ delay: 0, duration: 1 }}
          />
          <H1
            text="with the best"
            style={{ marginBottom: "20px" }}
            transition={{ delay: 0, duration: 1 }}
          />
          <Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua."
            style={{ marginBottom: "60px" }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <Button />
        </Section>
        <Section>
          <Grid>
            <Card />
            <Card />
            <Card />
          </Grid>
        </Section>
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
