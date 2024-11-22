<<<<<<< HEAD
import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

interface LayoutProps {
    children : React.ReactNode;
}

function Layout({ children } : LayoutProps) {
  return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
=======
import styled from "styled-components";
import Footer from "../common/Footer";
import Header from "../common/Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <LayoutStyle>{children}</LayoutStyle>
      <Footer />
>>>>>>> 067a098 (Final)
    </>
  );
}

<<<<<<< HEAD
export default Layout
=======
const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;

  @media screen AND ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 20px 12px;
  }
`;

export default Layout;
>>>>>>> 067a098 (Final)
