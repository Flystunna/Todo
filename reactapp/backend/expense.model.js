const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Expense = new Schema({
    description: {
        type: String
    },
    amount: {
        type: Number
    },
    month: {
        type: String
    },
    year: {
        type: Number
    }
});

module.exports = mongoose.model('Expense', Expense);