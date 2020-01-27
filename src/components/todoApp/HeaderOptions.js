import React from 'react';
import HeaderTab from './HeaderTab';

const options = {
  home: {
    name: 'Home',
    filter: 'all',
    active: true
  },
  completed: {
    name: 'Completed',
    filter: true,
    active: false
  },
  remaining: {
    name: 'Remaining',
    filter: false,
    active: false
  }
};

const setOption = (setKey, callback) => {
  Object.keys(options).forEach(key => {
    if (key === setKey) {
      options[key].active = true;
      return;
    }
    options[key].active = false;
  });
  callback(options[setKey].filter);
};

export const HeaderOptions = ({ setFilter }) => {
  return (
    <div className='header_options_container'>
      {Object.keys(options).map(key => {
        const item = options[key];
        return (
          <HeaderTab
            name={item.name}
            onClick={() => setOption(key, setFilter)}
            key={item.name}
            active={item.active}
          />
        );
      })}
    </div>
  );
};
