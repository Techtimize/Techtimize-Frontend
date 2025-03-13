import { ApiEndpoint } from "@/app/api/endpoints";
import whyusProps from "@/app/types/whyus.type";

export async function getWhyUs(): Promise<whyusProps[] | null> {
    try {
        const response = await fetch(ApiEndpoint.WHY_US, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            console.error("Error fetching why us data:", response.statusText);
            return null;
        }

        const data: whyusProps[] = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching why us data:", error);
        return null;
    }
}
