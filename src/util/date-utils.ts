export const getDateFromRawString = (rawDate: string): Date => {
    const date = new Date(rawDate);
    return date;
};

export const stringToPrettyDate = (rawDate: string): string => {
    const date = getDateFromRawString(rawDate);
    return date.toLocaleDateString();
};

export const stringToPrettyDateTime = (rawDate: string): string => {
    const date = getDateFromRawString(rawDate);
    return date.toLocaleString();
};
