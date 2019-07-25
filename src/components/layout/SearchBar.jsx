import React from 'react';

const SearchBar = () => {
  return (
    <nav className='mb-30p blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input type='search' id='search' required />
            <label htmlFor='search' className='label-icon'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
