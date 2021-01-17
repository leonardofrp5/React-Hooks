import React from 'react';

const Search = ({search, searchInput, hangleSearch}) => {
  return (
    <div>
      <input className='search' value={search} ref={searchInput} onChange={hangleSearch}></input>
    </div>
  )
}

export default Search;
