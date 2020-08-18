import React, { Component } from "react"
import "../menu_items/menu-item.style.css"
import MenuItem from "../menu_items/menu_item.component"
import adventure from "../../assets/adventure.jpg"
import action from "../../assets/action.jpg"
import mystery from "../../assets/mystery.jpg"
import manga from "../../assets/manga.jpg"
import tv from "../../assets/tv.jpg"
class MenuItemContainer extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className= "all-menu-container">
        <div className="menu-items-container">
          <MenuItem src={adventure} title={"ADVENTURE"} ></MenuItem>
          <MenuItem src={mystery} title={"MYSTERY"}></MenuItem>
          <MenuItem src={action} title={"ACTION"}></MenuItem>
        </div>
        <div className="anime-type-contaner">
          <MenuItem src={manga} title={"MANGA"}></MenuItem>
          <MenuItem src={tv} title={"TV"}></MenuItem>
        </div>
      </div>

    )
  }
}

export default MenuItemContainer