angular.module('MainCtrl', ['TodoService']).controller('MainController', function($scope, Todos) {

    Todos.get().success(function(todos) {
        $scope.todos = todos;
    });

    $scope.toggleCompleted = function(todo) {
        Todos.update(todo._id, todo);
    }

    $scope.addTodo = function() {
        Todos.create({'title': $scope.new.todo.title}).success(function(todo) {
            $scope.todos.push(todo);
            $scope.new.todo.title = "";
        });
    }

    $scope.deleteTodo = function(todo) {
        Todos.delete(todo._id).success(function() {
            $scope.todos.splice($scope.todos.indexOf(todo), 1);
        });
    }

});