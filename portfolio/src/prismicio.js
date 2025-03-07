import * as prismic from "@prismicio/client";
import config from "../slicemachine.config.json";

export const repositoryName ="https://tahzeeb-portfolio.cdn.prismic.io/api/v2";

export const createClient = () => {
  return prismic.createClient(repositoryName, {
    accessToken: "" // Optional if using private content
  });
};
