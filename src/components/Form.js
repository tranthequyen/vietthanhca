import React from "react";
import { InputText } from "primereact/inputtext";

function InputForm(props) {
  const { value, onChange, placeholder, label, id, ...otherProps } = props;
  return (
    <div className="mb-3 px-2 ">
      {label && (
        <div className="w-full flex justify-content-between">
          <label htmlFor={id} className="font-medium w-full pb-2">
            {label}
          </label>
        </div>
      )}
      <InputText
        id={id}
        placeholder={placeholder || (label && `Nhập ${label.toLowerCase()}`)}
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
}

export default InputForm;
