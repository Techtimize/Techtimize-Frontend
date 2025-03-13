import { ApiEndpoint } from "@/app/api/endpoints"
import homesliderProps from "@/app/types/homeslider.type";

export async function getHomeSlider(): Promise<homesliderProps[] | null> {
    try {
        const response = await fetch(ApiEndpoint.HOME_SLIDER, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            console.error("Error fetching home slider data:", response.statusText);
            return null;
        }

        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error fetching home slider data:", error);
        return null;
    }
}
