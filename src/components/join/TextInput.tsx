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
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type || 'text'}
                id={props.id}
                name={props.name}
                className="form-input"
                placeholder={props.placeholder}
                value={props.value}
                onInput={(e) => props.onChange(e.currentTarget.value)}
                required={props.required}
            />
        </div>
    );
}
