import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import Home from './Home'
import './Styles.css'


class Arms extends Component {
    render() {
        return (
            <div>
                
                <nav className='home-btn'>
                    <Link to="/Home">Home</Link>
                </nav>
                    <h1>ARMS ARE DOPE</h1> 
            
                    
                </div>
           
        );
    }
}

export default Arms;