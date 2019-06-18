import React, {Component} from 'react'
import axios from "axios"

const {Consumer, Provider } = React.createContext()

class GlobalProvider extends Component {
constructor (props) {
    super (props)
        this.state = {
            works: [],
            title:"",
            muscle: '',
            set: '',
            reps: '',
        }


        // handleSubmit = (e) => {
        //     e.preventDefault()

        //     this.setState({
        //         muscle: ''
        //     })
            handleGetWorkouts = () => {
                console.log("fired")
                axios.get(`/workouts`).then(res =>{
                    this.setState(prevState => ({
                        works:[res.data,...prevState.works]
                    }))

                })
            }

            

            
            
        }
        
    
}


export default GlobalProvider

//render
//higher order component (withProvider)
