import { useState, useEffect } from 'preact/hooks';

interface LinkListProps {
    label: string;
    onChange: (links: string[]) => void;
    initialLinks?: string[];
}

export function LinkList({ label, onChange, initialLinks = [] }: LinkListProps) {
    const [links, setLinks] = useState<string[]>(() => {
        // Always ensure at least one empty input
        return initialLinks.length > 0 ? [...initialLinks, ''] : [''];
    });

    useEffect(() => {
        // Pass up only non-empty links
        const nonEmptyLinks = links.filter((link) => link.trim() !== '');
        onChange(nonEmptyLinks);
    }, [links, onChange]);

    const handleLinkChange = (index: number, value: string) => {
        const newLinks = [...links];
        newLinks[index] = value;

        // If this is the last input and it has content, add a new empty input
        if (index === newLinks.length - 1 && value.trim() !== '') {
            newLinks.push('');
        }
        // If this is not the last input and it's now empty, remove it
        else if (index < newLinks.length - 1 && value.trim() === '') {
            newLinks.splice(index, 1);
        }

        setLinks(newLinks);
    };

    return (
        <div className="form-group">
            <label>{label}</label>
            <div className="link-list">
                {links.map((link, index) => (
                    <input
                        key={index}
                        type="url"
                        className="form-input"
                        placeholder="https://"
                        value={link}
                        onInput={(e) => handleLinkChange(index, e.currentTarget.value)}
                    />
                ))}
            </div>
        </div>
    );
}
