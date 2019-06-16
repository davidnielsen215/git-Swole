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
                <h1 className="title-arms">Git Arms Yoked</h1> 
                <div>
                    <div className="arms-vid-container">
                        container
                    </div>
                    <div className="arms-diagram-container">
                        Diagram
                    </div>
                    <h3 className="arms-description"> Description: alkdfklndkdsafadsfdsfhhaishfdjadshkfjh asdjkfhjkasdh fdsf dsfhdaskjfhiadshfi asudhfkjadshfkjdhsjkfhasdslfnkladslnkfla dksnflkadsnflkndslkfnk;ladsnflkdsnflkdsnf;lkndsklnfkladsnfkljdasnfkjesiofjioejnf</h3>
                </div>
            
                    
            </div>
           
        );
    }
}

export default Arms;