import { ApiEndpoint } from "@/app/api/endpoints";
import projectsProps from "@/app/types/project.type";

export async function getProjects():Promise<projectsProps[]>{
    try {
        const response = await fetch(ApiEndpoint.PROJECTS, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}

