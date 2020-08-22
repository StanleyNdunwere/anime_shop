import React, { Component } from 'react'
import "../anime_category_page/anime-category-page.style.css"
import CategoryItem from "./category_item_container.component"


class SingleCategory extends Component {

  constructor(props) {
    super(props)
    this.componentName = "anime single category container"
  }

  render() {
    return (
      <div className="anime-single-category">
          <div className="category-title">
            <p>Mystery</p>
          </div>
          <div className="category-items-container">
            <CategoryItem></CategoryItem>
            <CategoryItem></CategoryItem>
            <CategoryItem></CategoryItem>
            <CategoryItem></CategoryItem>            
          </div>
        </div>
    )
  }
}

export default SingleCategory