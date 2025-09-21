import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { generateExperienceMetadata } from "@/helpers/metadata";

type PageSearchParams = {
  searchParams: { [key: string]: string };
};

/**
 * Generate metadata for the experience page
 * @param searchParams - The search params
 *
 * Note: Nextjs givs us the search param so we
 * do not need to define it in this file. Check out for more details:
 * https://medium.com/@lucarestagno/query-string-params-in-next-js-14-with-app-router-df44c8efa1f9
 * @returns The metadata
 */
export async function generateMetadata({
  searchParams,
}: PageSearchParams): Promise<Metadata> {
  // errors occur if we do not await the searchParams
  const { experienceId } = await searchParams;
  return generateExperienceMetadata(experienceId);
}

export default function ExperiencePage() {
  // Redirect to home page since this is meant for app deep links
  // The metadata is still generated for social media previews
  // You can access both expId and bookingId here if needed for the redirect logic
  // redirect("/");
}
