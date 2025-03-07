import { ApiEndpoint } from "../api";
import projectsProps from "@/app/types/project.type";

export async function getProjects():Promise<projectsProps[]>{
    try {
        const response = await fetch(ApiEndpoint.PROJECTS, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            console.error("Error fetching projects:", response.statusText);
            return [];
        }

        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}

export async function getProjectById({ params }: { params: Promise<{ id: string }> }): Promise<projectsProps | null> {
    const id = (await params).id;
    try {
        const response = await fetch(`${ApiEndpoint.PROJECTS}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            console.error("Error fetching project by id:", response.statusText);
            return null;
        }

        const data: projectsProps = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching project by id:", error);
        return null;
    }
}