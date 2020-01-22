import React from 'react';

function ListItem(props) {
  return (
    <div className='todo-item clearfix'>
      <div className='todo-item-left'>
        <input
          type='checkbox'
          checked={props.item.completed}
          onChange={() => props.checkItem(props.item.id)}
        />
        <span className={props.item.completed ? 'completedTask' : ''}>
          {props.item.text}
        </span>
      </div>
      <div
        className='removeTask'
        onClick={() => props.removeItem(props.item.id)}
      >
        x
      </div>
    </div>
  );
}

export default ListItem;
