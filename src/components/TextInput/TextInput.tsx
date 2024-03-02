import { FC, InputHTMLAttributes, ReactNode } from "react";
import "./TextInput.scss";

export interface iTextInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  className?: string;
  errors?: string[];
  children?: ReactNode;
};

export const TextInput: FC<iTextInput> = ({ id, label, className = "", errors, children, ...props }) => {

  return (
    <div className={`TextInput ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="TextInput-label">
          {label}
        </label>
      )}

      {children}

      <div className="TextInput-input-wrap">
        <input
          id={id}
          className="TextInput-input"
          autoComplete="one-time-code"
          {...props}
        />
        <div className="TextInput-errors">
          {errors?.map(err => <span key={err} className="TextInput-error">{err}</span>)}
        </div>
      </div>
    </div>
  );
};
