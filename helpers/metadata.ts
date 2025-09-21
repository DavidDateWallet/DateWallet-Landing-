import type { Metadata } from "next";
import {
  fetchExperience,
  type ExperienceResponse,
} from "@/services/experience";

const defaultMetadata: Metadata = {
  title: "DateWallet",
  description: "Find unique date experiences",
};

export async function generateExperienceMetadata(
  expId?: string
): Promise<Metadata> {
  if (!expId) return defaultMetadata;

  const experience: ExperienceResponse | null = await fetchExperience(expId);
  if (!experience) return defaultMetadata;

  const firstImage = experience.image_urls?.[0];

  return {
    title: `${experience.title} | DateWallet`,
    description: experience.description,
    openGraph: {
      title: experience.title,
      description: experience.description,
      images: firstImage
        ? [
            {
              url: firstImage,
              width: 1200,
              height: 630,
              alt: experience.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: experience.title,
      description: experience.description,
      images: firstImage ? [firstImage] : undefined,
    },
  };
}
