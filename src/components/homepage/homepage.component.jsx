import React, { Component } from 'react';
import '..//homepage/homepage.style.css';

class HomePage extends Component {

	constructor(props) {
		super(props)
		this.componentName = "homepage"
	}

	render() {
		return (
			<div className= "homepage-container">
				{this.componentName}
			</div>
		)
	}
}
export default HomePage