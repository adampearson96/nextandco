module.exports = {
  siteMetadata: {
    title: `Next&Co`,
    description: `Continuous Improvement`,
    author: `@nextandco`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `case studies`,
        path: `${__dirname}/src/case-studies`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Next&Co`,
        short_name: `Next&Co`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `fullscreen`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
