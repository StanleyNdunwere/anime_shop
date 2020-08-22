import React, { Component } from 'react'
import "./header.style.css"
import logo from "../../assets/shield.png"
import bag from "../../assets/bag.png"
import { Link } from "react-router-dom"
class Header extends Component {
  constructor(props) {
    super(props)
    this.componentName = "header container"

  }

  render() {
    return (
      <div className="header-container">
        <div className="icon-logo">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="site-name">
            <p><span>Anime</span> Shop</p>
          </div>
        </div>
        <div class="nav-bar">
          <Link to="/collections">Collections</Link>
          <Link>Contact</Link>
          <Link>Sign In</Link>
          <div className="counter">
            <div>
              <Link>
                <img src={bag} alt="" />
              </Link>
            </div>
            <p>30</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header