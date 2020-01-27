import React from 'react';
import ListContainer from './ListContainer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { Header } from '../Header';
import { Dashboard } from './Dashboard';
import uuid from 'uuid';
//for server operations
import { fetchFromUrl } from '../utils/fetch';
import { baseURL, todoUrl } from '../config/url';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      filtered: [],
      filter: '',
      data: props.data,
      loading: true
    };
  }

  updateDatabase = ({ data, method, id }) => {
    return new Promise((resolve, reject) => {
      const headers = { token: this.props.data.token };
      const params = id ? '/' + id : '';
      return fetchFromUrl({
        baseURL,
        url: todoUrl + params,
        method,
        data,
        headers
      })
        .then(response => {
          if (response) {
            return resolve({ data, response });
          }
        })
        .catch(err => {
          const { msg } = err.response ? err.response.data : { msg: 'Error' };
          return reject(msg);
        });
    });
  };

  componentDidMount() {
    this.updateDatabase({
      method: 'get'
    })
      .then(({ response }) => {
        const data = Object.values(response.data);
        this.setState({
          list: data,
          filtered: data,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
  }

  checkItem = id => {
    let targetItem = {};
    const list = this.state.list.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        targetItem = item;
      }
      return item;
    });

    this.updateDatabase({
      method: 'patch',
      id,
      data: { completed: targetItem.completed }
    })
      .then(() => {
        this.setState({ list }, this.filterItems);
      })
      .catch(err => {
        console.log(err);
      });
  };

  removeItem = id => {
    this.updateDatabase({
      method: 'delete',
      id
    })
      .then(() => {
        let list = this.state.list.filter(item => id !== item.id);
        this.setState(
          {
            list
          },
          this.filterItems
        );
      })
      .catch(err => {
        console.log(err);
      });
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

  filterItems = filter => {
    let list = this.state.list;
    filter = filter || this.state.filter;
    if (this.state.completedFilterActive) {
      list = this.state.list.filter(
        item => (item.completed ? true : false) === this.state.completedFilter
      );
    }
    const filtered = list.filter(item =>
      item.text.toLowerCase().includes(filter.toLowerCase())
    );

    this.setState({
      filtered,
      filter
    });
  };

  handleAddItem = content => {
    const data = {
      id: uuid.v4(),
      text: content,
      completed: false
    };

    this.updateDatabase({
      data,
      method: 'post'
    })
      .then(({ data }) => {
        const list = [...this.state.list, data];
        this.setState({ list }, this.filterItems);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          authenticated={true}
          handleLogout={this.props.handleLogout}
          setFilter={this.setCompletedFilter}
          data={this.state.data}
        />
        <Dashboard />
      </React.Fragment>
    );
  }
}

export default Main;
