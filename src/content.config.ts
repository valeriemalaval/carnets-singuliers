import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const carnets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/carnets' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['contre-jour', 'hors-piste', 'contrebande']),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    teaser: z.string().optional(),
    stub: z.boolean().optional(),
  }),
});

export const collections = { carnets };
