import { ApiEndpoint } from "@/app/api/endpoints";
import { Successstoriesprops } from "../types/successtrories.type";

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
      return []; // Return an empty array to avoid runtime errors
    }

    const result = await response.json();
    return result.data; 
  } catch (error) {
    console.error("Error fetching success stories:", error);
    return []; // Return an empty array to avoid runtime errors
  }
}

export async function getStoriesById({ params }: { params: Promise<{ id: string }> }): Promise<Successstoriesprops | null> {
  const id = (await params).id;
  try {
    const response = await fetch(`${ApiEndpoint.SUCCESS_STORIES}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error("Error fetching success stories by id:", response.statusText);
      return null;
    }

    const data: Successstoriesprops = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching success stories by id:", error);
    return null;
  }
}