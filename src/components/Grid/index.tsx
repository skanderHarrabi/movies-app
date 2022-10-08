import React from 'react';
//styles
import './grid.scss';
// Types
type Props = {
  header: string,
  children: any
}

const Grid: React.FC<Props> = ({ header, children }) => {


  return (
    <>
      <div className="grid_wrapper">
        <h1>{header}</h1>
        <div className="grid_content">{children}</div>
      </div>
    </>
  );
};

export default Grid;
