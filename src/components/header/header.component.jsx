import React, { Component } from 'react'
import "./header.style.css"
import logo from "../../assets/shield.png"
import bag from "../../assets/bag.png"
import { Link } from "react-router-dom"
import { auth, signInWithGoogle } from '../../base/firebase_config/firebase_config_data'

class Header extends Component {
  constructor(props) {
    super(props)
    this.componentName = "header container"

  }

  render() {
    let currentUser = this.props.currentUser
    console.log(currentUser)
    return (
      <div className="header-container">
        <div className="icon-logo">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="site-name">
            <Link to="/"><span>Anime</span> Shop</Link>
          </div>
        </div>
        <div className="nav-bar">
          <Link to="/collections">Collections</Link>
          <Link to="/collections">Contact</Link>
          {!currentUser ?
            (<Link to="/sign-in" >Sign In</Link>) :
            (<Link to="/" onClick={() => { auth.signOut() }}>Sign Out</Link>)
          }
          <div className="counter">
            <div>
              <Link to="/collections">
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