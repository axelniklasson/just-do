var Todo = require('./models/Todo');

module.exports = function(app) {

    // Backend routes
    app.get('/api/todos', function(req, res) {
        Todo.find(function(err, todos) {
            if (err) {
                res.send(err);
            } else {
                res.json(todos);
            }
        });
    });

    // Frontend routes
    app.get('/', function(req, res) {
        res.sendfile('./public/views/index.html');
    });
}