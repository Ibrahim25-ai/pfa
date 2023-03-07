require('dotenv').config()
const express = require('express')

const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const source = process.env.ATLAS_CONNECTION

const mongoose = require('mongoose')
mongoose.connect(source)

const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected.");
})
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Successfully served on port: ${PORT}.`);
})