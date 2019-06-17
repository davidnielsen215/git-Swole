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
                comment: ''
            })

            axios.put(`http://`).then(response => {
                console.log(response.data)
            })
            
        }
    
}
}

export default GlobalProvider