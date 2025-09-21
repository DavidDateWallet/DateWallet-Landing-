import type { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  fetchExperience,
  type ExperienceResponse,
} from "@/services/experience";
import { generateExperienceMetadata } from "@/helpers/metadata";

type PageParams = {
  params: { params: string[] };
};

// moved: fetchExperience is now in services/experience

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const expId = params.params[0];
  return generateExperienceMetadata(expId);
}

export default function ExperiencePage({ params }: PageParams) {
  // Redirect to home page since this is meant for app deep links
  // The metadata is still generated for social media previews
  // You can access both expId and bookingId here if needed for the redirect logic
  redirect("/");
}
