type SelectProps = {
  id: string;
  label: string;
  options: ReadonlyArray<string>;
};

export const Select = ({ id, label, options }: SelectProps) => (
  <div>
    <label htmlFor={id} style={{ fontStyle: 'italic', fontSize: '14px' }}>
      {label}
    </label>
    <select
      name={id}
      id={id}
      style={{ display: 'inline-block', width: '100%', fontSize: '14px', padding: '3px 3px', marginTop: '2px' }}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
