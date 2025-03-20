import { getProjects } from '@/app/api/projects/get_project';
import PortfolioSlider from '@/app/components/PortfolioSlider/PortfolioSlider';


export default async function ProjectList(){
    const projectData=await getProjects();
    return <PortfolioSlider projectData={projectData}  /> 
}