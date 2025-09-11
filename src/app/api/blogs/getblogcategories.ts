import { ApiEndpoint } from "@/app/api/endpoints";
import { blog_Category_type } from "@/app/types/blog_Category";

export async function GetBlogCategories():Promise<blog_Category_type>{
    try {
        const response = await fetch(ApiEndpoint.BLOGS_CATEGORIES,{
            method: 'get',
            headers : {
                    "Content-Type": "application/json",
            }
        })
        
        const result = await response.json();
        // console.log(result)
        return result.data;
    } catch (error) {
        console.log("error coming in fethc");
        console.error("Error fetching Blog Categories:", error);
        return [];
    }
}