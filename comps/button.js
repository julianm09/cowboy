import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Button() {
  return <ButtonUI>Get a Quote</ButtonUI>;
}

const ButtonUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  width: 150px;
  color: #4f4f4f;
  border-radius: 50px;
  border: 1px solid #4f4f4f;
  font-family: europa, sans-serif;
  cursor: pointer;
  transition: 0.2s ease;
  font-size: 16px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  &:hover {
    box-shadow: 0px 0px 20px #4f4f4f;
  }
`;
