interface LabelProps {
    htmlFor?: string;
    children: string;
}

export function Label(props: LabelProps) {
    return (
        <label
            htmlFor={props.htmlFor}
            style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                fontFamily: "'Clash Grotesk', sans-serif",
                color: 'var(--color-text)',
            }}
        >
            {props.children}
        </label>
    );
}
