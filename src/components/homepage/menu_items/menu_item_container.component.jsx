import React, { Component } from "react"
import "./menu-item.style.css"
import MenuItem from "./menu_item.component"
import adventure from "../../../assets/adventure.jpg"
import action from "../../../assets/action.jpg"
import mystery from "../../../assets/mystery.jpg"
import manga from "../../../assets/manga.jpg"
import tv from "../../../assets/tv.jpg"
class MenuItemContainer extends Component {

  constructor(props) {
    super(props)
    this.menuItems = [
      {
        title: "ADVENTURE",
        src: adventure,
        id: 1,
      },
      {
        title: "ACTION",
        src: action,
        id: 2,
      },
      {
        title: "MYSTERY",
        src: mystery,
        id: 3,
      }
    ]

    this.menuTypes = [
      {
        title: "Manga",
        src: manga,
        id: 4,
      },
      {
        title: "TV",
        src: tv,
        id: 5,
      },
    ]
  }


  render() {
    return (
      <div className="all-menu-container">
        <div className="menu-items-container">
          {this.menuItems.map((menuItem) => {
            return <MenuItem src={menuItem.src}
              title={menuItem.title}
              key={menuItem.id}></MenuItem>
          })}
        </div>
        <div className="anime-type-contaner">
          {this.menuTypes.map((menuType) => {
            return <MenuItem src={menuType.src}
              title={menuType.title}
              key={menuType.id}></MenuItem>
          })}
        </div>
      </div>

    )
  }
}

export default MenuItemContainer