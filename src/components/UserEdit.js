import React, {Component} from 'react';
import {connect} from 'react-redux'
import {clearUserDetails, fetchDeleteUser, fetchEditUser, fetchUsers} from '../store/actions'
import UserForm from "./UserForm";

class UserEditContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.id
    this.props.dispatch(clearUserDetails())
    this.props.dispatch(fetchUsers(userId))
  }

  editUser(data) {
    this.props.dispatch(fetchEditUser(data)).then()
  }

  deleteUser(data) {
    this.props.dispatch(fetchDeleteUser(data)).then(() => {
      this.props.history.replace('')
    })
  }

  render() {
    let {userInstance} = this.props;

    let loadForm = !!userInstance.id

    let form = loadForm ? <UserForm user={userInstance}
                                    handleSubmit={(data) => {
                                      this.editUser(data)
                                    }}
                                    handleDelete={(data) => {
                                      this.deleteUser(data)
                                    }}/> : 'Loading.... user details'
    return (
      <div>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInstance: state.users.userEditInstance,
});


export default connect(mapStateToProps)(UserEditContainer)
