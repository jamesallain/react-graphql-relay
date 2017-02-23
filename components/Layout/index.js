import React from 'react';
import cx from 'classnames';
import Header from './Header';
//import Sidebar from './../Sidebar/Sidebar';
import s from './Layout.css';

export const MasterLayout = props =>
  <div className={s.mainWrapper}>
    <Header />
    <div className={s.wrapper} {...props} />
  </div>;

const Layout = ({ sidebarContents, ...props }) =>
  <MasterLayout>
    <div className={s.wrapperWithSidebar}>
      <div className={s.sidebarWrapper}>
        <div>{sidebarContents}</div>
      </div>
      <div className={s.contentWrapper}>
        <div {...props} className={cx(s.content, props.className)} />
      </div>
    </div>
  </MasterLayout>;

export default Layout;
