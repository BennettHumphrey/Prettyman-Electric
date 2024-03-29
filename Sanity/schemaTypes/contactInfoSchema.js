import { defineField, defineType } from "sanity";


export const contactInfo = defineType({
    name: 'contactInfo',
    title: 'Contact Info (1)',
    type: 'document',
    fields: [
      defineField({
        name: 'email',
        title: 'Email',
        description: 'Your email address',
        type: 'string',
      }),
      defineField({
        name: 'phone',
        title: 'Phone Number',
        description: 'Your phone number',
        type: 'string',
      }),
      defineField({
        name: 'address',
        title: 'Address',
        description: 'Your address',
        type: 'string',
      }),
    ],
  })