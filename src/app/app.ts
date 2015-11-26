import {bootstrap, Component, FORM_DIRECTIVES, NgFor, NgClass} from 'angular2/angular2';
import {TodoService, Todo} from './myTodoService';

@Component({
    selector: 'my-todo',
    templateUrl: 'app/myTodo.view.html',
    styles: ['.done { color: green; }'],
    directives: [FORM_DIRECTIVES, NgFor, NgClass]
})
class AppComponent {
    private todoService;
    private isDone = true;
    constructor(_todoService: TodoService) {
        this.todoService = _todoService;
    }
}


bootstrap(AppComponent, [TodoService]);
