import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import logoQuack from "../../content/assets/logo.png"
import topPhoto from "../../content/assets/topPhoto.jpg"

const Container = styled.div`
  margin: auto;
`

const NavBar = styled("nav")`
  height: 40px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  background: #40798c;
  padding: 0;
  margin: 0;
  width: auto;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  @media screen and (max-width: 480) {
    justify-content: center;
  }
`

const MenuItem = styled.div`
  height: 100%;
  padding: 0 15px 0 15px;
  text-align: right;
  transition: 0.5s;
  font-size: 1.2em;
  color: "#3a3335",
  text-decoration: none;
  & > a {
    height: 40px;
    padding: 0 15px 0 15px;
    color: #3a3335;
    text-decoration: none;
  }
  & :hover {
    padding: 10px 15px 10px 15px;
    background: #fdf0d5;
    color: #3a3335;
    text-decoration: none;
  }
  // & :visited {
  //   text-decoration: none;
  // }
  
  @media screen and (max-width: 768px) {
   padding: 0 5px 0 5px;
    }  
    @media screen and (max-width: 480) {
      padding: 0 5px 0 5px;
 }
 `

const Top = styled.div`
  max-height: 110px;
  margin: 0;
  padding: 0;
  background-image: url(${topPhoto});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 10% 140%;
`
const Logo = styled.img`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 96px;
  width: 120px;
  height: 96px;
  margin: 0;
`
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  & :last-child {
    margin-right: 30px;
  }
  & > a {
    // padding: 0 15px 0 15px;
    height: 40px;
    color: #fff;
    text-decoration: none;
  }
`
const Nav = () => (
  <Container>
    {/* <Top>
      <Logo src={logoQuack} alt="Logo" />
    </Top> */}
    <NavBar>
      <StyledLink
        to="/"
        activeStyle={{
          padding: "15px 0 14px 0",
          backgroundColor: "#fdf0d5",
          color: "#3a3335",
          textDecoration: "none",
        }}
      >
        <MenuItem>Home</MenuItem>
      </StyledLink>

      <StyledLink
        to="/blog"
        activeStyle={{
          padding: "15px 0 14px 0",
          backgroundColor: "#fdf0d5",
          color: "#3a3335",
          textDecoration: "none",
        }}
      >
        <MenuItem>Blog</MenuItem>
      </StyledLink>

      <StyledLink
        to="/about"
        activeStyle={{
          padding: "15px 0 14px 0",
          backgroundColor: "#fdf0d5",
          color: "#3a3335",
          textDecoration: "none",
        }}
      >
        <MenuItem>About</MenuItem>
      </StyledLink>

      <StyledLink
        to="/contact"
        activeStyle={{
          padding: "15px 0 14px 0",
          backgroundColor: "#fdf0d5",
          color: "#3a3335",
          textDecoration: "none",
        }}
      >
        <MenuItem>Contact</MenuItem>
      </StyledLink>
    </NavBar>
  </Container>
)

export default Nav
