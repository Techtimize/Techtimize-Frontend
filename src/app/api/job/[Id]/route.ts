import { ApiEndpoint } from "@/app/api/endpoints";
import { jobProps } from "@/app/types/job.type";

export async function getJobById(params: { id: string }): Promise<jobProps | null> {
    try {
        const response = await fetch(`${ApiEndpoint.JOB_TYPE}/${params.id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
            console.error("Error fetching Job by ID:", response.statusText);
            return null;
        }

        const data: jobProps = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching Job by ID:", error);
        return null;
    }
}
