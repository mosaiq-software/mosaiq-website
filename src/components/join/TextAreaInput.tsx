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
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <textarea
                id={props.id}
                name={props.name}
                className="form-input"
                rows={props.rows || 4}
                value={props.value}
                onInput={(e) => props.onChange(e.currentTarget.value)}
                required={props.required}
            />
        </div>
    );
}
