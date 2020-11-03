const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
  query {
    allContentfulPost(      
      sort: { fields: date, order: ASC }      
      limit: 1000
    ) {
      edges{
        node {
          id
          slug
        }
      }
      
    }
  }
  `)
  response.data.allContentfulPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}