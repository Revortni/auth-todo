import React from 'react';
import HeaderTab from './HeaderTab';
import './styles/Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home'
    };

    this.options = [
      {
        name: 'Home',
        filter: 'all'
      },
      {
        name: 'Completed',
        filter: true
      },
      {
        name: 'Remaining',
        filter: false
      }
    ];
  }

  setOption = item => {
    this.setState({ active: item.name });
    this.props.setFilter(item.filter);
  };

  render() {
    return (
      <header>
        <div className='container clearfix'>
          <div className='header_title'>Todo List</div>
          <div className='header_options_container'>
            {this.options.map(item => (
              <HeaderTab
                name={item.name}
                onClick={() => this.setOption(item)}
                key={item.name}
                active={item.name === this.state.active}
              />
            ))}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
