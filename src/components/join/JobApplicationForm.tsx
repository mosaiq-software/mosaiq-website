import { useState, useEffect, useCallback } from 'preact/hooks';
import type { JobListing } from '../../scripts/types';
import { useLocalStorage } from './useLocalStorage';
import { useSubmitForm } from './useSubmitForm';
import { TextInput } from './TextInput';
import { SelectInput } from './SelectInput';
import { TextAreaInput } from './TextAreaInput';
import { FileInput } from './FileInput';
import type { JobFormFields, SharedFormFields } from './types';

interface JobApplicationFormProps {
    job: JobListing;
    applicationPortalUrl: string;
}

const HOW_FOUND_OPTIONS = [
    { value: '', label: 'Select an option...' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'github', label: 'GitHub' },
    { value: 'friend', label: 'From a friend' },
    { value: 'school', label: 'School/University' },
    { value: 'event', label: 'Event or meetup' },
    { value: 'poster', label: 'Poster or flyer' },
    { value: 'search', label: 'Online search' },
    { value: 'other', label: 'Other' },
];

export function JobApplicationForm(props: JobApplicationFormProps) {
    const storage = useLocalStorage(props.job.id);

    const [sharedData, setSharedData] = useState<Partial<SharedFormFields>>(() => storage.loadSharedData());
    const [jobData, setJobData] = useState<Partial<JobFormFields>>(() => storage.loadJobData());
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [links, setLinks] = useState<string[]>([]);

    const updateSharedField = useCallback(<K extends keyof SharedFormFields>(field: K, value: SharedFormFields[K]) => {
        setSharedData((prev) => ({ ...prev, [field]: value }));
    }, []);

    const updateJobField = useCallback(<K extends keyof JobFormFields>(field: K, value: JobFormFields[K]) => {
        setJobData((prev) => ({ ...prev, [field]: value }));
    }, []);

    const handleSuccess = useCallback(() => {
        storage.clearJobStorage();
        setJobData({});
        setLinks([]);
        setResumeFile(null);
    }, [storage]);

    const { isSubmitting, handleSubmit } = useSubmitForm({
        jobId: props.job.id,
        applicationPortalUrl: props.applicationPortalUrl,
        onSuccess: handleSuccess,
    });

    // Handle form submission
    const onSubmit = useCallback(
        async (e: MouseEvent) => {
            e.preventDefault();
            await handleSubmit(sharedData, jobData, resumeFile, links);
        },
        [sharedData, jobData, resumeFile, links, handleSubmit]
    );

    return (
        <div>
            {/* Base Fields */}
            <TextInput
                id="name"
                name="name"
                label="Full Name"
                placeholder="Jason Funderberker"
                value={sharedData.name || ''}
                onChange={(value) => updateSharedField('name', value)}
                required
            />

            <TextInput
                id="email"
                name="email"
                label="Personal Email"
                type="email"
                placeholder="drcucumber@gmail.com"
                value={sharedData.email || ''}
                onChange={(value) => updateSharedField('email', value)}
                required
            />

            <SelectInput
                id="how-found"
                name="how-found"
                label="How did you find out about Mosaiq?"
                value={sharedData.howFound || ''}
                onChange={(value) => updateSharedField('howFound', value)}
                options={HOW_FOUND_OPTIONS}
                required
            />

            <FileInput
                id="resume"
                name="resume"
                label="Resume/CV"
                accept=".pdf,.doc,.docx"
                hint="PDF, DOC, or DOCX (max 10MB)"
                value={resumeFile}
                onChange={(file) => {
                    setResumeFile(file);
                }}
            />

            {/* Link Fields */}
            <TextInput
                id="github"
                name="github"
                label="GitHub"
                type="url"
                placeholder="https://github.com/username"
                value={sharedData.github || ''}
                onChange={(value) => updateSharedField('github', value)}
            />

            <TextInput
                id="portfolio"
                name="portfolio"
                label="Portfolio"
                type="url"
                placeholder="https://yourportfolio.com"
                value={sharedData.portfolio || ''}
                onChange={(value) => updateSharedField('portfolio', value)}
            />

            <TextInput
                id="linkedin"
                name="linkedin"
                label="LinkedIn"
                type="url"
                placeholder="https://linkedin.com/in/username"
                value={sharedData.linkedin || ''}
                onChange={(value) => updateSharedField('linkedin', value)}
            />

            <TextInput
                id="other"
                name="other"
                label="Other Link"
                type="url"
                placeholder="https://"
                value={sharedData.other || ''}
                onChange={(value) => updateSharedField('other', value)}
            />

            {/* Dynamic Questions */}
            {props.job.applicationQuestions.map((question) =>
                question.answerType === 'short' ? (
                    <TextInput
                        key={question.id}
                        id={question.id}
                        name={question.id}
                        label={question.question}
                        value={jobData[question.id] || ''}
                        onChange={(value) => updateJobField(question.id, value)}
                    />
                ) : (
                    <TextAreaInput
                        key={question.id}
                        id={question.id}
                        name={question.id}
                        label={question.question}
                        value={jobData[question.id] || ''}
                        onChange={(value) => updateJobField(question.id, value)}
                    />
                )
            )}

            <button
                class="submit-button"
                disabled={isSubmitting}
                onClick={onSubmit}
            >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
        </div>
    );
}
