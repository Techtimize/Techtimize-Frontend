import { Department } from "./departments";

type DepartmentId = Department | string

export interface jobProps{
    _id: string;
    jobTitle:string
    jobType: string;
    description: string;
    workMode:string;
    location:string;
    positionRequirement:string
    responsibilities:string
    departmentId: DepartmentId
}