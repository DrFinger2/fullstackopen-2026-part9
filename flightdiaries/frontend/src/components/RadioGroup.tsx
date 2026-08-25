interface RadioGroupProps {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}

const RadioGroup = ({ options, value, onChange }: RadioGroupProps) => {
  return (
    <div>
      {options.map((option) => (
        <span key={option}>
          <label htmlFor={option}>{option}</label>
          <input
            id={option}
            type="radio"
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
          />
        </span>
      ))}
    </div>
  );
};

export default RadioGroup;
