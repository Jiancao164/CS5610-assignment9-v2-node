const mongoose = require('mongoose')
const quizzesSchema = require('./quizzes.schema.server')
const quizzesModel = mongoose.model(
    'quizzesModel',
    quizzesSchema
)
module.exports = quizzesModel