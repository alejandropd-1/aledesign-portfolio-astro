import { defineCollection, z } from 'astro:content';

const jobsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    place: z.string(),
    type: z.string(),
    period: z.string(),
    tags: z.array(z.string()),
    technologies: z.array(z.string()).optional(),
    industry: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number(),
    status: z.enum(['published', 'draft']).default('published'),
    liveUrl: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'jobs': jobsCollection,
};