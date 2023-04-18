import { IProject } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/config-client";
import { IPage } from "@/types/Page";

export const getProjects = async (): Promise<IProject[]> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,

        _createdAt,

        name,

        "slug": slug.current,

        "image": image.asset->url,

        url,

        content

    }`
  );
};

export const getProject = async (slug: string): Promise<IProject> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,

        _createdAt,

        name,

        "slug": slug.current,

        "image": image.asset->url,

        url,

        content

    }`,
    { slug }
  );
};

export async function getPages(): Promise<IPage[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPage(slug: string): Promise<IPage> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}
