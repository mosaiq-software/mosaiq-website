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
    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <label
                htmlFor={props.id}
                style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: 'var(--color-text)',
                }}
            >
                {props.label}
            </label>
            <input
                type="file"
                id={props.id}
                name={props.name}
                accept={props.accept}
                required={props.required}
                onInput={(e) => {
                    const files = e.currentTarget.files;
                    props.onChange(files && files.length > 0 ? files[0] : null);
                }}
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
                    cursor: 'pointer',
                }}
            />
            {props.hint && (
                <span
                    style={{
                        display: 'block',
                        marginTop: '0.25rem',
                        fontSize: '0.875rem',
                        color: 'var(--color-text-secondary)',
                    }}
                >
                    {props.hint}
                </span>
            )}
        </div>
    );
}
