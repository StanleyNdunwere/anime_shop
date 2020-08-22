import React, { Component } from 'react'
import "../anime_category_page/anime-category-page.style.css"
import SingleCategory from "./single_category.component"


class AnimeCategoryPage extends Component {

  constructor(props) {
    super(props)
    this.componentName = "anime category page"
  }

  render() {
    return (
      <div className="anime-collections-page-container">
        <div className="anime-collections-page-title">
          <p>Anime Categories</p>
        </div>
        <SingleCategory></SingleCategory>
        <SingleCategory></SingleCategory>
        <SingleCategory></SingleCategory>
        <div className="anime-media">
          <p>Anime Media Type</p>
        </div>
        <SingleCategory></SingleCategory>
        <SingleCategory></SingleCategory>
      </div>

    )
  }

}
export default AnimeCategoryPage;