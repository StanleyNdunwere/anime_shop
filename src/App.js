import React from 'react';
import './App.css';
import HomePage from './components/homepage/homepage.component'
import { Route, Switch } from "react-router-dom"
import AnimeCategoryPage from "./components/anime_category_pages/anime_category_page.component"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.componentName = "App Root Component"
  }

  render() {
    return (
      <div className="app-background">
        <div className="app-container">
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/anime-category/:category" component={AnimeCategoryPage} />
          </Switch>
        </div>
      </div>
    )
  }
}
export default App
