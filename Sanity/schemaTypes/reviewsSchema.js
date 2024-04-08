import { defineField, defineType } from "sanity";


export const reviews = defineType({
    name: 'reviews',
    title: 'Reviews (2-10)',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Name',
        description: 'Who left the review?',
        type: 'string',
      }),
      defineField({
        name: 'review',
        title: 'Review',
        description: 'Review text',
        type: 'text',
        rows: 10,
      }),
    ],
  })