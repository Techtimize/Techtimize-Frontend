export interface StackProps {
    _id: string;
    name: string;
    serviceImage: string;
}

export default interface ProjectsProps {
    _id: string;
    name: string;
    posterImage: string;
    tags: string[];
    about: string;
    isActive: boolean;
    isSlider: boolean;
    previewImage: string;
    description: string;
    backgroundColor:string;
    logoImage:string;
    stackId: StackProps[];
}
