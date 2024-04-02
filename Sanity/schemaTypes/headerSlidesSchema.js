import { defineField, defineType } from "sanity";


export const headerSlides = defineType({
    name: 'headerSlides',
    title: 'Header Slides (2-5)',
    type: 'document',
    fields: [
      defineField({
          name: 'svg',
          title: 'Icon',
          description: 'The Icon at the top of the slide. Highly recommend .svg file type. Find some here: https://www.svgrepo.com/  ...and click "Download Vector"',
          type: 'image',
      }),
      defineField({
        name: 'title',
        title: 'Title',
        description: 'Main title text',
        type: 'string',
      }),
      defineField({
        name: 'image',
        title: 'Background Image',
        description: 'Background image for the slide',
        type: 'image',
      }),
      defineField({
        name: 'body',
        title: 'Body Text',
        description: 'The body text for the bottom of the slide',
        type: 'text',
        rows: 3,
      }),
      defineField({
        name: 'link',
        title: 'Link',
        description: 'Link to the correct sub-page (If wanted). \
        To work it must exactly match the Page Title of the sub-page',
        type: 'string',
      }),
    ],
  })