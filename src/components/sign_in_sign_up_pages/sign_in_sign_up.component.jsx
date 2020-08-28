import React, { Component } from 'react'
import "../sign_in_sign_up_pages/sign_in_sign_up.style.css"

class SignInSignUp extends Component {

  constructor(props) {
    super(props)
    this.componentName = "sign in sign up page"
  }

  render() {
    return (
      <div className="root-content-container">
        <h1>Sign In Sign Up Page</h1>
      </div>
    )
  }
}
export default SignInSignUp