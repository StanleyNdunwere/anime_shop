import React, { Component } from "react"
import "../menu_items/menu-item.style.css"
import adventure from '../../assets/adventure.jpg'

class MenuItem extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="menu-item">
        <img className="menu-image-holder" src= {this.props.src}/>
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