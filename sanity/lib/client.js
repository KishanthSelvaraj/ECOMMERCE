import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

 const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
})
export async function sanityFetch({ query }) {
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null; // or throw error depending on your error handling strategy
  }
}