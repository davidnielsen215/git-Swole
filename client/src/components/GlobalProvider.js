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
                comments: "",
                _id: '',
                Chest: {},
                chestWorkout2: {},
                chestWorkout3: {},
                chestWorkout4: {},
                chestWorkout5: {},
                chestWorkout6: {}
            }
    }
        // handleSave = () => {
        //     this.setState(prevState => {
        //         return {
        //             savedContent: [...prevState.savedContent, prevState.newContent]
        //         }
        //     } )
        // }

        // handleSubmit = (e) => {
        //     e.preventDefault()

        //     this.setState({
        //         muscle: ''
        //     })
    handleGetChest = () => {
        console.log("fired")
        axios.get('/workouts/5d07bf1ab119f4afc302da56').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                chestWorkout: res.data
            }))

        })
    }         
    handleGetChest2 = () => {
        axios.get(`/workouts/5d08027b203856c212f3b734`).then(res =>{
            console.log("fired2")
            console.log(res.data)
            this.setState(prevState => ({
                chestWorkout2: res.data
            }))
            
        })
    }
    handleGetChest3 = () => {
        console.log("fired")
        axios.get(`/workouts/5d0802ac203856c212f3b735`).then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                chestWorkout3: res.data
            }))

        })
    }        
    handleGetChest4 = () => {
        console.log("fired")
        axios.get(`/workouts/5d0802ca203856c212f3b736`).then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                chestWorkout4: res.data
            }))

        })
    }        
    handleGetChest5 = () => {
        console.log("fired")
        axios.get(`/workouts/5d0802de203856c212f3b737`).then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                chestWorkout5: res.data
            }))

        })
    }
    handleGetChest6 = () => {
        console.log("fired")
        axios.get(`/workouts/5d0802e9203856c212f3b738`).then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                chestWorkout6: res.data
            }))

        })
    }          
    render(){
        return (
            <Provider value={{
                ...this.state,
                handleGetChest: this.handleGetChest,
                handleGetChest2: this.handleGetChest2,
                handleGetChest3: this.handleGetChest3,
                handleGetChest4: this.handleGetChest4,
                handleGetChest5: this.handleGetChest5,
                handleGetChest6: this.handleGetChest6,

                
                
            }}>
                {this.props.children}
            </Provider>
        )  
    }
}


export default GlobalProvider

export const withProvider = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)

//render
//higher order component (withProvider)
