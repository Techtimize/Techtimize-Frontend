
import { ApiEndpoint } from "@/app/api/endpoints"
export default async function getCareersJobs() {
    try {
        const response = await fetch(ApiEndpoint.JOB_TYPE, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching job types:', error);
        return [];
    }

}