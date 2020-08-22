import React, { Component } from 'react'
import "./footer.style.css"
class Footer extends Component {
  constructor(props) {
    super(props)
    this.componentName = "header container"

  }

  render() {
    let copy = `©`

    return (
      <div className="footer-container">
        <div className="text">
          <p>Copyright: None (this is a sample project) {copy} 2020 </p>
        </div>
      </div>
    )
  }

}

export default Footer