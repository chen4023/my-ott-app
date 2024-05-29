import { useState } from "react";

export default function useFormInput(initialValue, validate, ...args) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    if (validate) {
      const errorMsg = validate(e.target.value, ...args);
      setError(errorMsg);
    }
  };

  return {
    value,
    onChange: handleChange,
    error,
  };
}
