const express = require('express')
const workoutRouter = express.Router()


const Workout = require('../models/workoutSchema')



workoutRouter.get('/', (req, res, next) => {
    Workout.find((err, workouts) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(workouts)
        
    })
})

// axios.get("/workout/musclegroup?muscle=${userchose}")

// workoutRouter.get('/musclegroup', (req, res, next) => {
//     Workout.find({muscle: req.query.muscle},(err, workouts) => {
//         if(err){
//             res.status(500)
//             return res.send(err)
//         }
//         return res.status(200).send(workouts)
        
//     })
// })

workoutRouter.get('/musclegroup', (req, res, next) => {
    Workout.find({muscle: req.query.muscle},(err, workouts) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(workouts)
        
    })
})

workoutRouter.get('/:_id', (req, res, next) => {
    Workout.findOne({_id: req.params._id}, (err, workout) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(workout)
    })
})

workoutRouter.post('/new', (req, res, next) => {
    const newWorkout = new Workout(req.body) 
    newWorkout.save((err, newSavedWorkout) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newSavedWorkout)
    })
})

module.exports = workoutRouter





// const express = require('express')
// const workoutRouter = express.Router()
// const Workout = require('../models/workoutSchema.js/index.js')

// workoutRouter.route('/')

//     .get((request, response) => {
//         Workout.find((err, workouts)=> {
//             if(err){
//                 return response.status(500).send(err)
//             }
//             return response.status(200).send(workouts)
//         })
//     })

//     .post((request, response) => {
//         const newWorkout = new Workout(request.body)
//         newWorkout.save((err, new_workout) =>{
//             if(err) {
//                 return response.status(500).send(err)
//             }
//             return response.status(201).send(new_workout)
//         })
//     })

//     workoutRouter.route('/:id')

//     .get((request, response) =>{
//         Workout.findById(request.params.id, (err, workout) => {
//             if(err) {
//                 return response.status(500).send(err)
//             }
//             return response.status(200).send(workout)
//         })
//     })

//     .delete((request, response) => {
//         Workout.findByIdAndDelete(request.params.id, (err, workout) => {
//             if(err) {
//                 return response.status(500).send(err)
//             }
//             return response.status(200).send('Deleted Workout')
//         })
//     })

//     .put((request, response) => {
//         Workout.findByIdAndUpdate(request.params.id, request.body, {new: true}, 
//             (err, workout) => {
//             if(err) {
//                 return response.status(500).send(err)
//             }
//             return response.status(201).send(workout)
//         })
//     })

// module.exports = workoutRouter