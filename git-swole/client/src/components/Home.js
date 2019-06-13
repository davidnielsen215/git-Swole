import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './Home.css'
import Arms from './Arms'
import Back from './Back'
import Chest from './Chest'
import Core from './Core'
import Legs from './Legs'

class Home extends Component {
    

    render() {
        return (
            <div>
                <h1 className='title-home'>
                    Git Swole
                <img className='dumbell' src="https://img.icons8.com/ios/50/000000/dumbbell-filled.png"/>
                </h1>
                
                
                <nav>
                    <Link className="legs-btn" to='/Legs' component={Legs}>Legs page</Link>
                    <Link className="arms-btn" to='/Arms' component={Arms}>Arms page</Link>
                    <Link className="back-btn" to='/Back' component={Back}>Back page</Link>
                    <Link className="chest-btn" to='/Chest' component={Chest}>Chest page</Link>
                    <Link className="core-btn" to='/Core' component={Core}>Core page</Link>
                </nav>
                
                
                <div>

                </div>
                
            </div>
        );
    }
}
export default Home;