import type { Metadata } from "next";
import Head from "next/head";

type PageParams = {
  params: { id: string };
};

type ExperienceResponse = {
  title: string;
  description: string;
  image_urls: string[];
};

async function fetchExperience(id: string): Promise<ExperienceResponse | null> {
  try {
    const res = await fetch(
      `https://getpublicexperienceinfo-4uowc42aza-uc.a.run.app/?id=${encodeURIComponent(
        id
      )}`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as ExperienceResponse;
    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const experience = await fetchExperience(params.id);

  if (!experience) {
    // Fallback to minimal metadata; root layout provides full defaults
    return {
      title: "DateWallet",
      description: "Find unique date experiences",
    };
  }

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

export default function ExperiencePage({ params }: PageParams) {
  // Minimal content; page exists mainly to provide dynamic metadata for previews
  return null;
}
