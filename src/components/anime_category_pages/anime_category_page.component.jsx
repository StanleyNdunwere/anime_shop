import React, { Component } from 'react'


class AnimeCategoryPage extends Component {
  constructor(props) {
    super(props)
    this.componentName = "anime category"
  }

  render() {
    return (
      <h2>{this.componentName}</h2>
    )
  }
}


AnimeCategories = (props)=>{
return (
  <div className= "anime-category-container">


  </div>
)
}
export default AnimeCategoryPage