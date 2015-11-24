import {bootstrap, Component, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
import {TodoService, Todo} from './myTodoService';

@Component({
    selector: 'my-todo',
    templateUrl: 'app/myTodo.view.html',
    directives: [FORM_DIRECTIVES, NgFor]
})
class AppComponent {
    private todos:Array<any> = [1,2];
    private todoService;

    constructor(_todoService: TodoService) {
        this.todoService = _todoService;

        this.todoService.addTodo("hallo");
        this.todoService.addTodo("hallo1");
        this.todoService.addTodo("hallo2");

        this.todos = this.todoService.getTodos();
    }
}


bootstrap(AppComponent, [TodoService]);
