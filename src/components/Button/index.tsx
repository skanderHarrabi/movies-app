import React from 'react';
//styles
import './button.scss';
//Types
type Props = {
  text: string,
  callback: () => void,
}

const Button: React.FC<Props> = ({ text, callback }) => {
  return (
    <>
      <button className="button_wrapper" type='button' onClick={callback}>
        {text}
      </button>
    </>
  );
};

export default Button;
