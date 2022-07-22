type InputProps = {
  id: string;
  label: string;
};

export const Input = ({ id, label }: InputProps) => (
  <div>
    <label htmlFor={id} style={{ fontStyle: 'italic', fontSize: '14px' }}>
      {label}
    </label>
    <input
      type="text"
      id={id}
      name={id}
      style={{ display: 'inline-block', width: '100%', fontSize: '14px', padding: '3px 3px', marginTop: '2px' }}
    ></input>
  </div>
);
