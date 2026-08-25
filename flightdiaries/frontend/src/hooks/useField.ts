import { useState } from "react";

const useField = (type: string, name?: string) => {
  const [value, setValue] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const reset = () => {
    setValue("");
  };

  return {
    field: {
      value: value,
      name,
      type: type,
      onChange: onChange,
    },
    reset: reset,
  };
};

export default useField;
