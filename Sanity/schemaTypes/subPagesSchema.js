import { defineField, defineType } from "sanity";


export const subPages = defineType({
    name: 'subPages',
    title: 'Sub-Pages (1-4)',
    type: 'document',
    fields: [
      defineField({
          name: 'image',
          title: 'Background Image',
          description: 'The background image for the header section',
          type: 'image',
      }),
      defineField({
        name: 'pageTitle',
        title: 'Page Title',
        description: 'One-word, will show up in navigation at the top, and will be the link in the browser',
        type: 'string',
      }),
      defineField({
        name: 'headerTitle',
        title: 'Header Title',
        description: 'The title of the header (The part with the background image)',
        type: 'string',
      }),
      defineField({
        name: 'headerText',
        title: 'Header Text',
        description: 'The short description under the header title',
        type: 'text',
        rows: 3,
      }),
      defineField({
        name: 'bodyTitle',
        title: 'Body Title',
        description: 'Secondary title of the page (The main part, no background image)',
        type: 'string',
      }),
      defineField({
        name: 'bodyText',
        title: 'Body Text',
        description: 'The main body text of the page',
        type: 'text',
      }),
    ],
  })