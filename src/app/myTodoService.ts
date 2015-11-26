import {Injectable} from 'angular2/angular2';

@Injectable()
export class TodoService {
    private todos: Array<Todo> = [];

    constructor() {
        var localTodos = JSON.parse(localStorage.getItem('myTodo'));
        localStorage.setItem('myTodo', '[]');
        (localTodos || []).forEach((todo) => this.addTodo(todo.name, todo.done));
    }

    public addTodo(name:string, done:boolean) {
        this.todos.push(new Todo(name, done));
    }

    public getTodos() {
        return this.todos;
    }

    public deleteTodo(todo:Todo) {
        this.todos = this.todos.filter((element) => {
            return element.getId() === todo.getId() ? false : true;

        });
    }
}

export class Todo {
    private id: string;
    private name: string;
    private done: boolean;

    constructor(_name:string, _done:boolean = false) {
        this.id = uuid.v4();
        this.name = _name;
        this.done = _done;
        this.addToLocalStorage();
    }


    public setDone(value:boolean){
        //console.log("setDone");
        this.done = value;
        this.updateToLocalStorage();
    }

    public getDone() {
        return this.done;
    }

    public getId() {
        return this.id;
    }

    //FIXME: refactor
    private addToLocalStorage() {
        var localTodos = JSON.parse(localStorage.getItem('myTodo')) || [];
        localTodos.push(this);
        localStorage.setItem('myTodo', JSON.stringify(localTodos));
    }
    private updateToLocalStorage() {
        var localTodos = JSON.parse(localStorage.getItem('myTodo')) || [];
        localTodos.forEach((todo) => {
           if(todo.id === this.getId()) {
               todo.done = this.getDone();
           }
        });
        localStorage.setItem('myTodo', JSON.stringify(localTodos));
    }

}
