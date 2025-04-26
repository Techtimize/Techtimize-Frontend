"use client";

import { ApiEndpoint } from "@/app/api";
import { Department } from "@/app/types/departments";
import { jobProps } from "@/app/types/job.type";
import { cn } from "@/lib/utils";
import { PropsWithChildren, useEffect, useState } from "react";
import { JobOpeningCard } from "./job-opening-card";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const JobOpenings = ({ departmentId }: { departmentId: string | null }) => {
  const [jobOpenings, setJobOpenings] = useState<jobProps[]>([]);
  useEffect(() => {
    let ignore = false;
    (async () => {
      const url = departmentId
        ? ApiEndpoint.DEPARTMENT_JOB_OPENINGS(departmentId)
        : ApiEndpoint.JOB_TYPE;
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
    // <div className="p-2 flex-1 flex flex-col gap-y-6">
    <ScrollArea className="h-[800px] overflow-y-auto flex-1 flex flex-col gap-y-6 p-2">
      {jobOpenings?.map((opening) => (
        <JobOpeningCard key={opening._id} jobOpening={opening} />
      ))}
    </ScrollArea>
    //  </div>
  );
};

const DepartmentFilter = ({
  onClick,
  isActive,
  children,
}: PropsWithChildren<{
  onClick: () => void;
  isActive: boolean;
}>) => {
  return (
    <span
      className={cn("text-[15px] mb-5 lg:mb-0 lg:text-[20px] satoshi-variable w-max cursor-pointer p-1", {
        "text-primary-highlight": isActive,
      })}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

const Departments = ({ departments }: { departments: Department[] }) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );

  return (
    <div className="flex flex-col lg:flex-row gap-x-4 px-8 lg:px-12">
      <div className="flex flex-row flex-wrap sm:flex-nowrap lg:flex-col justify-between lg:justify-start sm:gap-y-10 w-100 lg:w-1/3 relative">
        <div className="h-[450px] w-[3px] absolute left-[60%] [box-shadow:0_-2px_15px_0px_#00000040] hidden lg:block"></div>
        <DepartmentFilter
          onClick={() => setSelectedDepartment(null)}
          isActive={selectedDepartment === null}
        >
          All Departments
        </DepartmentFilter>
        {departments?.map((department) => (
          <DepartmentFilter
            key={department._id}
            onClick={() => setSelectedDepartment(department._id)}
            isActive={selectedDepartment === department._id}
          >
            {department.name}
          </DepartmentFilter>
        ))}
      </div>
      <JobOpenings departmentId={selectedDepartment} />
    </div>
  );
};

export { Departments };
