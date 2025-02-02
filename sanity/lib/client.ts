import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "zuswe0bk", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name (e.g., "production")
  apiVersion: "2023-01-01", // Use the latest API version
  useCdn: true, // Set to false for real-time data
});
