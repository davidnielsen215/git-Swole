import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import Home from './Home'
import './Styles.css'


class Chest extends Component {
    render() {
        return (
            <div>
                
                <nav className='home-btn'>
                    <Link to="/Home">Home</Link>
                </nav>
                <h1 className='title-chest'> Git Chest Yoked</h1> 
                <div>
                    <div className="chest-vid-container">
                        container
                    </div>
                    <div className="chest-diagram-container">
                        Diagram
                    </div>
                    <h3 className="chest-description"> Description: alkdfklndkdsafadsfdsfhhaishfdjadshkfjh asdjkfhjkasdh fdsf dsfhdaskjfhiadshfi asudhfkjadshfkjdhsjkfhasdslfnkladslnkfla dksnflkadsnflkndslkfnk;ladsnflkdsnflkdsnf;lkndsklnfkladsnfkljdasnfkjesiofjioejnf</h3>
                </div>
            
                    
            </div>
           
        );
    }
}

export default Chest;