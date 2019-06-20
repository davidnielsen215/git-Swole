import React, { Component } from 'react';
import { Link} from 'react-router-dom'
// import Home from './Home'

import { withProvider } from './GlobalProvider'
import Iframe from 'react-iframe'
import './Styles.css'


class Back extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isHidden: true
        }
    }
    render() {
        return (
            <div className="container">
                
                <nav className='home-btn'>
                    <Link to="/">Home</Link>
                </nav>
                    <h1 className='title-back'>Git Back Yolked</h1> 
                    <div>
                        <br />
                        <h1 className="title2-back">Back</h1>
                        <br />
                        <div className="back-vid-container">
                            <Iframe 
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/8LJ3Q3Fsrzs" 
                                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </Iframe>
                        </div>
                    {/* <div className="back-diagram-container">
                        <img className='' alt='' src='' />
                    </div> */}
                    <nav className="button-div">
                        <button className="button" onClick={this.props.handleGetBack} >Deadlifts</button>
                        <button className="button" onClick={this.props.handleGetBack2} >Pull-Ups</button>
                        <button className="button" onClick={this.props.handleGetBack3} >Chest-Supported Row</button>
                        <button className="button" onClick={this.props.handleGetBack4} >Lat Pulldowns</button>
                        <button className="button" onClick={this.props.handleGetBack5} >Scapular Pull-ups</button>

                        {/* {!this.state.isHidden && <Child />} */}
                    </nav>
                    <div className="workout-container">
                        <div className="workout">
                            <h2 className="title-work">
                            {this.props.backWorkout.title}</h2>
                            <h4 className="set-work" >Sets: <br /> <br />
                            {this.props.backWorkout.set}</h4>
                            <h4 className="reps-work" >Reps: <br /> <br />
                            { this.props.backWorkout.reps }</h4>
                        </div>
                        <div className="workout2">
                            <h2 className="title-work">
                            { this.props.backWorkout2.title}</h2>
                            <h4 className="set-work">Sets: <br /> <br />
                            { this.props.backWorkout2.set}</h4>
                            <h4 className="reps-work">Reps: <br /> <br />
                            { this.props.backWorkout.reps}</h4>
                        </div>
                        <div className="workout3">
                            <h2 className="title-work" >
                            {this.props.backWorkout3.title}</h2>
                            <h4 className="set-work" >Sets: <br /> <br />
                            {this.props.backWorkout3.set}</h4>
                            <h4 className="reps-work" >Reps: <br /> <br />
                            { this.props.backWorkout3.reps }</h4>
                        </div>
                        <div className="workout4">
                            <h2 className="title-work">
                            { this.props.backWorkout4.title}</h2>
                            <h4 className="set-work" >Sets: <br /> <br />
                            {this.props.backWorkout4.set}</h4>
                            <h4 className="reps-work" >Reps: <br /> <br />
                            { this.props.backWorkout4.reps }</h4>
                        </div>
                        <div className="workout5">
                            <h2 className="title-work" >
                            { this.props.backWorkout5.title}</h2>
                            <h4 className="set-work" >Sets: <br /> <br />
                            {this.props.backWorkout5.set}</h4>
                            <h4 className="reps-work" >Reps: <br /> <br />
                            {this.props.backWorkout5.reps}</h4>
                        </div>
                    </div>
                    <h3 className="back-description"> Description:</h3>
                    <p className='back-p'>
                        In this video I discuss the best back training workout that utilizes 
                        exercises for a big back, as well as exercises for a wider back based 
                        on current scientific literature and our anatomical understanding of 
                        the back muscles. It’s important that you not only choose the right 
                        exercises when performing a back workout for mass, but to also perform 
                        these exercises in the correct fashion to target the right muscles. 
                        If you’re looking to add more mass, depth, and width to your upper 
                        back and lower back while targeting muscles that are important for 
                        scapular and shoulder stability, then this is the best back workout 
                        video for you. Within the video I’m going to discuss 5 exercises 
                        that I believe are essential to grow a powerful and attractive looking 
                        back: the deadlift, pull-up, chest-supported row, lat pulldown, and 
                        scapular pull-up. I will go through each of these exercises and show 
                        the muscle anatomy worked in each exercise, as well as the best 
                        variations of these exercises based on current research. It’s also 
                        equally important that you are targeting the right back muscles when 
                        you perform each of these exercises. I discuss a few “cues” and tips 
                        that have helped me minimize the involvement of secondary muscles and 
                        focus on using my back throughout each movement.
                    </p>
                </div>
            
                    
            </div>
           
        );
    }
}

export default withProvider(Back);