import React from 'react';

function InputBluePrint(props) {
  const { id, labelText, placeholder, value, onChange } = props;

  return (
    <div className='inputBPDiv'>
        <label htmlFor={id}>
          {labelText}
        </label>
        <input
          type="text"
          className="inputBP"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ width: "100%", paddingLeft: "4%" }}
        />
    </div>
  );
}

export default InputBluePrint;
