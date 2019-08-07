const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  createPage({
    path: "/classes/*",
    matchPath: "/classes/:id",
    component: path.resolve(`src/pages/classes/index.js`),
  })
  createPage({
    path: "/trainer/*",
    matchPath: "/trainer/:id",
    component: path.resolve(`src/pages/trainers/index.js`),
  })
  createPage({
    path: "/studio/*",
    matchPath: "/studio/:id",
    component: path.resolve(`src/pages/studios/index.js`),
  })
  createPage({
    path: "/invoice/*",
    matchPath: "/invoice/",
    component: path.resolve(`src/pages/booking/index.js`),
  })
  createPage({
    path: "/myProfile/*",
    matchPath: "/myProfile/",
    component: path.resolve(`src/pages/profile/index.js`),
  })
  createPage({
    path: "/myBooking/*",
    matchPath: "/myBooking/",
    component: path.resolve(`src/pages/my_booking/index.js`),
  })
  createPage({
    path: "/myFav/*",
    matchPath: "/myFav/",
    component: path.resolve(`src/pages/my_fav/index.js`),
  })
  createPage({
    path: "/q&a/*",
    matchPath: "/q&a/",
    component: path.resolve(`src/pages/q_a/index.js`),
  })

  return null
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
