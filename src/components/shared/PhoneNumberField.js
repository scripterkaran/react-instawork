import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";

class PhoneNumberField extends React.Component {

  render() {
    let {classes, phone_number,handleChange} = this.props
    return (
      <div  style={{display: 'flex', 'alignItems': 'center'}}>
        <div>+</div>
         <TextField
          id="standard-phone"
          label="Phone"
          type="number"
          className={classes.textField}
          value={phone_number}
          onChange={handleChange('phone_number')}
          margin="normal"
          helperText="Enter with country code ex: 919964452344"
         />
      </div>
    )

  }
}

export default PhoneNumberField