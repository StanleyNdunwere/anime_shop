import React, { Component } from 'react'
import "../submit_button/submit_button.style.css"

class SubmitButton extends Component {
  constructor(props) {
    super(props)
    this.componentName = "submit button"

  }

  render() {
    let submitType = !this.props.submitType ? null : this.props.submitType
    let submitName = this.props.submitName
    let submitValue = this.props.submitValue
    let onClick = this.props.onClick
    let style = this.props.style
    return (
      <span className="submit-container" >
        <input onClick={onClick} type={submitType} name={submitName} readOnly={true} className="email-input" value={submitValue}
          style={style !== null ? style : null} />
      </span>
    )
  }
}

export default SubmitButton