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
    handleGetWorkouts = () => {
        console.log("fired")
        axios.get(`/workouts`).then(res =>{
            this.setState(prevState => ({
                works: [res.data,...prevState.works],
                chest: res.data.filter(workout => workout.muscle === 'Chest'),
                back: res.data.filter(workout => workout.muscle === "Back"),
                biceps: res.data.filter(workout => workout.muscle === 'Biceps'),
                triceps: res.data.filter(workout => workout.muscle === "Triceps"),
                shoulders: res.data.filter(workout => workout.muscle === "Shoulder"),
                forearms: res.data.filter(workout => workout.muscle === "Forearms"),
                core: res.data.filter(workout => workout.muscle === "Core"),
                legs: res.data.filter(workout => workout.muscle === "Legs")
            }))

        })
    }         
    render(){
        return (
            <Provider value={{
                ...this.state,
                handleGetWorkouts: this.handleGetWorkouts,
                
                
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
