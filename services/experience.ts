export type ExperienceResponse = {
  title: string;
  description: string;
  image_urls: string[];
};

export async function fetchExperience(
  expId: string
): Promise<ExperienceResponse | null> {
  try {
    const res = await fetch(
      `https://getpublicexperienceinfo-4uowc42aza-uc.a.run.app/?id=${encodeURIComponent(
        expId
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
