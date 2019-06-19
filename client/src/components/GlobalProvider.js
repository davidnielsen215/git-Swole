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
                works:[res.data,...prevState.works]
            }))

<<<<<<< HEAD
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
=======
            
            
        }
        
    
}

>>>>>>> master


export default GlobalProvider

export const withProvider = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)

//render
//higher order component (withProvider)
