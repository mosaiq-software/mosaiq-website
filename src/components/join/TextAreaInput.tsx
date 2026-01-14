interface TextAreaInputProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    rows?: number;
    required?: boolean;
}

export function TextAreaInput(props: TextAreaInputProps) {
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
            <textarea
                id={props.id}
                name={props.name}
                rows={props.rows || 4}
                value={props.value}
                onInput={(e) => props.onChange(e.currentTarget.value)}
                required={props.required}
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
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease',
                }}
            />
        </div>
    );
}
