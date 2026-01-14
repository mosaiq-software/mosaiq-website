import { useState, useCallback } from 'preact/hooks';
import type { ApplicationPayload, JobFormFields, SharedFormFields } from './types';

interface UseSubmitFormProps {
    jobId: string;
    applicationPortalUrl: string;
    onSuccess: () => void;
}

export function useSubmitForm(props: UseSubmitFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const uploadResume = useCallback(
        async (file: File): Promise<string | null> => {
            const base64 = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const result = reader.result as string;
                    resolve(result.split(',')[1]);
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });

            const filePayload = {
                blob: base64,
                mimeType: file.type,
                fileName: file.name,
            };

            const response = await fetch(`${props.applicationPortalUrl}/file`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(filePayload),
            });

            if (!response.ok) {
                throw new Error(`Resume upload failed: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Resume uploaded successfully:', result);
            return result.fileId;
        },
        [props.applicationPortalUrl]
    );

    const submitApplication = useCallback(
        async (payload: ApplicationPayload) => {
            const response = await fetch(`${props.applicationPortalUrl}/application`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Application submission failed: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Application submitted successfully:', result);
            return result;
        },
        [props.applicationPortalUrl]
    );

    const handleSubmit = useCallback(
        async (sharedData: Partial<SharedFormFields>, jobData: Partial<JobFormFields>, resumeFile: File | null, links: string[]) => {
            setIsSubmitting(true);
            setError(null);

            try {
                // Upload resume if provided
                const files: string[] = [];
                if (resumeFile && resumeFile.size > 0) {
                    console.log('Uploading resume...');
                    const fileId = await uploadResume(resumeFile);
                    if (fileId) files.push(fileId);
                }

                // Add Clarity link if available
                const finalLinks = [...links];
                const clarityId = localStorage.getItem('userId');
                if (clarityId) {
                    finalLinks.push(`https://clarity.microsoft.com/projects/view/tjg2imov26/dashboard?CustomUserId=is%3B${clarityId}&date=Last%2090%20days`);
                }

                const finalFields = { ...jobData, ...sharedData };
                delete finalFields.name;
                delete finalFields.email;

                const payload: ApplicationPayload = {
                    name: sharedData.name || '',
                    email: sharedData.email || '',
                    jobPostId: props.jobId,
                    fields: finalFields,
                    links: finalLinks,
                    files,
                };

                console.log('Submitting application:', payload);
                await submitApplication(payload);
                props.onSuccess();
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
                console.error('Submission error:', err);
                setError(errorMessage);
                alert(`Failed to submit application: ${errorMessage}\n\nYour data has been saved locally. Please try again later.`);
            } finally {
                setIsSubmitting(false);
            }
        },
        [props.jobId, uploadResume, submitApplication, props.onSuccess]
    );

    return { isSubmitting, error, handleSubmit };
}
