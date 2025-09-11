import { Reviewsprops } from "@/app/types/reviews";
import { ApiEndpoint } from "../endpoints";

export async function getReviews(): Promise<Reviewsprops[]> {
    try {
        const response = await fetch(ApiEndpoint.REVIEWS, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        console.error("error fetching reviews: " + error);
        return [];
    }
}

export async function getLatestReview(): Promise<Reviewsprops> {
    try {
        const response = await getReviews();
        return response[response.length - 1];
    } catch (error) {
        console.error("error fetching reviews: " + error);
        return {
            content: "Failed to load reviews.",
            clientdesignation: "",
            clientCountry: "",
            rating: 0,
            name: "System",
        };
    }
}

export async function getReviewsQuantity(): Promise<number> {
    try {
        const response = await getReviews();
        return response.length;
    } catch (error) {
        console.error("error fetching reviews quantity: " + error);
        return 0;
    }
}
