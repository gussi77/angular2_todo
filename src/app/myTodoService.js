var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TodoService = (function () {
    function TodoService() {
        var _this = this;
        this.todos = [];
        var localTodos = JSON.parse(localStorage.getItem('myTodo'));
        localStorage.setItem('myTodo', '[]');
        (localTodos || []).forEach(function (todo) { return _this.addTodo(todo.name, todo.done); });
    }
    TodoService.prototype.addTodo = function (name, done) {
        this.todos.push(new Todo(name, done));
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
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
})();
exports.TodoService = TodoService;
var Todo = (function () {
    function Todo(_name, _done) {
        if (_done === void 0) { _done = false; }
        this.id = uuid.v4();
        this.name = _name;
        this.done = _done;
        this.addToLocalStorage();
    }
    Todo.prototype.setDone = function (value) {
        //console.log("setDone");
        this.done = value;
        this.updateToLocalStorage();
    };
    Todo.prototype.getDone = function () {
        return this.done;
    };
    Todo.prototype.getId = function () {
        return this.id;
    };
    //FIXME: refactor
    Todo.prototype.addToLocalStorage = function () {
        var localTodos = JSON.parse(localStorage.getItem('myTodo')) || [];
        localTodos.push(this);
        localStorage.setItem('myTodo', JSON.stringify(localTodos));
    };
    Todo.prototype.updateToLocalStorage = function () {
        var _this = this;
        var localTodos = JSON.parse(localStorage.getItem('myTodo')) || [];
        localTodos.forEach(function (todo) {
            if (todo.id === _this.getId()) {
                todo.done = _this.getDone();
            }
        });
        localStorage.setItem('myTodo', JSON.stringify(localTodos));
    };
    return Todo;
})();
exports.Todo = Todo;
//# sourceMappingURL=myTodoService.js.map