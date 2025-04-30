"use client";

import { Department } from "@/app/types/departments";
import { useState } from "react";
import { JobOpenings } from "./job-openings";
import { DepartmentFilter } from "./department-filter";

const Departments = ({ departments }: { departments: Department[] }) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );

  return (
    <div className="flex flex-col lg:flex-row gap-x-4 px-8 lg:px-12">
      <div className="flex flex-row flex-wrap sm:flex-nowrap lg:flex-col justify-between lg:justify-start sm:gap-y-10 w-100 lg:w-1/4 relative">
        <div className="h-[450px] w-[2px] absolute left-[75%] [box-shadow:0_-2px_15px_0px_#00000040] hidden lg:block"></div>
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
