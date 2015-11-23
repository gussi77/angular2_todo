import {Injectable} from 'angular2/angular2';

@Injectable()
export class TodoService {
    private name: string;
    private todos: Array<number> = [];

    addTodo(name:string) {
        this.todos.push(new Todo(name));
    }

    setName(_name:string) {
        this.name = _name;
    }

    getName() {
        return this.name;
    }

    getTodos() {
        return this.todos;
    }
}

export class Todo {
    name: string;
    done: boolean;
    constructor(_name) {
        this.name = _name;
        this.done = false;
    }

    setDone(value:boolean){
        this.done = value;
    }
    getDone() {
        return this.done;
    }
}