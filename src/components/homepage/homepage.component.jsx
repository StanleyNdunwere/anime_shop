import React, { Component } from 'react';
import '..//homepage/homepage.style.css';
import MenuItemContainer from "./menu_items/menu_item_container.component"
class HomePage extends Component {

	constructor(props) {
		super(props)
		this.componentName = "homepage"
	}

	render() {
		return (
			<div className= "homepage-container">
				<MenuItemContainer></MenuItemContainer>
			</div>
		)
	}
}
export default HomePage