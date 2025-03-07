import * as prismic from "@prismicio/client";
import config from "../slicemachine.config.json";

export const repositoryName =process.env.NEXT_PUBLIC_API_URL;
console.log("repository naame is",repositoryName);
console.log("URL is",process.env);
export const createClient = () => {
  return prismic.createClient(repositoryName, {
    accessToken: "" // Optional if using private content
  });
};
