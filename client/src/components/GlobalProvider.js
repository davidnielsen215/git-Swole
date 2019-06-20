import React, {Component} from 'react'
import axios from "axios"

const { Consumer, Provider } = React.createContext()

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
                chestWorkout: {},
                chestWorkout2: {},
                chestWorkout3: {},
                chestWorkout4: {},
                chestWorkout5: {},
                chestWorkout6: {},
                backWorkout: {},
                backWorkout2: {},
                backWorkout3: {},
                backWorkout4: {},
                backWorkout5: {},
                biWorkout: {},
                biWorkout2: {},
                biWorkout3: {},
                biWorkout4: {},
                triWorkout: {},
                triWorkout2: {},
                triWorkout3: {},
                triWorkout4: {},
                shoulderWorkout: {},
                shoulderWorkout2: {},
                shoulderWorkout3: {},
                shoulderWorkout4: {},
                shoulderWorkout5: {},
                forearmsWorkout: {},
                forearmsWorkout2: {},
                forearmsWorkout3: {},
                forearmsWorkout4: {},
                coreWorkout: {},
                coreWorkout2: {},
                coreWorkout3: {},
                coreWorkout4: {},
                coreWorkout5: {},
                legsWorkout: {},
                legsWorkout2: {},
                legsWorkout3: {},
                legsWorkout4: {},
                
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
     
    handleGetBack = () => {
        console.log("fired")
        axios.get('/workouts/5d08034a203856c212f3b739').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                backWorkout: res.data
            }))

        })
    }       
    handleGetBack2 = () => {
        console.log("fired")
        axios.get('/workouts/5d080452203856c212f3b73a').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                backWorkout2: res.data
            }))

        })
    }       
    handleGetBack3 = () => {
        console.log("fired")
        axios.get('/workouts/5d080469203856c212f3b73b').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                backWorkout3: res.data
            }))

        })
    }       
    handleGetBack4 = () => {
        console.log("fired")
        axios.get('/workouts/5d08047a203856c212f3b73c').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                backWorkout4: res.data
            }))

        })
    }       
    handleGetBack5 = () => {
        console.log("fired")
        axios.get('/workouts/5d080483203856c212f3b73d').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                backWorkout5: res.data
            }))

        })
    } 
    handleGetBi = () => {
        console.log("fired")
        axios.get('/workouts/5d0805a4203856c212f3b73e').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                biWorkout: res.data
            }))

        })
    }                              
    handleGetBi2 = () => {
        console.log("fired")
        axios.get('/workouts/5d0805b9203856c212f3b73f').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                biWorkout2: res.data
            }))

        })
    }                              
    handleGetBi3 = () => {
        console.log("fired")
        axios.get('/workouts/5d0805c6203856c212f3b740').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                biWorkout3: res.data
            }))

        })
    }                              
    handleGetBi4 = () => {
        console.log("fired")
        axios.get('/workouts/5d0805ce203856c212f3b741').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                biWorkout4: res.data
            }))

        })
    }  
    handleGetTri = () => {
        console.log("fired")
        axios.get('/workouts/5d0806fb203856c212f3b742').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                triWorkout: res.data
            }))

        })
    }                                   
    handleGetTri2 = () => {
        console.log("fired")
        axios.get('/workouts/5d080722203856c212f3b743').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                triWorkout2: res.data
            }))

        })
    }                                   
    handleGetTri3 = () => {
        console.log("fired")
        axios.get('/workouts/5d08072f203856c212f3b744').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                triWorkout3: res.data
            }))

        })
    }                                   
    handleGetTri4 = () => {
        console.log("fired")
        axios.get('/workouts/5d080737203856c212f3b745').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                triWorkout4: res.data
            }))

        })
    }
    handleGetShoulder5 = () => {
        console.log("fired")
        axios.get('/workouts/5d080877203856c212f3b749').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                shoulderWorkout5: res.data
            }))

        })
    }                                          
    handleGetShoulder2 = () => {
        console.log("fired")
        axios.get('/workouts/5d080887203856c212f3b74a').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                shoulderWorkout2: res.data
            }))

        })
    }                                          
    handleGetShoulder3 = () => {
        console.log("fired")
        axios.get('/workouts/5d080892203856c212f3b74b').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                shoulderWorkout3: res.data
            }))

        })
    }                                          
    handleGetShoulder4 = () => {
        console.log("fired")
        axios.get('/workouts/5d08089d203856c212f3b74c').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                shoulderWorkout4: res.data
            }))

        })
    } 
    //standing overhead press                                         
    handleGetShoulder = () => {
        console.log("fired")
        axios.get('/workouts/5d08085d203856c212f3b748').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                shoulderWorkout: res.data
            }))

        })
    }                                          
    handleGetForearms = () => {
        console.log("fired")
        axios.get('/workouts/5d0809d80d2edfc2c6a19068').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                ForearmsWorkout: res.data
            }))

        })
    }                                          
    handleGetForearms2 = () => {
        console.log("fired")
        axios.get('/workouts/5d0809f00d2edfc2c6a19069').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                ForearmsWorkout2: res.data
            }))

        })
    }                                          
    handleGetForearms3 = () => {
        console.log("fired")
        axios.get('/workouts/5d0809fe0d2edfc2c6a1906a').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                ForearmsWorkout3: res.data
            }))

        })
    }                                          
    handleGetForearms4 = () => {
        console.log("fired")
        axios.get('/workouts/5d080a080d2edfc2c6a1906b').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                ForearmsWorkout4: res.data
            }))

        })
    }                                          
    handleGetCore = () => {
        console.log("fired")
        axios.get('/workouts/5d080acd0d2edfc2c6a1906c').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                coreWorkout: res.data
            }))

        })
    }                                          
    handleGetCore2 = () => {
        console.log("fired")
        axios.get('/workouts/5d080ae40d2edfc2c6a1906d').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                coreWorkout2: res.data
            }))

        })
    }                                          
    handleGetCore3 = () => {
        console.log("fired")
        axios.get('/workouts/5d080af30d2edfc2c6a1906e').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                coreWorkout3: res.data
            }))

        })
    }                                          
    handleGetCore4 = () => {
        console.log("fired")
        axios.get('/workouts/5d080b020d2edfc2c6a1906f').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                coreWorkout4: res.data
            }))

        })
    }                                          
    handleGetCore5 = () => {
        console.log("fired")
        axios.get('/workouts/5d093de1eb8277e3dafde170').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                coreWorkout5: res.data
            }))

        })
    }                                          
    handleGetLegs = () => {
        console.log("fired")
        axios.get('/workouts/5d080c000d2edfc2c6a19070').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                legsWorkout: res.data
            }))

        })
    }                                          
    handleGetLegs2 = () => {
        console.log("fired")
        axios.get('/workouts/5d080c320d2edfc2c6a19072').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                legsWorkout2: res.data
            }))

        })
    }                                          
    handleGetLegs3 = () => {
        console.log("fired")
        axios.get('/workouts/5d080c430d2edfc2c6a19073').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                legsWorkout3: res.data
            }))

        })
    }                                          
    handleGetLegs4 = () => {
        console.log("fired")
        axios.get('/workouts/5d080c4f0d2edfc2c6a19074').then(res =>{
            console.log(res.data)
            this.setState(prevState => ({
                legsWorkout4: res.data
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
                handleGetBack: this.handleGetBack,
                handleGetBack2: this.handleGetBack2,
                handleGetBack3: this.handleGetBack3,
                handleGetBack4: this.handleGetBack4,
                handleGetBack5: this.handleGetBack5,
                handleGetBi: this.handleGetBi,
                handleGetBi2: this.handleGetBi2,
                handleGetBi3: this.handleGetBi3,
                handleGetBi4: this.handleGetBi4,
                handleGetTri: this.handleGetTri,
                handleGetTri2: this.handleGetTri2,
                handleGetTri3: this.handleGetTri3,
                handleGetTri4: this.handleGetTri4,
                handleGetShoulder: this.handleGetShoulder,
                handleGetShoulder2: this.handleGetShoulder2,
                handleGetShoulder3: this.handleGetShoulder3,
                handleGetShoulder4: this.handleGetShoulder4,
                handleGetShoulder5: this.handleGetShoulder5,
                handleGetForearms: this.handleGetForearms,
                handleGetForearms2: this.handleGetForearms2,
                handleGetForearms3: this.handleGetForearms3,
                handleGetForearms4: this.handleGetForearms4,
                handleGetCore: this.handleGetCore,
                handleGetCore2: this.handleGetCore2,
                handleGetCore3: this.handleGetCore3,
                handleGetCore4: this.handleGetCore4,
                handleGetCore5: this.handleGetCore5,
                handleGetLegs: this.handleGetLegs,
                handleGetLegs2: this.handleGetLegs2,
                handleGetLegs3: this.handleGetLegs3,
                handleGetLegs4: this.handleGetLegs4,
                
                
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
