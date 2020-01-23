import React from 'react';
import HeaderTab from './HeaderTab';
import './styles/Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      data: props.data
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
    const { firstName, lastName } = this.state.data;
    return (
      <header>
        <div className='container clearfix'>
          <div className='header_title'>Todo List</div>
          <div className='header-profile-info'>
            <div className='header-profile-info-img-wrapper'>
              <img
                src='https://i.picsum.photos/id/904/600/400.jpg'
                alt='profile-img'
              />
            </div>
            <span>
              {firstName}
              {lastName}
            </span>
          </div>
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
