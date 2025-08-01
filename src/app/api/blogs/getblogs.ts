import { ApiEndpoint } from "@/app/api/endpoints";
import { blogsProps } from "@/app/types/blog";

export async function getBlogs(): Promise<blogsProps[]> {
    try {
        const response = await fetch(ApiEndpoint.BLOGS, {
            method: 'get',
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error fetching Blogs:", error);
        return [];
    }
}

