import React from 'react';
import Flexbox from 'flexbox-react';
import { Match } from 'react-router';
import { routerContext as routerContextType } from 'react-router/PropTypes';
import cx from 'classnames';

import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core';

import { MasterLayout } from '../../components/Layout';
import UsersPage from './users';
import UserAdd from './users/add';
import UserEdit from './users/edit';

class Admin extends React.Component {
  static contextTypes = {
    router: routerContextType,
  }

  componentDidMount() {
    document.title = 'Admin';
  }

  handleMenuClick(url) {
    this.context.router.transitionTo(url);
  }

  render() {
    return (
      <MasterLayout>
        <Flexbox flexDirection="row" flexGrow={1}>
          <Flexbox className={cx('dark', 'sidebar')} flexDirection="column">
            <Menu>
              <MenuDivider />
              <MenuItem iconName="people" text="Users" onClick={() => this.handleMenuClick('/admin/users')} />
              <MenuItem iconName="office" text="Organizations" />

              <MenuDivider />
              <MenuItem text="Settings" iconName="cog" />
            </Menu>
          </Flexbox>

          <Flexbox flexGrow={1} flexDirection="column" style={{ overflow: 'hidden' }}>
          <Match pattern={'/admin/users'} exactly component={UsersPage} />
      <Match pattern={'/admin/users/add'}  component={UserAdd} />
      <Match pattern={'/admin/users/edit'} component={UserEdit} />

          </Flexbox>

        </Flexbox>
      </MasterLayout>
    );
  }
}

export default Admin;
