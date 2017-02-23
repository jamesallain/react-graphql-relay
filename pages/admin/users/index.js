import React from 'react';
import UserAdd from './add'
import {Match} from 'react-router'
import { routerContext as routerContextType } from 'react-router/PropTypes';
import {Table, Column, Cell} from 'fixed-data-table';
import { Button,Dialog,Intent } from '@blueprintjs/core';
import s from './style.css';

class UsersPage extends React.Component {

  constructor(props) {
    super();
    this.state={isOpen:false}
  };

  static contextTypes = {
    router: routerContextType
  };

  handleClick(url) {
    this.context.router.transitionTo(url);
  };

  handleDelete(userid){
    this.toggleDialog();
  };

  toggleDialog(){
    this.setState({ isOpen: !this.state.isOpen });
  };

  DeleteUser(){
    this.toggleDialog();
  };

  render() {
    //const users = this.props.data.users;
    const users=[
      {userid:"1",username:"mayur",fname:"mayur",lname:"godhani",email:"mayur@gmail.com"},
      {userid:"2",username:"manoj",fname:"manoj",lname:"godhani",email:"manoj@gmail.com"},
      {userid:"3",username:"ankit",fname:"ankit",lname:"godhani",email:"ankit@gmail.com"}
  ];

    return (
      <div className={s.divmain}>
      <Button iconName="add" onClick={() => this.handleClick('/admin/users/add')}>Add User
      </Button>

       <Table
         rowHeight={50}
         rowsCount={users.length}
         width={1100}
         height={400}
         headerHeight={50}>
             <Column
               header={<Cell>User Name</Cell>}
               cell={({rowIndex}) => (
                      <Cell>
                         {users[rowIndex].username}
                      </Cell>
                    )}
               width={250}
             />
             <Column
               header={<Cell>First Name</Cell>}
               cell={({rowIndex}) => (
                      <Cell>
                         {users[rowIndex].fname}
                      </Cell>
                    )}
               width={250}
             />
             <Column
               header={<Cell>Last Name</Cell>}
               cell={({rowIndex}) => (
                      <Cell>
                         {users[rowIndex].lname}
                      </Cell>
                    )}
               width={250}
             />
             <Column
               header={<Cell>Email</Cell>}
               cell={({rowIndex}) => (
                      <Cell>
                         {users[rowIndex].email}
                      </Cell>
                    )}
               width={250}
             />
             <Column
               header={<Cell>Action</Cell>}
               cell={({rowIndex}) => (<Cell>
                    <Button iconName="edit" onClick={() => this.handleClick('/admin/users/edit')}>
                    </Button>&nbsp;&nbsp;
                    <Button iconName="pt-icon-delete" onClick={() => this.handleDelete(users[rowIndex].userid)}>
                    </Button></Cell>
                 )}
               width={100}
             />
        </Table>

        <Dialog
            iconName="inbox"
            isOpen={this.state.isOpen}
            onClose={() => this.toggleDialog()}
            title="Are you sure you want to delete?"
         >
                <div className="pt-dialog-body">
                    Some content
                </div>
                <div className="pt-dialog-footer">
                    <div className="pt-dialog-footer-actions">
                        <Button text="Yes" onClick={() => this.DeleteUser()} />
                        <Button
                            intent={Intent.PRIMARY}
                            onClick={() => this.toggleDialog()}
                            text="Cancel"
                        />
                    </div>
                </div>
            </Dialog>
      </div>
    );
  }
}


export default UsersPage;
