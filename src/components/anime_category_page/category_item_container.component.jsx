import React, { Component } from 'react'
import "../anime_category_page/anime-category-page.style.css"
import testImg from "../../assets/tv.jpg"
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
          <img src={testImg} alt="Category" />
          <div className="anime-add-to-cart-button scale">
            <p>Add To Cart</p><span><img src={cart} alt="cart" /></span>
          </div>
        </div>
        <div className="price-and-title">
          <span>Naruto</span>
          <span>$100</span>
        </div>
      </div>
    )
  }
}

export default CategoryItem