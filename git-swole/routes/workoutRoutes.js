const express = require('express')
const workoutRouter = express.Router()
const Workout = require('../models/Workout.js')

workoutRouter.route('/')

    .get((request, response) => {
        Workout.find((err, workouts)=> {
            if(err){
                return response.status(500).send(err)
            }
            return response.status(200).send(workouts)
        })
    })

    .post((request, response) => {
        const newWorkout = new Workout(request.body)
        newWorkout.save((err, new_workout) =>{
            if(err) {
                return response.status(500).send(err)
            }
            return response.status(200).send(new_workout)
        })
    })

    workoutRouter.route('/:id')

    .get((req, response) =>{
        Workout.findById(request.params.id, (err, workout) => {
            if(err) {
                return response.status(500).send(err)
            }
            return response.status(200).send(workout)
        })
    })

    .delete((req, response) => {
        Workout.findByIdAndDelete(request.params.id, (err, workout) => {
            if(err) {
                return response.status(500).send(err)
            }
            return response.status(200).send('Deleted Workout')
        })
    })

    .put((req, response) => {
        Workout.findByIdAndUpdate(request.params.id, request.body, {new: true}, 
            (err, workout) => {
            if(err) {
                return response.status(500).send(err)
            }
            return response.status(201).send(workout)
        })
    })

module.exports = workoutRouter