const express = require ('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = 7000


app.use(express.json())

app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/swoledb', {useNewUrlParser: true},
() => {console.log('Connected to the DB')})

app.use('/workouts', require('./routes/workoutRouter.js'))

app.listen(PORT, () => {
    console.log(`Server is runningn on port ${PORT}`)
})

// const express = require ("express")
// const app = express()
// const PORT = 2000
// const mongoose = require('mongoose')

// app.use(express.json())

// mongoose.connect(
//     "mongodb://localhost:27017/swoledb", 
//     {
//         useNewUrlParser: true
//         // useFindAndModify: false,
//         // useCreateIndex: true
//     }, () => {
//     console.log('Connected to the DB')
        
// }) 



// // Plural: Collection
// // Document: Single
// app.use("/workouts", require("./routes/workoutRouter"))


// app.listen(PORT, () => {
//     console.log('whats up')
// })

