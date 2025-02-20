import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

import { Link } from 'react-router-dom';

// import custom hooks
import useGetOnlineStatus from '../utils/useGetOnlineStatus';

// header component
const Header = () => {
  const [btnName, setBtnName] = useState('login');

  const onlineStatus = useGetOnlineStatus() ;

  return (
    <div className="header">
      <div className='nav-container'>
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="LOGO" />
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/cart'}>Cart</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li>
            <Link to={'/profile'}>Profile</Link>
          </li>
          <li>
            Online Status { onlineStatus ? '🟢' : '🔴'}
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === 'login' ? setBtnName('logout') : setBtnName('login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Header;
