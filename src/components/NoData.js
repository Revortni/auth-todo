import React from 'react';

const ListContainer = ({ searchOn }) => {
  return (
    <div className='no_data'>
      You don't have any {searchOn ? 'matching ' : null}tasks.
    </div>
  );
};

export default ListContainer;
