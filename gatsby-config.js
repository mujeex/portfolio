const dotenv= require('dotenv')

if(process.env.NODE_ENV === 'production'){
  dotenv.config()
};
module.exports = {
  siteMetadata: {
    title: `A portfolio website for a front-end developer named Mujahid Bappai`,
    description: `A website to host all my projects on front-end developer alongside my resume.`,
    author: `Mujahid Bappai`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   }
    // }
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/https://thirsty-babbage-7ba1e6.netlify.com/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
     
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
          {
          family: `Ubuntu`,
          variants: [`400`, `700`]
        },
        {
          family: `Work Sans`,
          variants: [`200`,`300`,`400`,`700`]
        },
        {
          family: `Saira Condensed`,
          variants: [`400`, `600`,`700`]
        },
        {
          family: `Lekton`,
          variants: [`100`,`200`,`300`,`400`, `600`,`700`]
        },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options:{
        spaceId:`yshhld8c2yn7`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ],
}
