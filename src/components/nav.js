import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import logoQuack from "../../content/assets/logo.png"
import topPhoto from "../../content/assets/topPhoto.jpg"

const Container = styled.div`
  margin: auto;
`
const Top = styled.div`
  max-height: 96px;
  background: linear-gradient(#e66465, #9198e5);
  margin: 0;
  padding: 0;
  background-image: url(${topPhoto});
  background-repeat: no-repeat;
  background-attachment: fixed;
  // background-size: cover;
  background-position: 10% 140%;
`

const NavBar = styled("nav")`
  background: #eb5e55;
  padding: 0px;
  margin: 0px;
  // border: 1px solid red;
  align-items: center;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 0 3px 0;
  margin: 0;
`

const NavListItem = styled.li`
  margin: 0 24px 0 0;
  font-family: "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  font-size: 1em;
  & > a {
    color: #f0dcca;
    text-decoration: none;
    border-bottom: 2px transparent;
    transition: border 0.1s linear;
  }
  & > a:hover {
    // border-bottom: 2px solid #cdc6a5;
    background-color: #fdf0d5;
    color: #3a3335;
  }
`

const Logo = styled.img`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 96px;
  width: 120px;
  height: 96px;
  margin: 0;
`

const Nav = props => (
  <Container>
    <Top>
      <Logo src={logoQuack} alt="Logo" />
    </Top>
    <NavBar>
      <NavList>
        <NavListItem>
          <Link activeStyle={{ backgroundColor: "#fdf0d5", color: '#3a3335' }} to="/">
            Home
          </Link>
        </NavListItem>
        <NavListItem>
          <Link activeStyle={{ backgroundColor: "#cdc6a5" }} to="/about">
            About
          </Link>
        </NavListItem>
        <NavListItem>
          <Link activeStyle={{ borderBottom: "2px solid #a64ac9" }} to="/blog">
            Blog
          </Link>
        </NavListItem>
        <NavListItem>
          <Link
            activeStyle={{ borderBottom: "2px solid #a64ac9" }}
            to="/contact"
          >
            Contact
          </Link>
        </NavListItem>
      </NavList>
    </NavBar>
  </Container>
)

export default Nav
