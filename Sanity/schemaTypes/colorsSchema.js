import { defineField, defineType } from "sanity";


export const colors = defineType({
    name: 'colors',
    title: 'Colors (1, All in hex codes)',
    type: 'document',
    fields: [
      defineField({
        name: 'bgLight',
        title: 'Light Background',
        description: 'The main background color, designed to be a light color',
        type: 'string',
      }),
      defineField({
        name: 'bgDark',
        title: 'Dark Background',
        description: 'The secondary background color, used in middle "about us" window, "Request A Quote" button, and footer, designed to be dark',
        type: 'string'
      }),
      defineField({
        name: 'accent',
        title: 'Accent Color',
        description: 'Seen in the top in the "Call us!" section, and many others, designed to give the page some color',
        type: 'string'
      }),
      defineField({
        name: 'hover',
        title: 'Hover Color',
        description: 'The color you see when hovering over some elements, mainly in the nav in the desktop version',
        type: 'string'
      }),
      defineField({
        name: 'textLight',
        title: 'Light Text',
        description: 'The light text, that goes over the dark background',
        type: 'string'
      }),
      defineField({
        name: 'textDark',
        title: 'Dark Text',
        description: 'The dark text, that goes over the light background',
        type: 'string'
      }),
    ],
  })