import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class AnimeCategoryPages extends Component {
  constructor(props) {
    super(props)
    this.componentName = "anime category"
  }

  render() {
    return (
      <h2>{this.componentName}</h2>
    )
  }
}


export default withRouter(AnimeCategoryPages)