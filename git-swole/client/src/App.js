import React, { Component } from 'react';
import { Route, Switch,} from 'react-router-dom'
import Home from './components/Home'
import Arms from './components/Arms'
import Chest from './components/Chest'
import Back from './components/Back'
import Core from './components/Core'
import Legs from './components/Legs'

import './components/Styles.css'
class App extends Component {
  render() {
    return (
      <>
          
          <Switch >
            <Route path='/Home' component={Home} />
            <Route path='/Arms' component={Arms} />
            <Route path='/Chest' component={Chest} />
            <Route path='/Back' component={Back} />
            <Route path='/Core' component={Core} />
            <Route path='/Legs' component={Legs} />
           

          </Switch>
        

      </>
    );
  }
}

export default App;

