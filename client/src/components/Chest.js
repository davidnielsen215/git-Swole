import React, { Component } from 'react';
import { Link} from 'react-router-dom'
// import Home from './Home'

import Iframe from 'react-iframe'
import './Styles.css'


class Chest extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isHidden: true
        }
    }
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {
        return (
            <div>
                
                <nav className='home-btn'>
                    <Link to="/">Home</Link>
                </nav>
                    <h1 className='title-chest'> Git Chest Yoked</h1> 
                    <div>
                        <div className="chest-vid-container">
                            <br />
                            <h1 className="title2-chest">Chest</h1>
                            <br />
                            <div>
                                <Iframe 
                                    width="560" 
                                    height="315" 
                                    src="https://www.youtube.com/embed/MxnzcssW-tk" 
                                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </Iframe>
                            </div>
                        </div>
                        {/* <div className="chest-diagram-container">
                            <img className='' alt='' src='' />
                        </div> */}
                        <div>
                            <button onClick={this.toggleHidden.bind(this)} type="button">Display</button>
                            {!this.state.isHidden && <Child />}
                        </div>
                        <h3 className="chest-description"> Description:</h3>
                        <p className='chest-p'>
                            When it comes to the “best chest workout”, it really comes down to choosing 
                            exercises that allow symmetrical growth in the upper chest, middle chest, 
                            and lower chest while still providing overall mass to your chest. If your 
                            chest workout is unbalanced and favours one portion of your chest over 
                            the other, overtime this will lead to imbalances and take away from the 
                            aesthetics of your chest. In this video I’ll show you guys the best workout 
                            for chest based on scientific literature and our anatomical understanding 
                            of the body. It includes the best upper chest exercises, middle chest 
                            exercises, and lower chest exercises to help evenly shape and build your chest. 
                            The upper chest will be prioritized through movements that involve shoulder 
                            flexion. The middle chest will be prioritized through any horizontal adducting 
                            movements that don’t involve shoulder flexion or extension. The lower chest 
                            will be prioritized through movements that involve shoulder extension. 
                            Although the chest exercises in this video have been carefully chosen through 
                            my analysis of many studies, it doesn’t account for every individual. So feel 
                            free to swap out some exercises for other chest exercises that you feel better 
                            chest activation with.
                        </p>
                    </div>
                    
                    
            </div>
           
        );
    }
}
const Child = () => (
    <div className='modal'>
        hello world
    </div>
)

export default Chest;