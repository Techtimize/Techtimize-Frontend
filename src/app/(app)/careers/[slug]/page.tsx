import { generateMetadataFromBE } from "@/app/lib/utils";
import { Metadata } from "next";
import JobDescriptionPage from "../../job-description/page";

const generateIdFromSlug = (slug: string): string => {
  const slugSegments = slug.split("-");
  const id = slugSegments[slugSegments.length - 1];
  return id;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const id = generateIdFromSlug(slug);
  return generateMetadataFromBE(`careers/${id}`);
}

export default async function JobDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = generateIdFromSlug(slug);
  return <JobDescriptionPage id={id} />;
}
