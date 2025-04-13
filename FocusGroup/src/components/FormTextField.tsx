import React from "react";
import TextField from "@mui/material/TextField";

interface FormTextFieldProps {
  id: string;
  name: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  variant?: "outlined" | "filled" | "standard";
  type?: string;
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  id,
  name,
  value,
  label,
  onChange,
  required = false,
  variant = "outlined",
  type = "text"
}) => {
  return (
    <TextField
      id={id}
      name={name}
      value={value}
      label={label}
      onChange={onChange}
      required={required}
      variant={variant}
      type={type}
      fullWidth
      margin="normal"
    />
  );
};

export default FormTextField;
