import React, { Component } from "react"
import "./menu-item.style.css"
import { Route, Switch, withRouter } from 'react-router-dom'

class MenuItem extends Component {

  constructor(props) {
    super(props)
    console.log(this.props)
    this.componentName = "Menu Item"
  }


  render() {
    return (
      <div className="menu-item">
        <img className="menu-image-holder" src={this.props.src} alt="Anime" />
        <div className="menu-content-background" onClick={(() => {
          this.goToNextPage(this.props)
          console.log("logging from the anime click content")
        })}>
          <div className="menu-item-content">
            <p className="menu-item-header">{this.props.title}</p>
            <p className="menu-item-cta">SHOP NOW</p>
          </div>
        </div>
      </div>
    )
  }

  goToNextPage = (props) => {
    const ACTION = 'ACTION'
    const ADVENTURE = 'ADVENTURE'
    const MYSTERY = 'MYSTERY'
    let urlTail = "";
    let history = props.history
    let baseUrl = props.match.url;
    let stub = "anime-category/"
    switch (props.title) {
      case (ACTION):
        urlTail = ACTION.toLowerCase()
        break;
      case (ADVENTURE):
        urlTail = ADVENTURE.toLowerCase()
        break;
      case (MYSTERY):
        urlTail = MYSTERY.toLowerCase()
        break;
    }

    history.push(baseUrl + stub + urlTail)

  }
}

export default withRouter(MenuItem)