import React from 'react';
import { routerContext as routerContextType } from 'react-router/PropTypes';
import { Button,InputGroup } from '@blueprintjs/core';
import s from '../style.css';


class UserAdd extends React.Component {
  constructor(props) {
    super();
    this.user = {
      userID:1,
      userName:'manoj',
      email:'manoj@gmail.com',
      firstName:'manoj',
      lastName:'G',
      password:'123456',
      roleId:2
    };
  };

  static contextTypes = {
    router: routerContextType
  };

  handleClick(url) {
    this.context.router.transitionTo(url);
  };
  render() {

    return (

          <div className="well">
             <form className={s.formStyle}>
                   <h3>Add New User</h3>
                   <h4>Create a brand new user and add them to this site</h4>

                   <label className="pt-label pt-inline .modifier">
                    <span>
                     Username(required)
                    </span>
                    <InputGroup
                        placeholder="User Name"
                    />
                   </label>

                   <label className="pt-label pt-inline .modifier">
                   <span>
                     Email(required)
                     </span>
                     <InputGroup placeholder="Email" />
                   </label>

                   <label className="pt-label pt-inline .modifier">
                   <span>
                     First Name
                      </span>
                     <InputGroup placeholder="First Name"/>
                   </label>

                   <label className="pt-label pt-inline .modifier">
                   <span>
                     Last Name
                      </span>
                     <InputGroup placeholder="Last Name" />
                   </label>

                   <label className="pt-label pt-inline .modifier">
                   <span>
                     Password
                   </span>
                     <InputGroup type="password" placeholder="Password" type={"password"}/>
                   </label>

                   <label className="pt-label pt-inline .modifier">
                   <span>
                     Role
                     </span>
                     <div className="pt-select .modifier">
                        <select>
                          <option selected>Choose an Role...</option>
                          <option value="1">Super Admin</option>
                          <option value="2">Admin</option>
                          <option value="3">User</option>
                        </select>
                    </div>
                   </label>

                  <Button className="pt-button pt-intent-primary pt-icon-circle-arrow-left .modifier" onClick={() => this.handleClick('/admin/users')}>Back</Button> &nbsp;&nbsp;
                  <Button className="pt-button pt-intent-primary pt-icon-add .modifier">Add New User</Button>
             </form>
          </div>
    );
  }
}


export default UserAdd;
