var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var LocalStorageService_1 = require('./LocalStorageService');
var TodoService = (function () {
    function TodoService() {
        var _this = this;
        this.todos = [];
        this.storage = new LocalStorageService_1.LocalStorageService();
        var localTodos = this.storage.getItem('myTodo');
        console.log(localTodos);
        (localTodos || []).forEach(function (todo) { return _this.addTodo(todo.name, todo.done, todo.id); });
    }
    TodoService.prototype.addTodo = function (name, done, id) {
        if (done === void 0) { done = false; }
        if (id === void 0) { id = ""; }
        var todo = new Todo(name, done, id);
        this.todos.push(todo);
        this.storage.putItem('myTodo', todo);
        return todo;
    };
    TodoService.prototype.getTodos = function () {
        return this.todos;
    };
    TodoService.prototype.deleteTodo = function (todo) {
        this.todos = this.todos.filter(function (element) {
            return element.getId() === todo.getId() ? false : true;
        });
    };
    TodoService = __decorate([
        angular2_1.Injectable()
    ], TodoService);
    return TodoService;
})();
exports.TodoService = TodoService;
var Todo = (function () {
    function Todo(_name, _done, id) {
        if (_done === void 0) { _done = false; }
        if (id === void 0) { id = ""; }
        this.id = id == "" ? uuid.v4() : id;
        this.name = _name;
        this.done = _done;
    }
    Todo.prototype.setDone = function (value) {
        this.done = value;
    };
    Todo.prototype.getDone = function () {
        return this.done;
    };
    Todo.prototype.getId = function () {
        return this.id;
    };
    return Todo;
})();
exports.Todo = Todo;
//# sourceMappingURL=myTodoService.js.map