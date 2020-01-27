import React from 'react';

const ListContainer = ({ searchOn, loading }) => {
  if (loading) {
    return <div className='no_data'>Your list is being loaded...</div>;
  }
  return (
    <div className='no_data'>
      You don't have any {searchOn ? 'matching ' : null}tasks.
    </div>
  );
};

export default ListContainer;
