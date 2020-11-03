import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// import Img from "gatsby-image"
import Layout from "../components/layout"
// import SEO from "../components/seo"

const Blog = ({data}) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       allContentfulPost(filter: { title: { eq: "Setting up the project" } }) {
  //         edges {
  //           node {
  //             id
  //             title
  //             excerpt
  //             childContentfulPostContentTextNode {
  //               childMarkdownRemark {
  //                 html
  //               }
  //             }
  //             slug
  //             date(formatString: "Do MMMM, YYYY")
  //             image {
  //               fluid(maxWidth: 750) {
  //                 srcSet
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  return (
    <Layout>
      <h1>Blog</h1>
      {console.log(data.allContentfulPost.edges)}
      <ul>
        {data.allContentfulPost.edges.map(edge => {
          return (
            <li key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <p className="content">
                <p

                  dangerouslySetInnerHTML={{

                    __html: edge.node.childContentfulPostContentTextNode.childMarkdownRemark.html || edge.node.excerpt,

                  }}

                />
                {/* {documentToReactComponents(edge.node.content.json)} */}
                {/* {edge.node.childContentfulDivingCentersExcerptRichTextNode.json} */}
              </p>
              {/* {edge.node.image && (
                <Img
                  className="featured"
                  fluid={edge.node.image.fluid}
                  alt={edge.node.title}
                />
              )} */}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog

export const AllBlogsQuery = graphql`
query {
  allContentfulPost(filter: { title: { eq: "Setting up the project" } }) {
    edges {
      node {
        id
        title
        excerpt
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
