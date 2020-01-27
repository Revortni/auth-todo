import React from 'react';
import '../styles/SearchItem.css';
const SearchItem = props => {
  const handleSearch = e => {
    let filter = e.target.value;
    props.handleSearchItem(filter);
  };

  return (
    <div className='container'>
      <div className='search_item'>
        <input
          type='text'
          name='item'
          onChange={handleSearch}
          placeholder='Search'
        />
      </div>
    </div>
  );
};

export default SearchItem;
