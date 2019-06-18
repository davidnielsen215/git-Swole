const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    muscle: {
        type: String,
        required: true
    },
    set: {
        type: Number,
        required: true
    },
    reps: {
        type: String,
        required: true
    },
    comments: {
        type: String,
    }
    // muscle: String,
    // set: Number,
    // reps: String,
    // comments: String,

})

module.exports = mongoose.model('Workout', workoutSchema)
