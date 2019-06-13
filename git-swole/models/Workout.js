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