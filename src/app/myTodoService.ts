import {Injectable} from 'angular2/angular2';
import {IStorageService, LocalStorageService} from './LocalStorageService';

@Injectable()
export class TodoService {
    private todos: Array<Todo> = [];
    private storage: IStorageService;

    constructor() {
        this.storage = new LocalStorageService();
        var localTodos = this.storage.getItem('myTodo');
        console.log(localTodos);
        (localTodos || []).forEach((todo) => this.addTodo(todo.name, todo.done, todo.id));
    }

    public addTodo(name:string, done:boolean = false, id:string = "") {
        var todo = new Todo(name, done, id);
        this.todos.push(todo);
        this.storage.putItem('myTodo', todo);
        return todo;
    }

    public getTodos() {
        return this.todos;
    }

    public deleteTodo(todo:Todo) {
       this.todos = this.todos.filter((element) => {
            return element.getId() === todo.getId() ? false : true;
       });

       this.storage.deleteItem('myTodo', todo);
    }

    public updateTodo(updateTodo:Todo) {
        this.todos.forEach((todo) => {
            if(todo.getId() == updateTodo.getId()) {
                todo.setDone(updateTodo.getDone());
            }
        });

        this.storage.putItem('myTodo', updateTodo);
    }
}

export class Todo {
    private id: string;
    private name: string;
    private done: boolean;

    constructor(_name:string, _done:boolean = false, id:string = "") {
        this.id = id == "" ?  uuid.v4() : id;
        this.name = _name;
        this.done = _done;
    }

    public setDone(value:boolean){
        this.done = value;
    }

    public getDone() {
        return this.done;
    }

    public getId() {
        return this.id;
    }
}




