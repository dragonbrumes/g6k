import React from "react";
import { Link } from "gatsby";
import "./post.css";

import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  padding-left: 10px;
  background: #fdf0d5;
`

const Description = styled.p`
  padding-left: 10px;
`

const Author = styled.p`
padding-left: 10px;
`

const Post = ({ title, author, date, excerpt, path }) => (
  <Wrapper>
    <h2>{ title }</h2>
    <Description>{ excerpt }</Description>
    <p className="post-written-by">
      Written by { author } on { date }
    </p>
    <Link to={ path }>Read more</Link>
  </Wrapper>
);

export default Post;