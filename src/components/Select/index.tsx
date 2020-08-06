import React, { SelectHTMLAttributes } from "react";

// Styles
import "./styles.css";

// extendendo SelectHTMLAttributes, todos os atributos naturalmente
// relacionados à tag Select, nesse caso, passam a ser aceitos como
// props, sem que seu tipo precise ser definido na interface
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

// FYI, dentro dos parentêses, o obj notation é apenas para
// desestruturação das props
const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className='select-block'>
      <label htmlFor={name}>{label}</label>
      <select value='' id={name} {...rest}>
        <option value='' disabled hidden>
          Selecione
        </option>
        {options.map((opt) => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
