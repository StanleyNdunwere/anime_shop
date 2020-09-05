import React, { Component } from 'react'
import "../anime_category_page/anime-category-page.style.css"
import CategoryItem from "./category_item_container.component"


class SingleCategory extends Component {

  constructor(props) {
    super(props)
    this.componentName = "anime single category container"

  }

  render() {
    // console.log(this.props.groupData)
    let firstFourItems = this.getFirstFourItemsToDisplay(this.props.groupData)
    // console.log(firstFourItems)
    return (
      <div className="anime-single-category">
        <div className="category-title">
          <p>{this.props.title}</p>
        </div>
        <div className="category-items-container">
          {firstFourItems.map((item) => {
            return <CategoryItem key={item.title} itemData={item}></CategoryItem>
          })}
        </div>
      </div>
    )
  }

  getFirstFourItemsToDisplay = (groupedData) => {
    if (groupedData.length === 0 || groupedData.length < 4) {
      return groupedData
    }
    return groupedData.filter((data) => {
      return groupedData.indexOf(data) < 4
    })
  }
}

export default SingleCategory