import React, { Component } from 'react'
import "../text_input_component/text_input.style.css"

class TextInput extends Component {
  constructor(props) {
    super(props)
    this.componentName = "text input"
    this.state = {
      focus: false
    }
  }

  handleOnFocus = (event) => {
    this.setState({ focus: true })
  }

  handleOnBlur = (event) => {
    this.setState({ focus: false })
  }


  handleOnChange = (event, handleChangeParent) => {
    let value = {
      [event.target.name]: event.target.value
    }
    handleChangeParent(value)
  }

  render() {
    let inputType = this.props.inputType
    let inputText = this.props.inputText
    let inputName = this.props.inputName
    let labelFor = this.props.labelFor
    let requiredField = this.props.required
    let handleChangeParent = this.props.handleChange
    let labelClassName = "label-focus-out";
    let focusChangeClassName = "label-focus"


    return (
      <div className="field-container">
        <label htmlFor={labelFor}
          className={(this.state.focus) ? focusChangeClassName : labelClassName}>
          {inputText}
        </label>
        <input type={inputType} name={inputName} required={requiredField} className="email-input"
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          onChange={(event) => this.handleOnChange(event, handleChangeParent)} />
      </div>
    )
  }
}

export default TextInput