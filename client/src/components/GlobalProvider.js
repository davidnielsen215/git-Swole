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
                chestWorkout: {}
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
        axios.get(`/workouts/5d0a69ae5377af0853adfe36`).then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                chestWorkout: res.data
            }))

        })
    }         
    render(){
        return (
            <Provider value={{
                ...this.state,
                handleGetChest: this.handleGetChest,
                
                
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
