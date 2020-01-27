import React from 'react';
import './styles/Header.css';

const HeaderContent = ({ firstName, lastName }) => {
  return (
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
  );
};

const withSignOutButton = Component => {
  return ({ authenticated, handleLogout, data, ...rest }) => {
    if (!authenticated) {
      return null;
    }
    return (
      <div className='header_right clearfix'>
        <Component {...rest} />
        <div className='header-profile-options'>
          <HeaderContent {...data} />
          <div className='signout-button' onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
    );
  };
};

const EnhancedHeaderOptions = withSignOutButton(HeaderOptions);

export const Header = props => {
  return (
    <header>
      <div className='container clearfix'>
        <div className='header_title'>Todo List</div>
        <EnhancedHeaderOptions {...props} />
      </div>
    </header>
  );
};
