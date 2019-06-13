import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import Home from './Home'
import './Styles.css'


class Back extends Component {
    render() {
        return (
            <div>
                
                <nav className='home-btn'>
                    <Link to="/Home">Home</Link>
                </nav>
                    <h1>Back is  DOPE</h1> 
            
                    
                </div>
           
        );
    }
}

export default Back;