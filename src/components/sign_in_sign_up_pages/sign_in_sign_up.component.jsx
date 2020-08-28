import React, { Component } from 'react'
import "../sign_in_sign_up_pages/sign_in_sign_up.style.css"

class SignInSignUp extends Component {

  constructor(props) {
    super(props)
    this.componentName = "sign in sign up page"
  }

  render() {
    return (
      <div className="form-container">
        <p>Already have an account?</p>
        <p>Sign In with your account</p>
        <form name="sign-up">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="email-input" />
          </div>
          <div>
            <label htmlFor="email">Password</label>
            <input type="password" name="password" className="password-input" />
          </div>
          <div>
            <input type="submit" name="email" className="email-input" value= "Sign In" />
          </div>
        </form>
      </div>
    )
  }
}
export default SignInSignUp