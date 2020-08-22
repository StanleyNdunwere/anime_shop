import React, { Component } from 'react'
import "../anime_category_page/anime-category-page.style.css"
import cart from "../../assets/cart.png"

class CategoryItem extends Component {
  constructor(props) {
    super(props)
    this.componentName = "category item"
  }

  render() {
    return (
      <div className="category-item">
        <div className="anime-image-and-cart-button">
          <img src={this.props.itemData.link} alt={this.props.itemData.title} />
          <div className="anime-add-to-cart-button">
            <p>Add To Cart</p><span><img src={cart} alt="cart" /></span>
          </div>
        </div>
        <div className="price-and-title">
          <span>{this.props.itemData.title}</span>
          <span>{`$${this.props.itemData.price}`}</span>
        </div>
      </div>
    )
  }
}

export default CategoryItem