import React, { Component } from "react";

import OtpInput from "react-otp-input";
import '../../styles/common.css'

export default class Otp extends Component {
  state = { Otp: '' };
  handleChange = (Otp) => this.setState({ Otp });
  render() {
    return (
      <div className="otpContainer">
      <OtpInput
        value={this.state.Otp}
        onChange={this.handleChange}
        numInputs={4}
        containerStyle= {{display:'inline-flex'}}
        className="input-otp"
        focusStyle={{ outline: 'none', borderRadius: '0px' }}
      />
      </div>
    );
  }
}