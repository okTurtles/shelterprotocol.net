import { defineCollection, z } from 'astro:content'
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	i18n: defineCollection({ type: 'data', schema: i18nSchema() }) // reference: https://starlight.astro.build/guides/i18n/
}
