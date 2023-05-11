import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `my-cv`,
    siteUrl: `https://cbenavid.github.io/my-cv`,
  },
  pathPrefix: "/my-cv",
  graphqlTypegen: true,
  plugins: [],
};

export default config;
