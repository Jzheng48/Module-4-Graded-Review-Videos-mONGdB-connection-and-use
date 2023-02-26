const express = require('express')
const app = express()
const port=3000

const bodyParser= require('body-parser')
app.use(bodyParser.json())



const studentRoute = require('./routes/studentRoute')
const gradeRoute = require('./routes/gradeRoute')

app.use('/student', studentRoute)
app.use('/grade', gradeRoute)

app.get('/', (req, res) => res.send('Hello World'));

//app.get('/grade', (req, res) => res.send('Hello World from student grade'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jiaweizheng:88888888@cluster0.buoixrx.mongodb.net/demodb', {useNewUrlParser:true})
    .then(() => console.log('Mongo DB connection successful'))
    .catch((err) => console.error(err));