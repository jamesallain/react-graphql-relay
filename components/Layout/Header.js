import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

import s from './Header.css';

import HeaderSearch from './../Search/HeaderSearch';

const Header = () =>
  <header className={`${s.header}`}>
    <div style={{ padding: '5px', width: '40px' }}>
      <img src="/images/logo.png" height="100%" />
    </div>
    <div className={s.MenuWrapper}>
      <div className={cx(s.Menu, 'h')}>
        <div className={s.MenuItem}><Link to="/" className={s.active}>Dashboard</Link></div>
        <div className={s.MenuItem}><Link to="/">Documents</Link></div>
        <div className={s.MenuItem}><Link to="/">Manage</Link></div>
        <div className={s.MenuItem}><Link to="/admin">Admin</Link></div>
      </div>
    </div>
    <div className={s.HeaderSearch}>
      <HeaderSearch />
    </div>
  </header>;

export default Header;
