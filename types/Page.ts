import { PortableTextBlock } from "sanity";

export interface IPage {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
}
