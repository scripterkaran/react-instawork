import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class SimpleSnackbar extends React.Component {

  render() {
    const {classes} = this.props;
    return (
      <div>
        {/*<Button onClick={this.handleClick}>Open simple snackbar</Button>*/}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.open}
          autoHideDuration={6000}
          onClose={this.props.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.message}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.props.handleClose}>
              Close
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.props.handleClose}
            >
              {/*<CloseIcon />*/}
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);