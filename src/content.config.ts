import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const repoSchema = z.object({
  title: z.string(),
  description: z.string(),
  techs: z.array(
    z.object({
      name: z.string(),
      icon: z.string(),
    })
  ),
  repoUrls: z.array(
    z.object({
      url: z.string(),
      label: z.string().optional(),
    })
  ),
  demoUrl: z.string().optional(),
  image: z.string(),
});

const reposEs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/repos/es" }),
  schema: repoSchema,
});

const reposEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/repos/en" }),
  schema: repoSchema,
});

export const collections = { "repos-es": reposEs, "repos-en": reposEn };
