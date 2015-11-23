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
        this.todos = [];
    }
    TodoService.prototype.addTodo = function (name) {
        this.todos.push(new Todo(name));
    };
    TodoService.prototype.setName = function (_name) {
        this.name = _name;
    };
    TodoService.prototype.getName = function () {
        return this.name;
    };
    TodoService.prototype.getTodos = function () {
        return this.todos;
    };
    TodoService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
})();
exports.TodoService = TodoService;
var Todo = (function () {
    function Todo(_name) {
        this.name = _name;
        this.done = false;
    }
    Todo.prototype.setDone = function (value) {
        this.done = value;
    };
    Todo.prototype.getDone = function () {
        return this.done;
    };
    return Todo;
})();
exports.Todo = Todo;
//# sourceMappingURL=myTodoService.js.map