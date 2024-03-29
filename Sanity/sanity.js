import { createClient } from 'https://esm.sh/@sanity/client' 

// TODO: hide projectId in .env

export const sanityClient = createClient({
  projectId: '50mhnpl5',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-03-27', // use current date (YYYY-MM-DD) to target the latest API version
})



export default sanityClient