import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "6fdihkss",

  dataset: "production",

  title: "My personal website",

  apiVersion: "2023-11-04",

  basePath: "/admin",

  plugins: [deskTool()],

  schema: { types: schemas },
});

export default config;
