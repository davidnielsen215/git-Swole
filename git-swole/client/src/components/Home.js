import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './Home.css'
import Legs from './Legs'

class Home extends Component {
    

    render() {
        return (
            <div>
                    <div className ='home-box'><Link to="/">HOME BUTTON</Link></div>

                    <Link to='/Legs'>Legs page</Link>
            <h1 className='title'>Git Swole</h1>
                
            </div>
        );
    }
}

export default Home;