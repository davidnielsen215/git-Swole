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
                    <h1 className='title-back'>
                        Git Back Yolked
                    </h1> 
                    <div>
                        <div className="back-vid-container">
                            container
                        </div>
                        <div className="back-diagram-container">
                            Diagram
                        </div>
                        <h3 className="back-description"> Description: alkdfklndkdsafadsfdsfhhaishfdjadshkfjh asdjkfhjkasdh fdsf dsfhdaskjfhiadshfi asudhfkjadshfkjdhsjkfhasdslfnkladslnkfla dksnflkadsnflkndslkfnk;ladsnflkdsnflkdsnf;lkndsklnfkladsnfkljdasnfkjesiofjioejnf</h3>
                    </div>
            
                    
            </div>
           
        );
    }
}

export default Back;