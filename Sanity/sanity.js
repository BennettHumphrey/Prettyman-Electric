import { createClient } from 'https://esm.sh/@sanity/client' 

const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID;

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-03-27', // use current date (YYYY-MM-DD) to target the latest API version
})



export default sanityClient