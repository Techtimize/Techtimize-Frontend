import { ApiEndpoint } from "@/app/api/endpoints";
import  stackProps  from "@/app/types/stacks.type";
export default async function GetStacks(): Promise<stackProps[]>{
    try {
        const response = await fetch(ApiEndpoint.STACKS,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (!response.ok) {
            console.error("Error fetching why us data:", response.statusText);
            return [];
        }

        const result = await response.json();
        return result.data;
      
    } catch (error) {
        console.error("Error fetching stacks data:", error);
        return [];
    }
}