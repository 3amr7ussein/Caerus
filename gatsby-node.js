const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  createPage({
    path: "/classes/*",
    matchPath: "/classes/:id",
    component: path.resolve(`src/pages/Classes/index.js`),
  })
  createPage({
    path: "/trainer/*",
    matchPath: "/trainer/:id",
    component: path.resolve(`src/pages/Trainers/index.js`),
  })
  createPage({
    path: "/studio/*",
    matchPath: "/studio/:id",
    component: path.resolve(`src/pages/Studios/index.js`),
  })
  createPage({
    path: "/invoice/*",
    matchPath: "/invoice/",
    component: path.resolve(`src/pages/Booking/index.js`),
  })
  createPage({
    path: "/myProfile/*",
    matchPath: "/myProfile/",
    component: path.resolve(`src/pages/Profile/index.js`),
  })
  createPage({
    path: "/favorites/*",
    matchPath: "/favorites/",
    component: path.resolve(`src/pages/favorites/index.js`),
  })
  createPage({
    path: "/q&a/*",
    matchPath: "/q&a/",
    component: path.resolve(`src/pages/QnA/index.js`),
  })
  createPage({
    path: "/checkout/*",
    matchPath: "/checkout/",
    component: path.resolve(`src/pages/checkout/index.js`),
  })
  createPage({
    path: "/confirmation/*",
    matchPath: "/confirmation/:id",
    component: path.resolve(`src/pages/OrderConfirmation/index.js`),
  })
  createPage({
    path: "/success/*",
    matchPath: "/success/",
    component: path.resolve(`src/pages/SuccessPayment/index.js`),
  })
  createPage({
    path: "/payments/*",
    matchPath: "/payments/",
    component: path.resolve(`src/pages/payments/index.js`),
  })
  createPage({
    path: "/editprofile/*",
    matchPath: "/editprofile/",
    component: path.resolve(`src/pages/editProfile/index.js`),
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
