var express = require('express')
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/whiteboard-cs5610-sp20',
    { useNewUrlParser: true, useUnifiedTopology: true })

app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


require('./controllers/quiz.controller.server')(app)
require('./controllers/question.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

// client --> req 'http://myapp/' --> server
// client <-- res 'hello world'   <-- server
app.get('/', function (req, res) {
    res.send('hello world!!!')
})

app.listen(process.env.PORT || 3000)

