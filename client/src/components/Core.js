import React, { Component } from 'react';
import { Link} from 'react-router-dom'
// import Home from './Home'

import { withProvider } from './GlobalProvider'
import Iframe from 'react-iframe'
import './Styles.css'

class Core extends Component {
    render() {
        return (
            <div className="container">
                 
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
                    <nav className="button-div">
                        <button className="button" onClick={this.props.handleGetCore} >Weighted Hanging Leg Raises</button>
                        <button className="button" onClick={this.props.handleGetCore2} >AB Pulldowns</button>
                        <button className="button" onClick={this.props.handleGetCore3} >Cable Wood-Choppers</button>
                        <button className="button" onClick={this.props.handleGetCore4} >Flutter-Kicks</button>
                       
                        {/* {!this.state.isHidden && <Child />} */}
                    </nav>
                    <div className="workout-container">
                        <div className="workout">
                            <h2 className="title-work">
                            {this.props.coreWorkout.title}</h2>
                            <h4 className="set-work" >Sets: <br /> <br />
                            {this.props.coreWorkout.set}</h4>
                            <h4 className="reps-work" >Reps: <br /> <br />
                            { this.props.coreWorkout.reps }</h4>
                        </div>
                        <div className="workout2">
                            <h2 className="title-work">
                            { this.props.coreWorkout2.title}</h2>
                            <h4 className="set-work">Sets: <br /> <br />
                            { this.props.coreWorkout2.set}</h4>
                            <h4 className="reps-work">Reps: <br /> <br />
                            { this.props.coreWorkout.reps}</h4>
                        </div>
                        <div className="workout3">
                            <h2 className="title-work" >
                            {this.props.coreWorkout3.title}</h2>
                            <h4 className="set-work" >Sets: <br /> <br />
                            {this.props.coreWorkout3.set}</h4>
                            <h4 className="reps-work" >Reps: <br /> <br />
                            { this.props.coreWorkout3.reps }</h4>
                        </div>
                        <div className="workout4">
                            <h2 className="title-work" > 
                            { this.props.coreWorkout4.title}</h2>
                            <h4 className="set-work" >Sets: <br /> <br />
                            {this.props.coreWorkout4.set}</h4>
                            <h4 className="reps-work" >Reps: <br /> <br />
                            { this.props.coreWorkout4.reps }</h4>
                        </div>
                        <div className="workout5">
                            <h2 className="title-work" > 
                            { this.props.coreWorkout5.title}</h2>
                            <h4 className="set-work" > Sets: <br /> <br />
                            {this.props.coreWorkout5.set}</h4>
                            <h4 className="reps-work" > Reps: <br /> <br />
                            { this.props.coreWorkout5.reps }</h4>
                        </div>
                    </div>
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

export default withProvider(Core);