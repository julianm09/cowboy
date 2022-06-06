import styled from "styled-components";
import React, { useEffect } from "react";

const CursorUI = styled.div`
  width: ${(props) => (props.hovering ? "30px" : "10px")};
  height: ${(props) => (props.hovering ? "30px" : "10px")};
  border: 1px solid black;
  border-radius: 100%;
  position: fixed;
  transition: 0.1s ease-out;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 999999;
  display: ${(props) => (props.hovering ? "none" : "flex")};
`;

const ShadowUI = styled.div`
  width: ${(props) => (props.hovering ? "50px" : "30px")};
  height: ${(props) => (props.hovering ? "50px" : "30px")};
  border-radius: 100%;
  position: fixed;
  background: ${(props) =>
    props.hovering ? "rgba(220, 220, 220, 0.55)" : "rgba(220, 220, 220, 0.55)"};
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 999999;
  transition: 0.1s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Cursor = ({ position, setPosition, hovering }) => {
  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <CursorUI
      hovering={hovering}
      className="cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};
