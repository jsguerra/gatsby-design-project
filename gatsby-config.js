module.exports = {
  siteMetadata: {
    title: "Web Warrior",
    description: "web dev portfolio",
    copyright: 'This website is copyright 2021 Web Warrior',
    contact: 'me@thewebwarrioruk.com'
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    }
  ],
};
