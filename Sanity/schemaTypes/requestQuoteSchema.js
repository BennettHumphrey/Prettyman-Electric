import { defineField, defineType } from "sanity";

export const requestQuote = defineType({
    name: 'requestQuote',
    title: 'Request Quote Section (1)',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        description: 'Has a colored background, between reviews and about us section',
        type: 'string',
      }),
    ],
  })
