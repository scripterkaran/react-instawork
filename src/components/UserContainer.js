import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchAddUsers, fetchUsers} from '../store/actions'
import UserForm from "./UserForm";
import UserList from "./UserList";
import {withStyles} from "@material-ui/core";


const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    marginTop: '20px'
  },
});


class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  addUser(data) {
    this.props.dispatch(fetchAddUsers({
      ...data
    })).then(() => {
      // debugger
      // self.formRef.current.resetState()
    })
  }

  render() {
    const {loading, users, classes} = this.props;

    // if (error) {
    //     return <div>Error! {error.message}</div>;
    // }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className={classes.container}>
        <UserForm ref={this.formRef} handleSubmit={(data) => {
          this.addUser(data)
        }}/>
        <UserList loading={true}
                  users={users}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error
});


export default connect(mapStateToProps)(withStyles(styles)(UserContainer))
