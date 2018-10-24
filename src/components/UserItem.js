import React, {Component} from 'react';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Avatar from '@material-ui/core/Avatar';
import logo from './../logo.svg';
import {Link} from "react-router-dom";

export default class UserItem extends Component {
  render() {
    let {first_name, last_name,id, email} = this.props.item
    return (
      <Link to={`/users/${id}`}>
        <ListItem button>
          <Avatar alt="Remy Sharp" src={logo}/>
          <ListItemText primary={`${first_name} ${last_name}`} secondary={email}/>
        </ListItem>
      </Link>
    )

  }

}