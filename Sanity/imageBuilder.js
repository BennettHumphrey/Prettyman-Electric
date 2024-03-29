import sanityClient from './sanity'
import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source) {
  return builder.image(source)
}