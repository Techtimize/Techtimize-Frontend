import { ScrollArea } from "@radix-ui/react-scroll-area";
import { JobOpeningCard } from "./job-opening-card";
import { API, ApiEndpoint } from "@/app/api";
import { useEffect, useState } from "react";
import { jobProps } from "@/app/types/job.type";

const JobOpenings = ({ departmentId }: { departmentId: string | null }) => {
  const [jobOpenings, setJobOpenings] = useState<jobProps[]>([]);

  useEffect(() => {
    let ignore = false;
    (async () => {
      const url = departmentId
        ? API.DEPARTMENT_JOB_OPENINGS(departmentId)
        : API.JOB_OPENING;
      const response = await fetch(url);
      const result = await response.json();
      if (!ignore) {
        setJobOpenings(result.data);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [departmentId]);

  return (
    <ScrollArea className="h-[800px] overflow-y-auto flex-1 flex flex-col gap-y-6 p-2">
      {jobOpenings?.map((opening) => (
        <JobOpeningCard key={opening._id} jobOpening={opening} />
      ))}
    </ScrollArea>
  );
};

export { JobOpenings };
