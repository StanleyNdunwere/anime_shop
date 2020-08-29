import React, { Component } from 'react'
import "../sign_in_sign_up_pages/sign_in_sign_up.style.css"

class SignInSignUp extends Component {

  constructor(props) {
    super(props)
    this.componentName = "sign in sign up page"
  }

  render() {
    return (
      <div className="root-container">
        <div className="form-container">
          <h2>Already have an account?</h2>
          <p>Sign In with your account</p>
          <form name="sign-up" >
            <div className="field-container">
              <label htmlFor="email" className="label label-placeholder" >Email</label>
              <input type="email" name="email" className="email-input" />
            </div>
            <div className="field-container">
              <label htmlFor="email" className=" label label-placeholder">Password</label>
              <input type="password" name="password" className="password-input" />
            </div>
            <div className="submit-container">
              <input type="submit" name="email" className="email-input" value="Sign In" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default SignInSignUp