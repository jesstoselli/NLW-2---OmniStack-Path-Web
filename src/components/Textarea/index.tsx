import React, { TextareaHTMLAttributes } from "react";

// Styles
import "./styles.css";

// extendendo TextareaHTMLAttributes, todos os atributos naturalmente
// relacionados à tag Textarea, nesse caso, passam a ser aceitos como
// props, sem que seu tipo precise ser definido na interface
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

// FYI, dentro dos parentêses, o obj notation é apenas para
// desestruturação das props
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <div className='textarea-block'>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
};

export default Textarea;
