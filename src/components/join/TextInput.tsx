import { useState } from 'preact/hooks';
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
    const [touched, setTouched] = useState(false);

    const isEmail = props.type === 'email';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = !isEmail || !props.value || emailRegex.test(props.value);
    const showError = touched && isEmail && props.value && !isValidEmail;

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
                onBlur={() => setTouched(true)}
                required={props.required}
                style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    fontFamily: "'Clash Grotesk', sans-serif",
                    border: showError ? '1px solid var(--mosaiq-pink)' : '1px solid var(--color-text)',
                    borderRadius: '4px',
                    backgroundColor: 'var(--color-background)',
                    color: 'var(--color-text)',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease',
                }}
                data-clarity-click={`TextInput-${props.id}`}
            />
            {showError && (
                <span
                    style={{
                        display: 'block',
                        marginTop: '0.25rem',
                        fontSize: '0.875rem',
                        color: 'var(--mosaiq-pink)',
                        fontFamily: "'Clash Grotesk', sans-serif",
                    }}
                >
                    Please enter a valid email address
                </span>
            )}
        </div>
    );
}
