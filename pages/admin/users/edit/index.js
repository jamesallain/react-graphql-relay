import React from 'react';
import { routerContext as routerContextType } from 'react-router/PropTypes';
import { Button,InputGroup } from '@blueprintjs/core';
import s from '../style.css';


class UserEdit extends React.Component {
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
         <h3>Edit User</h3>

         <label className="pt-label pt-inline .modifier">
         <span>
           Username(required)
           </span>
           <InputGroup
               value={this.user.userName}
               placeholder="User Name"

           />
         </label>

         <label className="pt-label pt-inline .modifier">
         <span>
           Email(required)
           </span>
           <InputGroup
               value={this.user.email}
               placeholder="Email"
            />
         </label>

         <label className="pt-label pt-inline .modifier">
         <span>
           First Name
            </span>
            <InputGroup
                value={this.user.firstName}
                placeholder="First Name"
             />
         </label>

         <label className="pt-label pt-inline .modifier">
         <span>
           Last Name
            </span>
            <InputGroup
                value={this.user.lastName}
                placeholder="Last Name"
             />
         </label>

         <label className="pt-label pt-inline .modifier">
         <span>
           Password
         </span>
         <InputGroup
              value={this.user.password}
              placeholder="password"
              type={'password'}

         />
         </label>

         <label className="pt-label pt-inline .modifier">
         <span>
           Role
         </span>

         </label>
          <Button className="pt-button pt-intent-primary pt-icon-circle-arrow-left .modifier" onClick={() => this.handleClick('/admin/users')}>Back</Button> &nbsp;&nbsp;
          <Button className="pt-button pt-intent-primary pt-icon-add .modifier">Update User</Button>
        </form>
       </div>
      );
  }
}


export default UserEdit;
