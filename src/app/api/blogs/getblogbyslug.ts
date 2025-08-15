import { ApiEndpoint } from "../endpoints";
import { blogsProps } from "@/app/types/blog";

export async function getblogbyslug(slug : string): Promise<blogsProps | null>{
    try {
       const response = await fetch(ApiEndpoint.BLOG_BYSLUG(slug),{
        method: 'get',
        headers : {
            "Content-Type": "application/json",
        }
       });
       const result = await response.json();
    //    console.log(result);
       return result.data;

    } catch (error) {
        console.error("error fetching blog by slug: " + error);
        return null;
    }
}