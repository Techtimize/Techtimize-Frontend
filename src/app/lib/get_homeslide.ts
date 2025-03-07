import { ApiEndpoint } from "../api"
import homesliderProps from "../types/homeslider.type";

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

export async function getHomeSliderById({ params }: { params: Promise<{ id: string }> }): Promise<homesliderProps | null> {
    const id = (await params).id;
    try {
        const response = await fetch(`${ApiEndpoint.HOME_SLIDER}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            console.error("Error fetching home slider by id:", response.statusText);
            return null;
        }

        const data: homesliderProps = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching home slider by id:", error);
        return null;
    }
}