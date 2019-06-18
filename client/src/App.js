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

  //ComponentDidMount(){
    // get request to '/'
  //}



  render() {
    return (
      <>
          
          <Switch >
            <Route exact path='/' component={Home} />
            <Route path='/arms' component={Arms} />
            <Route path='/chest' component={Chest} />
            <Route path='/back' component={Back} />
            <Route path='/core' component={Core} />
            <Route path='/legs' component={Legs} />
          </Switch>
      </>
    );
  }
}

export default App;

