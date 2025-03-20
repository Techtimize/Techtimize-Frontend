export interface StackProps {
    _id: string;
    name: string;
    serviceImage: string;
  }

interface projectsProps{
    _id: string;
    name: string;
    posterImage: string;
    tags: string[];
    about: string;
    isActive: boolean;
    isSlider: boolean;
    previewImage: string;
    description: string;
    stackId: StackProps[]; 
}



export default projectsProps;