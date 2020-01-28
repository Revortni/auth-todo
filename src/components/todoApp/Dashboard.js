import React from 'react';
import NoData from './NoData';
import '../styles/Dashboard.css';

const DashboardItem = props => {
  const itemContent = props.items.map(x => <li key={x.id}>{x.text}</li>);
  return (
    <div className='dashboard-item'>
      <div className='dashboard-item-title'>{props.title}</div>
      <ul className='dashboard-item-list'>{itemContent}</ul>
    </div>
  );
};

export const Dashboard = props => {
  const todoLists =
    [
      {
        listId: 1,
        title: 'Apple Collection',
        entries: [
          {
            id: '123',
            completed: false,
            text: 'Apple'
          },
          {
            id: '124',
            completed: false,
            text: 'Apple2'
          }
        ]
      },
      {
        listId: 2,
        title: 'Apple Collection',
        entries: [
          {
            id: '123',
            completed: false,
            text: 'Apple'
          },
          {
            id: '124',
            completed: false,
            text: 'Apple2'
          }
        ]
      }
    ] || props.todoLists;

  return (
    <div className='container'>
      <div className='dashboard'>
        {todoLists.length > 0 ? (
          todoLists.map(({ entries, listId, title }) => (
            <DashboardItem items={entries} key={listId} title={title} />
          ))
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
