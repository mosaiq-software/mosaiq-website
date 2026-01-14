import { useCallback } from 'preact/hooks';
import type { SharedFormFields, JobFormFields } from './types';

const SHARED_STORAGE_KEY = 'mosaiq-application-shared';

export function useLocalStorage(jobId: string) {
    const JOB_STORAGE_KEY = `mosaiq-application-${jobId}`;

    const loadJobData = useCallback((): Partial<JobFormFields> => {
        try {
            const jobData = localStorage.getItem(JOB_STORAGE_KEY);
            try {
                const parsedJob = jobData ? JSON.parse(jobData) : {};
                return parsedJob as Partial<JobFormFields>;
            } catch (e) {
                console.error('Error parsing job-specific application data:', e);
            }
        } catch (e) {
            console.error('Error loading saved application data:', e);
        }
        return {};
    }, [JOB_STORAGE_KEY]);

    const loadSharedData = useCallback((): Partial<SharedFormFields> => {
        try {
            const sharedData = localStorage.getItem(SHARED_STORAGE_KEY);
            try {
                const parsedShared = sharedData ? JSON.parse(sharedData) : {};
                return parsedShared as Partial<SharedFormFields>;
            } catch (e) {
                console.error('Error parsing shared application data:', e);
            }
        } catch (e) {
            console.error('Error loading shared application data:', e);
        }
        return {};
    }, []);

    const saveToJobStorage = useCallback(
        (formState: JobFormFields) => {
            try {
                localStorage.setItem(JOB_STORAGE_KEY, JSON.stringify(formState));
            } catch (e) {
                console.error('Error saving application data:', e);
            }
        },
        [JOB_STORAGE_KEY]
    );

    const saveToSharedStorage = useCallback((formState: SharedFormFields) => {
        try {
            localStorage.setItem(SHARED_STORAGE_KEY, JSON.stringify(formState));
        } catch (e) {
            console.error('Error saving shared application data:', e);
        }
    }, []);

    const clearJobStorage = useCallback(() => {
        try {
            localStorage.removeItem(JOB_STORAGE_KEY);
        } catch (e) {
            console.error('Error clearing job storage:', e);
        }
    }, [JOB_STORAGE_KEY]);

    return { loadJobData, loadSharedData, saveToJobStorage, saveToSharedStorage, clearJobStorage };
}
