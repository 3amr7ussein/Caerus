const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   // createPage({
//   //   path: "/classes/*",
//   //   matchPath: "/classes/:id",
//   //   component: path.resolve(`./src/pages/trainers/index.js`),
//   // })
//   createPage({
//     path: "/trainer/*",
//     matchPath: "/trainer/:id",
//     component: path.resolve(`src/pages/trainers/index.js`),
//   })
//   // createPage({
//   //   path: "/studio/*",
//   //   matchPath: "/studio/:id",
//   //   component: path.resolve(`src/pages/studios/index.js`),
//   // })
//   // createPage({
//   //   path: "/invoice/*",
//   //   matchPath: "/invoice/",
//   //   component: path.resolve(`src/pages/booking/index.js`),
//   // })
//   // createPage({
//   //   path: "/myProfile/*",
//   //   matchPath: "/myProfile/",
//   //   component: path.resolve(`src/pages/profile/index.js`),
//   // })
//   // createPage({
//   //   path: "/myBooking/*",
//   //   matchPath: "/myBooking/",
//   //   component: path.resolve(`src/pages/my_booking/index.js`),
//   // })
//   // createPage({
//   //   path: "/myFav/*",
//   //   matchPath: "/myFav/",
//   //   component: path.resolve(`src/pages/my_fav/index.js`),
//   // })
//   // createPage({
//   //   path: "/q&a/*",
//   //   matchPath: "/q&a/",
//   //   component: path.resolve(`src/pages/q_a/index.js`),
//   // })

//   return null
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    // posts.forEach((post, index) => {
    //   const previous = index === posts.length - 1 ? null : posts[index + 1].node
    //   const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: "/classes/*",
      matchPath: "/classes/:id",
      component: path.resolve(`index.js`),
    })
    // createPage({
    //   path: "/trainer/*",
    //   matchPath: "/trainer/:id",
    //   component: path.resolve(`src/pages/trainers/index.js`),
    // })
    //   createPage({
    //     path: "/studio/*",
    //     matchPath: "/studio/:id",
    //     component: path.resolve(`src/pages/studios/index.js`),
    //   })
    //   createPage({
    //     path: "/invoice/*",
    //     matchPath: "/invoice/",
    //     component: path.resolve(`src/pages/booking/index.js`),
    //   })
    //   createPage({
    //     path: "/myProfile/*",
    //     matchPath: "/myProfile/",
    //     component: path.resolve(`src/pages/profile/index.js`),
    //   })
    //   createPage({
    //     path: "/myBooking/*",
    //     matchPath: "/myBooking/",
    //     component: path.resolve(`src/pages/my_booking/index.js`),
    //   })
    //   createPage({
    //     path: "/myFav/*",
    //     matchPath: "/myFav/",
    //     component: path.resolve(`src/pages/my_fav/index.js`),
    //   })
    //   createPage({
    //     path: "/q&a/*",
    //     matchPath: "/q&a/",
    //     component: path.resolve(`src/pages/q_a/index.js`),
    //   })

    // })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "babel-plugin-import",
    options: {
      libraryName: "antd",
      style: true,
    },
  })
}
// exports.modifyBabelrc = ({ babelrc }) => ({
//   ...babelrc,
//   plugins: babelrc.plugins.concat([
//     "transform-decorators-legacy",
//     "transform-regenerator",
//   ]),
// })
