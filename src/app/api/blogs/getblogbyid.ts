import { ApiEndpoint } from "../endpoints";
import { blogsProps } from "@/app/types/blog";

export async function getblogbyid(id : string): Promise<blogsProps | null>{
    try {
       const response = await fetch(ApiEndpoint.BLOG_BYID(id),{
        method: 'get',
        headers : {
            "Content-Type": "application/json",
        }
       });
    //   console.log(response);c
       const result = await response.json();
       return result.data;

    } catch (error) {
        console.error("error fetching blog by id: " + error);
        return null;
    }
}