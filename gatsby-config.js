module.exports = {
  siteMetadata: {
    title: `Micaela Galimberti`,
    description: `Hello there! I'm Mica,
    a Graphic & UX/UI Designer from Buenos Aires, Argentina.`,
    author: `@luckystoned`,
    siteUrl: `https://micaelagalimberti.gatsbyjs.io/`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Micaela Galimberti`,
        short_name: `micaela-galimberti`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#3349B5`,
        display: `minimal-ui`,
        icon: `src/images/mg-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
