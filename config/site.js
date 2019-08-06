module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Caerus", // Navigation and Site Title
  titleAlt: "Caerus", // Title for JSONLD
  description: "LESS HASSLE. MORE CLASSES",
  url: "https://gatsby-tutorial-starter.netlify.com", // Domain of your site. No trailing slash!
  siteUrl: "https://gatsby-tutorial-starter.netlify.com", // url + pathPrefix
  siteLanguage: "en", // Language Tag on <html> element
  logo: "static/logo/logo.png", // Used for SEO
  banner: "static/logo/banner.png",
  // JSONLD / Manifest
  favicon: "static/logo/favicon.png", // Used for manifest favicon generation
  shortName: "frond", // shortname for manifest. MUST be shorter than 12 characters
  author: "Plannit", // Author for schemaORGJSONLD
  themeColor: "#ff4200",
  backgroundColor: "#fff",
  social: {
    twitter: "@helloworld",
  },
}
