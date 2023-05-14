import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `my-cv`,
    author: `Carlos Benavides`,
    siteUrl: `https://cbenavid.github.io/my-cv`,
  },
  pathPrefix: "/my-cv",
  graphqlTypegen: true,
  plugins: [
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
      },
    },
  ],
};

export default config;
