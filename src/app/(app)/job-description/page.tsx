import JobDescription from './components/JobDescription';
import type { Metadata } from 'next';
import { generateMetadataFromBE } from "@/app/lib/utils";
 

export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("job-description");
}

export default function JobDescriptionPage() {
  return <JobDescription />;
}