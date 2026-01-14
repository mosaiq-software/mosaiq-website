import { useState, useEffect } from 'preact/hooks';
import { Label } from './Label';

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
        <div style={{ marginBottom: '1.5rem' }}>
            <Label>{label}</Label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map((link, index) => (
                    <input
                        key={index}
                        type="url"
                        placeholder="https://"
                        value={link}
                        onInput={(e) => handleLinkChange(index, e.currentTarget.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            fontSize: '1rem',
                            fontFamily: "'Clash Grotesk', sans-serif",
                            border: '1px solid var(--color-text)',
                            borderRadius: '4px',
                            backgroundColor: 'var(--color-background)',
                            color: 'var(--color-text)',
                            boxSizing: 'border-box',
                            transition: 'border-color 0.2s ease',
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
