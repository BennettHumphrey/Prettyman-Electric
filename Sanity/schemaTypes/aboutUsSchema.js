import { defineField, defineType } from "sanity";

export const mainAboutUs = defineType({
    name: 'mainAboutUs',
    title: 'Main About Us (1)',
    type: 'document',
    fields: [
      defineField({
        name: 'Title',
        description: 'Has a colored background, top of About Us section',
        type: 'string',
      }),
      defineField({
        name: 'Body',
        description: 'Body text under title',
        type: 'text',
        rows: 10,
      }),
    ],
  })



export const aboutUsContainers = defineType({
    name: 'aboutUsContainers',
    title: 'About Us Containers (3)',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        description: '2-3 words at the top of each container',
        type: 'string',
      }),
      defineField({
        name: 'body',
        title: 'Body',
        description: 'Body text under title of each container',
        type: 'text',
        rows: 10,
      }),
    ],
  })