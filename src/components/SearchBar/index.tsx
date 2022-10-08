import React, { useState, useEffect, useRef } from 'react';
//Image
import searchIcon from '../../images/search-icon.svg';
//styles
import './searchBar.scss'
//Types
type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const [ state, setState ] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    };

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <>
      <div className="search-bar_wrapper">
        <div className="search-bar_content">
          <img src={searchIcon} alt='search-icon'/>
          <input
            type='text'
            placeholder='Search Movie'
            onChange={event => setState(event.currentTarget.value)}
            value={state}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
