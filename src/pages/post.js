import React from "react"
import { graphql } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Post from "../components/Post"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const Blog = ({data}) => (
  <Layout>
    <h1>Blog</h1>
    {console.log({data})}
    {/* {console.log({data})} */}
    { 
      data.allContentfulPost.edges.map(post => {
        const { title, author, date, excerpt, slug } = post.node;

        return (
          <Post
            title={title}
            author={author}
            date={date}
            excerpt={excerpt}
            key={`${date}__${title}`}
            path={slug}
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
  allContentfulPost {
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
