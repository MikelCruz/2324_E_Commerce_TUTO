import imageUrlBuilder from "@sanity/image-url/lib/types/builder";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "f5u609gw",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}