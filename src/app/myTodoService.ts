import {Injectable} from 'angular2/angular2';

@Injectable()
export class TodoService {
    private todos: Array<Todo> = [];

    addTodo(name:string) {
        this.todos.push(new Todo(name));
    }

    getTodos() {
        return this.todos;
    }

    deleteTodo(todo:Todo) {
        this.todos = this.todos.filter((element) => {
            return element.getId() === todo.getId() ? false : true;

        });
    }
}

export class Todo {
    private id: string;
    private name: string;
    private done: boolean;

    constructor(_name) {
        this.id = uuid.v4();
        this.name = _name;
        this.done = false;
    }


    setDone(value:boolean){
        this.done = value;
    }

    getDone() {
        return this.done;
    }

    getId() {
        return this.id;
    }
}