/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `itcomnet-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image","gatsby-plugin-netlify", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp","gatsby-plugin-postcss", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/logo.png',
    },
  },
]
};