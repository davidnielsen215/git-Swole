import React, { Component } from 'react';
import { Link} from 'react-router-dom'
// import Home from './Home'

import { withProvider } from './GlobalProvider'
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
            <div className="container">
                {/* <img 
                className="background-img"
                    height={"150%"}
                    // width={'100%'}
                    alt="" 
                    src="https://i.pinimg.com/originals/96/6a/7b/966a7b0fa51a0e145aa6b2fe8cd56923.jpg" 
                /> */}
                <div>
                    <nav className='home-btn'>
                        <Link to="/">Home</Link>
                    </nav>
                        <h1 className='title-chest'> Git Chest Yoked</h1> 
                        <div>
                            <div>
                                <br />
                                <h1 className="title2-chest">Chest</h1>
                                <br />
                                <div className="chest-vid-container">
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
                            <div className="button-div">
                                <button className="button" onClick={this.props.handleGetChest} >Incline Dumbell Press</button>
                                <button className="button" onClick={this.props.handleGetChest2} >Bench Press</button>
                                <button className="button" onClick={this.props.handleGetChest3} >Dumbell Bench Press</button>
                                <button className="button" onClick={this.props.handleGetChest4} >Dips</button>
                                <button className="button" onClick={this.props.handleGetChest5} >Banded Push-ups</button>
                                <button className="button" onClick={this.props.handleGetChest6} >Cable Crossover</button>

                                {/* {!this.state.isHidden && <Child />} */}
                            </div>
                            <div>
                                <div className="workout">
                                    <h2 className="title-work" >{ this.props.chestWorkout.title}</h2>
                                    <h4 className="set-work" >{this.props.chestWorkout.set}</h4>
                                    <h4 className="reps-work" >{ this.props.chestWorkout.reps }</h4>
                                </div>
                                <div className="workout2">
                                    <h2 className="title-work">{ this.props.chestWorkout2.title}</h2>
                                    <h4 className="set-work">{ this.props.chestWorkout2.set}</h4>
                                    <h4 className="reps-work">{ this.props.chestWorkout2.reps}</h4>
                                </div>
                                <div className="workout3">
                                    <h2 className="title-work" >{this.props.chestWorkout3.title}</h2>
                                    <h4 className="set-work" >{this.props.chestWorkout3.set}</h4>
                                    <h4 className="reps-work" >{ this.props.chestWorkout3.reps }</h4>
                                </div>
                                <div className="workout4">
                                    <h2 className="title-work" >{ this.props.chestWorkout4.title}</h2>
                                    <h4 className="set-work" >{this.props.chestWorkout4.set}</h4>
                                    <h4 className="reps-work" >{ this.props.chestWorkout4.reps }</h4>
                                </div>
                                <div className="workout5">
                                    <h2 className="title-work" >{ this.props.chestWorkout5.title}</h2>
                                    <h4 className="set-work" >{this.props.chestWorkout5.set}</h4>
                                    <h4 className="reps-work" >{ this.props.chestWorkout5.reps }</h4>
                                </div>
                                <div className="workout6">
                                    <h2 className="title-work" >{ this.props.chestWorkout6.title}</h2>
                                    <h4 className="set-work" >{this.props.chestWorkout6.set}</h4>
                                    <h4 className="reps-work" >{ this.props.chestWorkout6.reps }</h4>
                                </div>
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
            </div>
        );
    }
}
// const Child = () => (
//     <div className='modal'>
//         {/* hello world */}
//     </div>
// )

export default withProvider(Chest);