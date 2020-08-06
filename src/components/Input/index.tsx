import React, { InputHTMLAttributes } from "react";

// Styles
import "./styles.css";

// extendendo InputHTMLAttributes, todos os atributos naturalmente
// relacionados à tag input, nesse caso, passam a ser aceitos como
// props, sem que seu tipo precise ser definido na interface
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

// FYI, dentro dos parentêses, o obj notation é apenas para
// desestruturação das props
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className='input-block'>
      <label htmlFor={name}>{label}</label>
      <input type='text' id={name} {...rest} />
    </div>
  );
};

export default Input;
