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
        <div class="form-group">
            <label for={props.id}>{props.label}</label>
            <input
                type="file"
                id={props.id}
                name={props.name}
                class="form-input file-input"
                accept={props.accept}
                required={props.required}
                onInput={(e) => {
                    const files = e.currentTarget.files;
                    props.onChange(files && files.length > 0 ? files[0] : null);
                }}
                value={props.value ? props.value.name : ''}
            />
            {props.hint && <span class="file-hint">{props.hint}</span>}
        </div>
    );
}
