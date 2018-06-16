import React,  {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Scrape from './Scrape';
import Saved from './Saved';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home} /> 
              <Route exact path="/scrape" component={Scrape}/> 
              <Route exact path="/saved" component={Saved} /> 
            </div>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App;