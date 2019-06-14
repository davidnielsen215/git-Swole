const express = require ("express")
const app = express()
const PORT = 2000
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect(
    "mongodb://localhost:27017/swoledb", 
    {
        useNewUrlParser: true
        // useFindAndModify: false,
        // useCreateIndex: true
    }, () => {
    console.log('Connected to the DB')
        
}) 



// Plural: Collection
// Document: Single
app.use("/workouts", require("./workoutRoutes"))


app.listen(PORT, () => {
    console.log('whats up')
})

