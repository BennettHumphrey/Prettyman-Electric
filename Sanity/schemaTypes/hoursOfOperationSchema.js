import { defineField, defineType } from "sanity";


export const hoursOfOperation = defineType({
    name: 'hoursOfOperation',
    title: 'Hours of Operation (1-4 rows)',
    type: 'document',
    fields: [
      defineField({
        name: 'hours',
        title: 'Hours',
        description: 'Days and hours open, for example: "Mon - Fri 9AM - 5PM"',
        type: 'string',
      }),
    ],
  })