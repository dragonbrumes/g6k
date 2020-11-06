//templates/blog-post.js

import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layout/Layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      author
      date
      title
      slug
      image {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const BlogPost = props => {
  console.log({ props })
  // {console.log(props.data.contentfulPost.title)}

  const { title, date, image } = props.data.contentfulPost
  return (
    <Layout>
      <SEO title={title} />
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{title}</h1>
        <span className="meta">Posted on {date}</span>
        {image && <div><Img className="featured" fluid={image.fluid} alt={title} /></div>}
        {/* {documentToReactComponents(props.data.contentfulPost.content.childMarkdownRemark.html)} */}
          <p
            dangerouslySetInnerHTML={{
              __html:
                props.data.contentfulPost.content.childMarkdownRemark.html,
            }}
          />
      </div>
    </Layout>
  )
}

export default BlogPost
