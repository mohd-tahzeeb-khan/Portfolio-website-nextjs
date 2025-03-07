import * as prismic from "@prismicio/client";
import config from "../slicemachine.config.json";

export const repositoryName =process.env.NEXT_PUBLIC_API_URL;
console.log(repositoryName);
console.log(process.env.NEXT_PUBLIC_API_URL);
export const createClient = () => {
  return prismic.createClient(repositoryName, {
    accessToken: "" // Optional if using private content
  });
};
