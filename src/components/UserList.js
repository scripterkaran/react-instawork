import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import UserItem from './UserItem';
import ProgressBar from "./shared/ProgressBar";
import {connect} from 'react-redux'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function UserList(props) {
  const {classes, users, loading} = props;
  let progress = loading ? <ProgressBar/> : '';
  return (
    <div className={classes.root}>
      {progress}
      <List component="nav">
        {users.map(user =>
          <UserItem key={user.id} item={user}/>
        )}

      </List>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.users.listLoading
});

UserList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(UserList));

