import { ApiEndpoint } from "../api";
import whyusProps from "../types/whyus.type";

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

export async function getWhyUsById({ params }: { params: Promise<{ id: string }> }): Promise<whyusProps | null> {
    const id = (await params).id;
    try {
        const response = await fetch(`${ApiEndpoint.WHY_US}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            console.error("Error fetching why us by id:", response.statusText);
            return null;
        }

        const data: whyusProps = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching why us by id:", error);
        return null;
    }
}