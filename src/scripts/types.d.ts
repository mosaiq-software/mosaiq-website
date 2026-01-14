export interface Project {
    name: string;
    link?: string;
    description: string;
    authors: string[];
    timeline: string;
    technologies: string[];
    previewImage?: string;
    homepage?: boolean;
    left?: number;
    right?: number;
}
export interface TeamMember {
    name: string;
    role: string;
    img: string;
    since: string;
    website?: string;
}
export interface JobListing {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    requirements: string[];
    niceToHave: string[];
}
