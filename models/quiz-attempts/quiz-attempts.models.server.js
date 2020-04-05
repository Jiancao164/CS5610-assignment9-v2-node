const mongoose = require('mongoose')
const quizAttemptSchema = require('./quiz-attempts.schema.server')
const quizAttemptModel = mongoose.model(
    'quizAttemptModel',
    quizAttemptSchema
)
module.exports = quizAttemptModel