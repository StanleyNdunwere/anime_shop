import React, { Component } from 'react'
import "../sign_in_sign_up_pages/sign_in_sign_up.style.css"
import TextInput from "../global_components/text_input_component/text_input.component"
import SubmitButton from "../global_components/submit_button/submit_button.component"
import { signInWithGoogle } from '../../base/firebase_config/firebase_config_data'


class SignInSignUp extends Component {

  constructor(props) {
    super(props)
    this.componentName = "sign in sign up page"
    this.state = {

    }
  }

  handleChange = (data) => {
    console.log(this.state)
    this.setState(data)
  }

  handleSignInWithGoogle = () => {
    
   }


  render() {
    return (
      <div className="root-container">
        <div className="form-container">
          <h2>Already have an account?</h2>
          <p>Sign in with your email and password</p>
          <form name="sign-up" >
            <TextInput
              inputType="email"
              inputName="email"
              labelFor="email"
              required={true}
              inputText="Enter email"
              parentState={this.state}
              handleChange={this.handleChange} />
            <TextInput
              inputType="password"
              inputName="password"
              labelFor="password"
              required={true}
              inputText="Enter Password"
              handleChange={this.handleChange}
              parentState={this.state} />
            <div className="button-container">
              <SubmitButton submitType="submit" submitName="submit-button" submitValue="Sign In" style={{ width: "35%" }} />
              <SubmitButton submitType="submit" submitName="submit-button" submitValue="Google" style={{ width: "50%" }} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default SignInSignUp