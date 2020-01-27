import React from 'react';
import ListItem from './ListItem';
import '../styles/ListContainer.css';
import NoData from './NoData';

const ListContainer = props => {
  const todoItems = props.list.map(item => (
    <ListItem
      key={item.id}
      item={item}
      checkItem={() => props.checkItem(item.id)}
      removeItem={() => props.removeItem(item.id)}
    />
  ));

  return (
    <div className='container'>
      <div className='todo-list'>
        {props.list.length ? (
          todoItems
        ) : (
          <NoData
            loading={props.loading}
            searchOn={props.filter.length ? true : false}
          />
        )}
      </div>
    </div>
  );
};

export default ListContainer;
