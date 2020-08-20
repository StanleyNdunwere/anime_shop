import React, { Component } from "react"
import "./menu-item.style.css"

class MenuItem extends Component {

  constructor(props) {
    super(props)
    this.componentName = "Menu Item"
  }


  render() {
    return (
      <div className="menu-item">
        <img className="menu-image-holder" src= {this.props.src} alt ="Anime"/>
        <div className="menu-content-background">
          <div className="menu-item-content">
            <p className="menu-item-header">{this.props.title}</p>
            <p className="menu-item-cta">SHOP NOW</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuItem