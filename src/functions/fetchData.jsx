import sanityClient from "../../Sanity/sanity";




export const fetchData = async (func, query) => {
    try {
      const data = await sanityClient.fetch(query);
      func(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };