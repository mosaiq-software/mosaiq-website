export interface SharedFormFields {
    name: string;
    email: string;
    howFound: string;
}

export interface JobFormFields {
    [questionId: string]: string;
}

export interface ApplicationPayload {
    name: string;
    email: string;
    jobPostId: string;
    fields: Omit<JobFormFields & SharedFormFields, 'name' | 'email'>;
    links: string[];
    files: string[];
}
