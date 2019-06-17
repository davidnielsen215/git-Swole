import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import Home from './Home'
import './Styles.css'

class Core extends Component {
    render() {
        return (
            <div>
                 
                 <nav className='home-btn'>
                    <Link to="/Home">Home</Link>
                </nav>
                    <h1 className="title-core">
                        Git Core Yolked
                    </h1> 
                    <div>
                        <div className="core-vid-container">
                            container
                        </div>
                        <div className="core-diagram-container">
                            Diagram
                        </div>
                        <h3 className="core-description"> Description: alkdfklndkdsafadsfdsfhhaishfdjadshkfjh asdjkfhjkasdh fdsf dsfhdaskjfhiadshfi asudhfkjadshfkjdhsjkfhasdslfnkladslnkfla dksnflkadsnflkndslkfnk;ladsnflkdsnflkdsnf;lkndsklnfkladsnfkljdasnfkjesiofjioejnf</h3>
                    </div>
            
                    
                
            </div>
        );
    }
}

export default Core;