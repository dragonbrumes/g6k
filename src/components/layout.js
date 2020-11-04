// Layout.js
import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import Nav from "./Nav"
import "./layout.css"

const Wrapper = styled("div")`
  background: #fdf0d5;
  display: grid;
  grid-template-columns: 15% auto 15%;
  grid-template-rows: auto;
  grid-template-areas: 
  "header header header"
  ".  main ."
  "footer footer footer";
  grid-gap: 1rem;
  `

const Header = styled("header")`
  background-color: brown;
  padding: 0;
  margin: 0 0 5px 0;
  grid-area: header;
  position: sticky; 
  top: 0;
`

const Main = styled("main")`
  background: #fdf0d5;
  max-width: 850px;
  margin: 5px auto 0 auto;
  grid-area: main;
`
const Footer = styled("footer")`
  background: #c6d8d3;
  height: 50px;
  padding: 20px;
  flex-shrink: 0;
  grid-area: footer;
`
const Layout = ({ children }) => (
  <Wrapper>
    <Header>
    <Nav />
    </Header>
    {/* <main className="main">{children}</main> */}
    <Global
        styles={css`
        html,body  {
          width: 100vw;
          height: 100vh;
          margin: 0;
        }
        body {
          display: flex;
          flex-direction: column;
        }
          div {
            // background: lightgrey;
            // color: white;
            font-family: "Segoe UI", Roboto;
          };
          h1 {
            // color: white;
            padding-left: 10px;
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
