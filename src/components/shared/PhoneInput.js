import React from 'react';
import InputMask from 'react-input-mask';

class PhoneInput extends React.Component {
  render() {
    return <InputMask {...this.props} mask="+999999999999" maskChar=""/>;
  }
}

export default PhoneInput