import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderUI>
      <Link href="/">
        <Logo>cowboy</Logo>
      </Link>
      <Nav>
        <Link href="#">
          <NavLink>work</NavLink>
        </Link>
        <Link href="#">
          <NavLink>about</NavLink>
        </Link>
        <Link href="#">
          <NavLink>contact us</NavLink>
        </Link>
      </Nav>
    </HeaderUI>
  );
}

const HeaderUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 100px;
  width: 100%;
  padding: 0 5%;
  position: fixed;
  top: 0;

  color: #4f4f4f;
  border-bottom: 1px solid #4f4f4f;
  z-index: 1000;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

const Logo = styled.div`
  cursor: pointer;
  font-family: europa, sans-serif;
  font-weight: 900;
  font-size: 24px;
`;

const Nav = styled.div`
  font-size: 14px;
  display: flex;
`;

const NavLink = styled.div`
  font-family: europa, sans-serif;
  font-size: 16px;
  cursor: pointer;
  margin: 0 0 0 40px;
`;
