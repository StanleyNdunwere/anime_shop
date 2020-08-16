import React from 'react';
import './App.css';
import HomePage from './components/homepage/homepage.component'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.componentName = "App Root Component"
  }

  render() {
    return (
      <div className="app-background">
        <div className="app-container">
          <HomePage></HomePage>
        </div>
      </div>
    )
  }
}
export default App