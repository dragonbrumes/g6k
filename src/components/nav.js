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
  // background: linear-gradient(#e66465, #9198e5);
  margin: 0;
  padding: 0;
  background-image: url(${topPhoto});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 10% 140%;
`

const NavBar = styled("nav")`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background: #d81e5b;
  padding: 0;
  margin: 0;
`

const MenuItem = styled.div`
  width: auto;
  height: 90%;
  padding: 0 15px 0 15px;
  text-align: center;
  // line-height: 200px;
  // flex-grow: 1;
  transition: 0.5s;
  font-size: 1.2em;
  // color: #fff;
  color: "#3a3335",
  text-decoration: none;
  // background: blue;
  & > a {
    padding: 0 15px 0 15px;
    color: #3a3335;
    text-decoration: none;
  }
  & :hover {
    background: #fdf0d5;
    color: #3a3335;
    text-decoration: none;
  }
  & :visited {
    text-decoration: none;
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
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  & > a {
    padding: 0 15px 0 15px;
    color: #fff;
    text-decoration: none;
  }
`

// const ActiveStyled = css`
// display: "block";
// width: "auto";
// margin: "0";
// padding: "0 15px 0 15px";
// backgroundColor: "#fdf0d5";
// color: "#3a3335";
// textDecoration: "none";
// `

// const TheLink = props => (
//   <StyledLink
//   to="/blog"
//   activeStyle={{
//     display: "block",
//     width: "auto",
//     margin: "0",
//     padding: "0 15px 0 15px",
//     backgroundColor: "#fdf0d5",
//     color: "#3a3335",
//     textDecoration: "none",
//   }}
// >
//   <MenuItem>Blog</MenuItem>
// </StyledLink> 
// )

const Nav = () => (
  <Container>
    <Top>
      <Logo src={logoQuack} alt="Logo" />
    </Top>
    <NavBar>
    <StyledLink
        to="/"
        activeStyle={{
          width: "auto",
          margin: "0",
          padding: "0 15px 0 15px",
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
          width: "auto",
          margin: "0",
          padding: "0 15px 0 15px",
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
          width: "auto",
          margin: "0",
          padding: "0 15px 0 15px",
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
          width: "auto",
          margin: "0",
          padding: "0 15px 0 15px",
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
