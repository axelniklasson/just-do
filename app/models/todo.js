var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    title : {type : String, default: ''},
    completed: {type: Boolean, default: false}
});