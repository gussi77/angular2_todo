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
var myTodoService_1 = require('./myTodoService');
var AppComponent = (function () {
    function AppComponent(_todoService) {
        this.todos = [1, 2];
        this.todoService = _todoService;
        this.todoService.addTodo("hallo");
        this.todoService.addTodo("hallo1");
        this.todoService.addTodo("hallo2");
        this.todos = this.todoService.getTodos();
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-todo',
            templateUrl: 'app/myTodo.view.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [myTodoService_1.TodoService])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [myTodoService_1.TodoService]);
//# sourceMappingURL=app.js.map