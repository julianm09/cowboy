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
import { Grid } from "../comps/Grid";
import { Card } from "../comps/Card";
import { H2 } from "../comps/text/H2";
import ContactForm from "../comps/ContactForm";
import { themes } from "../utils/variables";
import { useTheme } from "../utils/provider";

export default function Home() {
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering] = useState(false);
  const {theme} = useTheme();

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
            text="We are a digital design team focused on creating unique and interactive experiences for small businesses."
            style={{ marginBottom: "60px" }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ delay: 2, duration: 6 }}
          />
        </Section>
        <Section>
          <H2
            text="What We Offer"
            style={{ marginBottom: "20px" }}
            transition={{ delay: 2.5, duration: 1 }}
          />
          <Text
            text="We provide a variety of different services including:"
            style={{ marginBottom: "60px" }}
            transition={{ delay: 3, duration: 1 }}
          />
        </Section>
        <Section>
          <ContactForm color={themes[theme]}/>
        </Section>
{/*         <Section>
          <H2
            text="Our Work"
            style={{ marginBottom: "40px" }}
            transition={{ delay: 0, duration: 1 }}
          />
          <Grid>
            <Card />
            <Card />
            <Card />
          </Grid>
        </Section> */}
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
  -webkit-text-stroke: 1px;
`;
