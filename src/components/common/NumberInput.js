import React from 'react';

const NumberInput = ({name, label, onChange, placeholder, value, error, defaultValue}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="field">
        <input
          type="number"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default NumberInput;
