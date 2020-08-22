import React from 'react';
import './App.css';
import HomePage from './components/homepage/homepage.component'
import { Route, Switch } from "react-router-dom"
import AnimeCategoryPages from "./components/anime_category_pages/anime_category_page.component"
import AnimeCategoryPage from "./components/anime_category_page/anime_category_page.component"
import Header from "../src/components/header/header.component"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.componentName = "App Root Component"
  }

  render() {
    return (
      <div className="app-background">
        <div className="app-container">
          <Header></Header>
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/collections" component={AnimeCategoryPage} />
            <Route exact={true} path="/anime-category/:category" component={AnimeCategoryPages} />
          </Switch>
        </div>
      </div>
    )
  }
}
export default App
