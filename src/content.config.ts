import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      // Optional while existing pages migrate. Stable IDs can match translations
      // later without coupling them to English titles or routes.
      extend: z.object({
        doc_id: z.string().optional(),
        lang: z.string().optional(),
        verified_release: z.string().optional(),
        reader_level: z.enum(['beginner', 'everyday', 'advanced']).optional(),
      }),
    }),
  }),
}
