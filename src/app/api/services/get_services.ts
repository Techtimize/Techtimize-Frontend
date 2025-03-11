import { Servicesprops } from "@/app/types/services.type";
import { ApiEndpoint } from "@/app/api/endpoints";
export default async function getServices():Promise<Servicesprops[]>{
    try {
        const response = await fetch(ApiEndpoint.SERVICES,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(!response){
            throw new Error('Failed to fetch services');
        }
        const result = await response.json();
        return result.data;

     
    } catch (error) {
        console.error('Error fetching services:', error);
        return [];
        
    }
}