const express = require('express')
const app = express()
const path = require('path')

require('dotenv').config()

const logger = require('./middlewares/logger')
const timer = require('./middlewares/timer')


const port = process.env.PORT || 3000



let users = [
    { id: '1', name: 'jd', email: 'jd@me.com', password: '123' },
    { id: '2', name: 'paul', email: 'paul@me.com', password: '123' },
    { id: '3', name: 'lois', email: 'lois@me.com', password: '123' },
    { id: '4', name: 'sidney', email: 'sidney@me.com', password: '123' },
    { id: '5', name: 'canton', email: 'canton@me.com', password: '123' },
  ]
0

app.use(timer)
app.use(logger)

// app.use(express.static(path.join(__dirname , 'public')))

// app.get('/' , (req , res) => {
//     res.send('hello express app1')
// })

app.get('/' , (req , res) => {
    return res.status(200).json({ confirmation: 'success' ,users})
})

app.listen(port , () => {
    console.log(` Listening on port  ${port}`)
})

