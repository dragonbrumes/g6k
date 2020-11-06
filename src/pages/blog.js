import React from "react"
import { graphql } from "gatsby"

import Post from "../components/Post"

import Layout from "../layout/layout"
// import SEO from "../components/seo"

const Blog = ({data}) => (
  <Layout>
    <h1>Blog</h1>
    {console.log({data})}
    {/* {console.log({data})} */}
    { 
      data.allContentfulPost.edges.map(edge => {
        const { id, title, author, date, excerpt, slug } = edge.node;

        return (
          <Post
            title={title}
            author={author}
            date={date}
            excerpt={excerpt}
            key={id}
            path={`/blog/${slug}`}
          />
        )
      })
    }
  </Layout>
)

export default Blog

// allContentfulPost(filter: { title: { eq: "Setting up the project" } }) {

export const AllBlogsQuery = graphql`
query {
  allContentfulPost(sort: { fields: date, order: DESC }) {
    edges {
      node {
        id
        title
        excerpt
        author
        childContentfulPostContentTextNode {
          childMarkdownRemark {
            html
          }
        }
        slug
        date(formatString: "Do MMMM, YYYY")
        image {
          fluid(maxWidth: 750) {
            srcSet
          }
        }
      }
    }
  }
}
`
