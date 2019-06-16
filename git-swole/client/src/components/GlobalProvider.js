import React, {Component} from 'react'
const {Consumer, Provider } = React.createContext()

class GlobalProvider extends Component {
constructor (props) {
    super (props)
        this.state = {
            muscle: '',
            instruction: '',
            pocedure: '',
            type: '',
            set: '',
            reps: '',
        }


        handleSubmit = (e) => {
            e.preventDefault()

            this.setState({
                muslce: ''
            })

            axios.get(`http://`)
            
        }
    
}
}

export default GlobalProvider