// Layout.js
import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import "./reset.css"
import Nav from "../components/Nav"
// import "./layout.css"

const Wrapper = styled("div")`
  background: #0b2027;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
  // grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: auto;
  }
`

const Header = styled("header")`
  background-color: brown;
  padding: 0;
  margin: 0;
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 10;
`

const Main = styled("main")`
  background: #0b2027;
  width: 100%;
  margin: 0 auto 0;
  grid-area: main;
`
const Footer = styled("footer")`
  background: #c6d8d3;
  height: 50px;
  padding: 20px;
  grid-area: footer;
`
const Layout = ({ children }) => (
  <Wrapper>
    <Header>
      <Nav />
    </Header>
    <Global
      styles={css`
        html,
        body {
          width: 100vw;
          height: 100vh;
          margin: 0;
        }
        h1 {
          font-size: 3em;
          color: white;
        }
        h2 {
          color: blue;
          padding-left: 10px;
        }
      `}
    />
    <Main>{children}</Main>
    <Footer>Footer</Footer>
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
