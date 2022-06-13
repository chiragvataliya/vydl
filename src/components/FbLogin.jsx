import React, { Component } from 'react'
import { FacebookLogin } from 'react-facebook-login';


const responseFacebook = (response) => {
    console.log(response);
  }
const componentClicked = (data) =>{
    console.warn(data)
}

export default class FbLogin extends Component {
    
  render() {
    return (
        <FacebookLogin
        appId="1088597931155576"
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} />
    )
  }
}

