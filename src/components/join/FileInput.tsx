import { useState, useRef, useEffect } from 'preact/hooks';
import { Label } from './Label';
import feather from 'feather-icons';

interface FileInputProps {
    id: string;
    name: string;
    label: string;
    accept?: string;
    hint?: string;
    required?: boolean;
    value: File | null;
    onChange: (value: File | null) => void;
}

export function FileInput(props: FileInputProps) {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Initialize feather icons
        feather.replace();
    }, []);

    const handleDragOver = (e: DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const files = e.dataTransfer?.files;
        if (files && files.length > 0) {
            props.onChange(files[0]);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: Event) => {
        const target = e.currentTarget as HTMLInputElement;
        const files = target.files;
        props.onChange(files && files.length > 0 ? files[0] : null);
    };

    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <Label htmlFor={props.id}>{props.label}</Label>

            <div
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                style={{
                    width: '100%',
                    padding: '2rem',
                    border: isDragging ? '2px dashed var(--mosaiq-magenta)' : '2px dashed var(--color-text)',
                    borderRadius: '8px',
                    backgroundColor: isDragging ? 'rgba(147, 46, 118, 0.05)' : 'var(--color-background)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                    boxSizing: 'border-box',
                }}
            >
                <i
                    data-feather={'upload'}
                    style={{
                        width: '48px',
                        height: '48px',
                        color: isDragging ? 'var(--mosaiq-magenta)' : 'var(--color-text)',
                    }}
                    aria-hidden="true"
                    class="icon"
                ></i>

                <div style={{ textAlign: 'center' }}>
                    <p
                        style={{
                            margin: 0,
                            fontSize: '1rem',
                            fontFamily: "'Clash Grotesk', sans-serif",
                            color: isDragging ? 'var(--mosaiq-magenta)' : 'var(--color-text)',
                            fontWeight: '500',
                        }}
                    >
                        {props.value ? props.value.name : isDragging ? 'Drop file here' : 'Click to upload or drag and drop'}
                    </p>
                    {props.hint && (
                        <p
                            style={{
                                margin: '0.25rem 0 0 0',
                                fontSize: '0.875rem',
                                fontFamily: "'Clash Grotesk', sans-serif",
                                color: 'var(--color-text-secondary)',
                            }}
                        >
                            {props.hint}
                        </p>
                    )}
                </div>
            </div>

            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                id={props.id}
                name={props.name}
                accept={props.accept}
                required={props.required}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        </div>
    );
}
