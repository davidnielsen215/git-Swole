import React, { Component } from 'react';
import { Link} from 'react-router-dom'
// import Home from './Home'

import Iframe from 'react-iframe'
import './Styles.css'

class Core extends Component {
    render() {
        return (
            <div>
                 
                 <nav className='home-btn'>
                    <Link to="/">Home</Link>
                </nav>
                    <h1 className="title-core">
                        Git Core Yolked
                    </h1> 
                    <div>
                        <br />
                        <h1 className="title2-core">Core</h1>
                        <br />
                        <div className="core-vid-container">
                            <Iframe 
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/O6ZhQk20XcY" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </Iframe>
                        </div>
                    {/* <div className="core-diagram-container">
                        <img className='' alt='' src='' />
                    </div> */}
                    <h3 className="core-description"> Description:</h3>
                    <p className='core-p'>
                        If you want a well-defined, impressive looking six pack then you need to 
                        incorporate weighted abs exercises into your ab training routine! These 
                        exercises allow you to easily progressively overload your abs with weight 
                        in order to grow your abs and get them to “pop out” more. In this video 
                        I’ll be going through the 4 best weighted ab exercises, and show how you 
                        can incorporate them into an weighted ab routine. I often get asked if you 
                        should do ab exercises with weights, and in my opinion if you want your 
                        abs to “pop” then using a weighted ab routine is a must!
                    </p>
                </div>
            
                    
                
            </div>
        );
    }
}

export default Core;