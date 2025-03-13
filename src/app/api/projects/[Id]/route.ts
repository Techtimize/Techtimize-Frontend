import projectsProps from "@/app/types/project.type";
import { ApiEndpoint } from "../../endpoints";

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