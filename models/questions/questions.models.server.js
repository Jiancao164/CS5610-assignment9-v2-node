const mongoose = require('mongoose')
const questionsSchema = require('./questions.schema.server')
const questionsModel = mongoose.model(
    'questionsModel',
    questionsSchema
)
module.exports = questionsModel;