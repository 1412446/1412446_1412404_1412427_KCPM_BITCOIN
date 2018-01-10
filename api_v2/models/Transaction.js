var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SALT_WORK_FACTOR  = 10;

var TransactionSchema = new  Schema({
    sAddress: {type: String, required: true},
    dAddress: {type: String, required: true},
    kcoin: {type: Number, required: true},
    status: {type: String, default: 'New'},
});

module.exports = mongoose.model('Transaction', TransactionSchema);