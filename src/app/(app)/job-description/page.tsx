import type { jobProps } from "@/app/types/job.type";
import getCareersJobs from "@/app/api/job/get-job";
import PageHeader from "@/app/components/PageHeader/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function JobDescriptionPage({ params }: { params: { id: string } }) {
  const jobdetails = await getCareersJobs();
  const jobId = params.id;
  const job: jobProps | undefined = jobdetails.find((job: jobProps) => job._id === jobId);

  if (!job) {
    return <div className="text-center py-10">Job not found</div>;
  }

  return (
    <div className="relative p-6 md:p-8 lg:p-10 max-w-4xl mx-auto"> {/* Added padding and centered content */}
      
      {/* Header Section */}
      <div className="flex items-center justify-center text-center mb-6">
        <PageHeader subHeading="Overview" heading={job.jobTitle} />
      </div>

      {/* Job Type, Work Mode, and Location */}
      <div className="flex flex-wrap gap-4 text-lg border-b border-gray-300 pb-4 mb-6">
        <Button className="bg-transparent text-black hover:bg-gray-100">{job.jobType}</Button>
        <Button className="bg-transparent text-black hover:bg-gray-100">{job.workMode}</Button>
        <Button className="bg-transparent text-black hover:bg-gray-100">{job.location}</Button>
      </div>

      {/* Description Section */}
      <h5 className="text-xl font-semibold mb-3">Description</h5>
      <p className="text-gray-700 mb-6">
        Techtimize is a dynamic and innovative tech company that specializes in JS frameworks, .Net, machine learning, and AI! We are passionate about creating cutting-edge software solutions that drive businesses forward and enhance user experiences. As a Full Stack Developer at Techtimize, you will have the opportunity to work on exciting projects, collaborate with a talented team, and make a significant impact in the world of technology.
      </p>

      {/* Responsibilities Section */}
      <h5 className="text-xl font-semibold mb-3">Key Responsibilities</h5>
      <ul className="list-disc pl-6 sm:pl-4 text-gray-700 mb-6">
        {Array.isArray(job.responsibilities)
          ? job.responsibilities.map((item, index) => <li key={index}>{item}</li>)
          : <li>{job.responsibilities}</li>}
      </ul>

      {/* Requirements Section */}
      <h5 className="text-xl font-semibold mb-3">Requirements</h5>
      <ul className="list-disc pl-6 sm:pl-4 text-gray-700 mb-6">
        {Array.isArray(job.positionRequirement)
          ? job.positionRequirement.map((item, index) => <li key={index}>{item}</li>)
          : <li>{job.positionRequirement}</li>}
      </ul>

      {/* Additional Info */}
      <p className="text-gray-700 mb-6">
        If you are passionate and ready to take on exciting challenges, we would love to hear from you. Join our team at Techtimize and be part of a culture that values innovation and creativity. Apply now to help us shape the future of technology! To apply, please send your resume and a cover letter to <b>hr@techtimize.co</b>.
      </p>

      <p className="text-gray-700">
        Techtimize is an equal opportunity employer. We encourage individuals of all backgrounds to apply.
      </p>

      {/* Apply Now Button */}
      <div className="flex justify-center mt-8">
        <Link href="/application">
          <Button className="px-6 py-3 text-lg bg-blue-1 hover:bg-blue-1 text-white rounded-md">
            Apply Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
