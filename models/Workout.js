const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema ({
    title: String,
    muscle: String,
    set: Number,
    reps: String,
    comments: String,

})

module.exports = mongoose.model('Workout', workoutSchema)
