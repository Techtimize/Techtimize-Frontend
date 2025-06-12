import { ApiEndpoint } from "@/app/api/endpoints";
import {faqsProps} from "@/app/types/faq";

export async function getFaqs():Promise<faqsProps[]>{
    try {
        
        const response = await fetch(ApiEndpoint.FAQS, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
      
        return result.data;
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        return [];
    }
}

