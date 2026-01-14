import { Label } from './Label';

interface TextInputProps {
    id: string;
    name: string;
    label: string;
    type?: 'text' | 'email' | 'url';
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
}

export function TextInput(props: TextInputProps) {
    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <Label htmlFor={props.id}>{props.label}</Label>
            <input
                type={props.type || 'text'}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
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
                    transition: 'border-color 0.2s ease',
                }}
            />
        </div>
    );
}
