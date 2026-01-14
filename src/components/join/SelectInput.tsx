interface SelectInputProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    required?: boolean;
}

export function SelectInput(props: SelectInputProps) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <select
                id={props.id}
                name={props.name}
                className="form-input"
                value={props.value}
                onChange={(e) => props.onChange(e.currentTarget.value)}
                required={props.required}
            >
                {props.options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
