
import { ApiEndpoint } from "../endpoints"
export default async function getJobs() {
    try {
        const response = await fetch(ApiEndpoint.JOB_TYPE, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response) {
            throw new Error('Failed to fetch job types');
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching job types:', error);
        return [];
    }

}