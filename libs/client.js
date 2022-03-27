import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'cti-tl',
  apiKey: process.env.API_KEY,
});