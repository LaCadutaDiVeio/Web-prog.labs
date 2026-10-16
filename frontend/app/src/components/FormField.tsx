// src/components/FormField.tsx
import type { InputHTMLAttributes } from 'react';

type FormFieldProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FormField({ label, id, name, ...rest }: FormFieldProps) {
  const inputId = id ?? name;

  return (
    <div className="form-field">
      <label htmlFor={inputId}>{label}</label>
      <input
        className="form-field_input"
        id={inputId}
        name={name}
        {...rest}
      />
    </div>
  );
}