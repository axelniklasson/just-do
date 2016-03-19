var Todo = require('./models/Todo');

module.exports = function(app) {

    // Backend routes
    app.get('/api/todos', function(req, res) {
        Todo.find(function(err, todos) {

            if (err) {
                res.send(err);
            } 
            
            res.json(todos);
            
        });
    });

    app.post('/api/todos', function(req, res) {
        Todo.create({title: req.body.title}, function(err, todo) {
            if (err) {
                res.send(err);
            }

            res.json(todo);
        });
    });

    app.put('/api/todos/:id', function(req, res) {
        var todo = req.body;
        Todo.update({'_id': todo._id}, todo, {}, function(err, numAffected) {
            res.json(todo);
        });
    });

    // Frontend routes
    app.get('/', function(req, res) {
        res.sendfile('./public/index.html');
    });
}