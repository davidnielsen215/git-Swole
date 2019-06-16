const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        
    }

})

module.exports = mongoose.model('Workout', workoutSchema)


//nameOfWorkout: string
//muscle group: string
//reps: number
//set: number
//description: string
//comments: array containing strings


