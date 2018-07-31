const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./recipient');

const surveySchema = newSchema({
	title: String,
	body: String,
	subject: String,
	recipients: [RecipientSchema],
	yes: {type:Number, default: 0},
	no: {type:Number, default: 0}
});

mongoose.model('surveys', surveySchema);