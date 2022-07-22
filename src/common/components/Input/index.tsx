type InputProps = {
  label: string;
};

export const Input = ({ label }: InputProps) => (
  <div>
    <label htmlFor={label} style={{ fontStyle: 'italic', color: 'gray' }}>
      {label}
    </label>
    <input
      type="text"
      id={label}
      name={label}
      style={{ display: 'inline-block', width: '100%', fontSize: '14px', padding: '3px 3px', marginTop: '2px' }}
    ></input>
  </div>
);
