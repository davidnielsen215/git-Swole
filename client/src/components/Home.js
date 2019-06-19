import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {withProvider} from "./GlobalProvider"

import FaBeer from 'react-icons/lib/fa/github-square'
import FaBook from 'react-icons/lib/fa/book'
import FaLink from 'react-icons/lib/fa/linkedin-square'

import './Home.css'
class Home extends Component {

    componentDidMount(){
       this.props.handleGetWorkouts()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1 className='title-home'>
                    Git Swølé
                    <img alt='' className='dumbell' src="https://img.icons8.com/ios/50/000000/dumbbell-filled.png" />
                </h1>
                
                
                <nav>
                    <Link className="legs-btn" to='/legs'>Legs page</Link>
                    <Link className="arms-btn" to='/arms'>Arms page</Link>
                    <Link className="back-btn" to='/back'>Back page</Link>
                    <Link className="chest-btn" to='/chest'>Chest page</Link>
                    <Link className="core-btn" to='/core'>Core page</Link>
                </nav>
                
                <div className="icon-container">
                    <svg className="link" role="img" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                        <title>LinkedIn icon</title>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027
                        -3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939
                        v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 
                        3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 
                        7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 
                        2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 
                        2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 
                        0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 
                        24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 
                        0 22.222 0h.003z"/>
                    </svg>
                    <div>
                        <FaLink className="link-icon" />
                        <FaBeer className="github-icon" />
                        <FaBook className="portfolio-icon" />

                    </div>
                </div>
                
            </div>
        );
    }
}
export default withProvider(Home);