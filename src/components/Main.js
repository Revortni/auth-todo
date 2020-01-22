import React from 'react';
import ListContainer from './ListContainer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Header from './Header';
import todoData from './todoData';
import uuid from 'uuid';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      list: todoData,
      filtered: todoData,
      filter: ''
    };
  }

  checkItem = id => {
    const list = this.state.list.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({ list }, this.filterItems);
  };

  removeItem = id => {
    let list = this.state.list.filter(item => id !== item.id);
    this.setState(
      {
        list
      },
      this.filterItems
    );
  };

  setCompletedFilter = filter => {
    this.setState(
      {
        completedFilter: filter,
        completedFilterActive: filter === 'all' ? false : true
      },
      this.filterItems
    );
  };

  filterItems = (filter = this.state.filter) => {
    let list = this.state.list;
    if (this.state.completedFilterActive) {
      list = this.state.list.filter(
        item => item.completed === this.state.completedFilter
      );
    }
    const filtered = list.filter(item => item.text.includes(filter));

    this.setState({
      filtered,
      filter
    });
  };

  handleAddItem = content => {
    let list = [
      ...this.state.list,
      {
        id: uuid.v4(),
        text: content,
        completed: false
      }
    ];

    this.setState(
      {
        list
      },
      this.filterItems
    );
  };

  render() {
    return (
      <React.Fragment>
        <Header setFilter={this.setCompletedFilter} />
        <AddItem handleSubmit={this.handleAddItem} />
        <SearchItem handleSearchItem={this.filterItems} />
        <ListContainer
          list={this.state.filtered}
          checkItem={this.checkItem}
          removeItem={this.removeItem}
        />
      </React.Fragment>
    );
  }
}

export default Main;
