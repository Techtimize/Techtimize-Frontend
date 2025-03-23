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
    return <div>Job not found</div>;
  }

  return (
    <div className="relative">

<div className="flex items-center justify-center text-center mb-6">
  <PageHeader subHeading="Overview" heading={job.jobTitle} />
</div>


<div className="flex flex-row gap-x-6 text-2xl h-20 mt-8 border-b border-gray-300 ml-6">
  <Button className="bg-transparent text-black hover:bg-transparent ">{job.jobType}</Button>
  <Button className="bg-transparent text-black hover:bg-transparent ">{job.workMode}</Button>
  <Button className="bg-transparent text-black hover:bg-transparent ">{job.location}</Button>
  
  </div>
      <h5 className="xl:text-[20px] mb-[10px] text-black mt-4">Description</h5>

      <p className="text mb-[40px] text-tertiary">
        Techtimize is a dynamic and innovative tech company that specializes in JS frameworks, .Net, machine learning, and AI! We are passionate about creating cutting-edge software solutions that drive businesses forward and enhance user experiences. As a Full Stack Developer at Techtimize, you will have the opportunity to work on exciting projects, collaborate with a talented team, and make a significant impact in the world of technology.
      </p>

      <p className="text mb-[40px] text-tertiary">
        We are looking for a highly skilled and motivated Full Stack Developer to join our team. In this role, you will be responsible for designing, developing, and maintaining both front-end and back-end components of our software applications. You will work on a wide range of projects, from building user interfaces that delight users to optimizing server-side performance. Your expertise will be crucial in helping us deliver high-quality, scalable, and efficient software solutions.
      </p>

      <h5 className="xl:text-[20px] mb-[10px] text-black"> Key Responsibilities</h5>
      <ul className="text px-[1.2%] mb-[40px] list-disc text-tertiary pl-[5%] sm:pl-[2%]">
        {Array.isArray(job.responsibilities)
          ? job.responsibilities.map((item, index) => <li key={index}>{item}</li>)
          : <li>{job.responsibilities}</li>}
      </ul>

      <h5 className="xl:text-[20px] mb-[10px] text-black">Requirements</h5>
      <ul className="text px-[1.2%] mb-[40px] list-disc text-tertiary pl-[5%] sm:pl-[2%]">
        {Array.isArray(job.positionRequirement)
          ? job.positionRequirement.map((item, index) => <li key={index}>{item}</li>)
          : <li>{job.positionRequirement}</li>}
      </ul>

      <p className="text mb-[20px] text-tertiary">
        If you are passionate and ready to take on exciting challenges, we would love to hear from you. Join our team at Techtimize and be part of a culture that values innovation and creativity. Apply now to help us shape the future of technology! To apply, please send your resume and a cover letter to <b>hr@techtimize.co</b>.
      </p>

      <p className="text text-tertiary">
        Techtimize is an equal opportunity employer. We encourage individuals of all backgrounds to apply.
      </p>

  
      <div className="flex justify-center mt-8">
        <Link href="/application">
        <Button className="px-6 py-3 text-lg bg-blue-1 hover:bg-blue-1">Apply Now</Button>
        </Link>
      </div>
    </div>
  );
}
