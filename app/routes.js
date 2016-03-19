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
        var ID = req.params.id;
        var todo = req.body;
        Todo.update({'_id': ID}, todo, {}, function(err, numAffected) {
            res.json(todo);
        });
    });

    app.delete('/api/todos/:id', function(req, res) {
        var ID = req.params.id;
        Todo.remove({'_id': ID}, function() {
            res.send(200);
        });
    });

    // Frontend routes
    app.get('/', function(req, res) {
        res.sendfile('./public/index.html');
    });
}