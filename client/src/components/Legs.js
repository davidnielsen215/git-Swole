import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import Home from './Home'
import './Styles.css'


class Legs extends Component {
    render() {
        return (
            <div>
                
                <nav className='home-btn'>
                    <Link to="/Home">Home</Link>
                </nav>
                <h1 className="title-legs">Git Legs Yoked</h1> 
                <div>
                    <div className="legs-vid-container">
                        container
                    </div>
                    <div className="legs-diagram-container">
                        Diagram
                    </div>
                    <h3 className="legs-description"> Description: alkdfklndkdsafadsfdsfhhaishfdjadshkfjh asdjkfhjkasdh fdsf dsfhdaskjfhiadshfi asudhfkjadshfkjdhsjkfhasdslfnkladslnkfla dksnflkadsnflkndslkfnk;ladsnflkdsnflkdsnf;lkndsklnfkladsnfkljdasnfkjesiofjioejnf</h3>
                </div>    
                    
            </div>
           
        );
    }
}

export default Legs;