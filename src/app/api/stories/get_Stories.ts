import { ApiEndpoint } from "@/app/api/endpoints";
import { Successstoriesprops } from "@/app/types/successtrories.type";

export async function getStories(): Promise<Successstoriesprops[]> {
  try {
    const response = await fetch(ApiEndpoint.SUCCESS_STORIES, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching success stories:", response.statusText);
      return []; 
    }

    const result = await response.json();
    return result.data; 
  } catch (error) {
    console.error("Error fetching success stories:", error);
    return []; 
  }
}

