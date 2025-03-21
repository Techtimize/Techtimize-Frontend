import TechSlider from "../components/TechSlider";
import GetStacks from "@/app/api/stacks/get_stacks";

export default async function GetAllStacks(){
    const servicedata = await GetStacks();
    return <TechSlider servicedata={servicedata}/>;
}