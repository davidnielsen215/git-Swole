import React, { Component } from 'react';
import { Link} from 'react-router-dom'
// import Home from './Home'

import Iframe from 'react-iframe'
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
                    <br />
                    <h1 className="title2-legs">Legs</h1>
                    <br />
                    <div className="legs-vid-container">
                    <Iframe
                        width="100%" height="100%" 
                        src="https://www.youtube.com/embed/-AWLDxutS08" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </Iframe>
                    </div>
                    <div className="legs-diagram-container">
                        Diagram
                    </div>
                    <h3 className="legs-description"> Description:</h3> 
                    <p className='legs-p'>
                        In this video I’m going to be covering the “best” leg workout 
                        for mass and strong legs based on scientific literature and our 
                        understanding of the leg muscles. I’ll go through the most effective 
                        leg exercises that best activate the glutes, quadriceps, and hamstrings. 
                        These exercises are great for men and women, if your goal is leg 
                        hypertrophy '(bigger legs)' from your leg workouts. The four exercises 
                        I will discuss are the barbell back squat, front squat, Bulgarian 
                        split squat, and hip thrusts for glutes using a barbell. This 
                        combination of bilateral and unilateral leg exercises is ideal in 
                        order to add mass to the leg while correcting asymmetries that 
                        would be caused by only using bilateral exercises. Stick around 
                        until the end where I provide a full sample leg workout you guys 
                        can get started with right away.
                    </p>
                </div>    
                    
            </div>
           
        );
    }
}

export default Legs;