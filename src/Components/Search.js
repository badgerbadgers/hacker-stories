import React from 'react';

export const Search = ({ search, onSearch }) => {

  return(
    <>
      <label key="1" htmlFor='search'>Search</label>
      <input 
      key="2"
      id="search" 
      type="text" 
      value={search}
      onChange={onSearch}
      />
    </>
  );
};