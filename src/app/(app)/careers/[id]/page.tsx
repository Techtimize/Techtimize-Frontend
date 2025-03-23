
import { getJobById } from "@/app/api/job/[Id]/route";
import { jobProps } from "@/app/types/job.type";
import { generateMetadataFromBE } from "@/app/lib/utils";
import { Metadata } from "next";
import JobDescriptionPage from "../../job-description/page";


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = params;
    return generateMetadataFromBE(`careers/${id}`);
  }
  
export default async function JobDetails({ params }: { params: { id: string } }) {
  return <JobDescriptionPage params={params} />;
}
