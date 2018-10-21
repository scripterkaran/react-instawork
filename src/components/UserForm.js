import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";
import SimpleSnackbar from "./shared/SimpleSnackbar";
import {closeSnackAction, setSnackMessage} from "../store/actions";
import {connect} from "react-redux";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    marginTop: 10,
    width: 100
  }
});

const roles = [
  {
    value: 1,
    label: 'Admin',
  },
  {
    value: 2,
    label: 'Staff',
  },
];

class UserForm extends React.Component {

  state = {
    first_name: '',
    last_name: '',
    role: 1,
    phone_number: '',
    email: '',
    username: '',
    ...this.props.user
  };

  handleChange = name => event => {
    if (name === 'phone_number') {
      if (isNaN(event.target.value)) {
        this.setState({
          [name]: 0,
        });
        return // imp
      }
    }
    this.setState({
      [name]: event.target.value,
    });
  };

  emitSubmit() {
    if (this.state.first_name === '' || this.state.last_name === '' || this.state.username === '') {
      this.props.dispatch(setSnackMessage('Please fill all the required fields'))
      return // imp
    }
    let {handleSubmit} = this.props
    handleSubmit(this.state)
    if (!this.state.id)this.resetState() // rest form only when it was newly added
  }

  resetState() {
    this.setState({
        first_name: '',
        last_name: '',
        role: 1,
        phone_number: '',
        email: '',
        username: '',
      }
    )
  }

  render() {
    const {classes, user, handleDelete} = this.props;

    let buttonComponent = (
      <Button color="secondary" className={classes.button} onClick={() => (handleDelete(this.state))}>
        DELETE
      </Button>)
    let deleteButton = user && user.id ? buttonComponent : ''

    return (
      <div className={classes.container}>
        <TextField
          required
          id="standard-username"
          label="Username"
          className={classes.textField}
          value={this.state.username}
          onChange={this.handleChange('username')}
          margin="normal"
        />
        <TextField
          required
          id="standard-first-name"
          label="First Name"
          className={classes.textField}
          value={this.state.first_name}
          onChange={this.handleChange('first_name')}
          margin="normal"
        />
        <TextField
          required
          id="standard-last-name"
          label="Last Name"
          className={classes.textField}
          value={this.state.last_name}
          onChange={this.handleChange('last_name')}
          margin="normal"/>

        <TextField
          id="standard-email"
          label="Email"
          type="email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />

        <TextField
          id="standard-phone"
          label="Phone"
          type="text"
          className={classes.textField}
          value={this.state.phone_number}
          onChange={this.handleChange('phone_number')}
          margin="normal"
          helperText="Enter with country code ex: 919964452344"
        />


        <TextField
          id="standard-select-role"
          select
          label="Select Role"
          className={classes.textField}
          value={this.state.role}
          onChange={this.handleChange('role')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {roles.map(option => (
            <MenuItem key={option.value} value={option.value} className={classes.dropSelect}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button color="primary" className={classes.button} onClick={() => this.emitSubmit()}>
          {user && user.id ? 'EDIT' : 'ADD'}
        </Button>
        {deleteButton}
        <SimpleSnackbar handleClose={() => this.props.dispatch(closeSnackAction())} open={this.props.snackOpen}
                        message={this.props.snackMessage.message}/>


      </div>
    );
  }
}

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  snackOpen: state.users.snackOpen,
  snackMessage: state.users.snackMessage
});


export default connect(mapStateToProps)(withStyles(styles)(UserForm));