export interface Project {
    name: string;
    link: string;
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
