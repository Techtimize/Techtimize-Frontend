import { JobOpeningCard } from "./job-opening-card";
import { API } from "@/app/api";
import { useEffect, useState } from "react";
import { jobProps } from "@/app/types/job.type";
import { getPaginatedRecords } from "../util";
import { ITEMS_PER_PAGE } from "../data/constants";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const JobOpenings = ({ departmentId }: { departmentId: string | null }) => {
  const [jobOpenings, setJobOpenings] = useState<jobProps[]>([]);
  const [paginatedData, setPaginatedData] = useState<jobProps[]>();
  const [page, setPage] = useState<number>(1);
  const totalPages = Math.ceil(jobOpenings.length / ITEMS_PER_PAGE) || 1;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleNavigation = (nextPage: number) => {
    setPage(nextPage);
    setPaginatedData(
      getPaginatedRecords<jobProps>(nextPage, ITEMS_PER_PAGE, jobOpenings)
    );
  };

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
        setPaginatedData(
          getPaginatedRecords<jobProps>(page, ITEMS_PER_PAGE, result.data)
        );
      }
    })();

    return () => {
      ignore = true;
    };
  }, [departmentId]);

  return (
    <div className="h-[700px] flex-1 flex flex-col gap-y-6 p-2">
      <div className="flex-1 gap-y-6 flex flex-col">
        {paginatedData?.map((opening) => (
          <JobOpeningCard key={opening._id} jobOpening={opening} />
        ))}
      </div>
      <div className="flex gap-x-8 justify-center items-center flex-wrap">
        <button
          className="disabled:cursor-not-allowed border border-gray rounded-md"
          onClick={() => handleNavigation(page - 1)}
          disabled={page === 1}
        >
          <ChevronLeftIcon
            className={cn("text-blue-1", {
              "text-lightGrey": page === 1,
            })}
          />
        </button>
        {pages.map((p) => (
          <button
            onClick={() => handleNavigation(p)}
            key={p}
            className={cn("border border-gray rounded-md px-3", {
              "text-blue-1 bg-blue-1 text-white": p === page,
            })}
          >
            {p}
          </button>
        ))}
        <button
          className="disabled:cursor-not-allowed border border-gray rounded-md"
          disabled={page === totalPages}
          onClick={() => handleNavigation(page + 1)}
        >
          <ChevronRightIcon
            className={cn("text-blue-1", {
              "text-lightGrey": page === totalPages,
            })}
          />
        </button>
      </div>
    </div>
  );
};

export { JobOpenings };
