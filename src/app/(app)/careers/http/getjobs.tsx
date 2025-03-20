import getCareersJobs from "@/app/api/job/get-job";
import JobOpeningCard from "../components/JobOpeningCard";


export default async function GetJobsList(){
    const careerData = await getCareersJobs();
    return <JobOpeningCard jobs={careerData}/>
}