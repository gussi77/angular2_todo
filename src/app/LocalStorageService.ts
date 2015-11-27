export interface IStorageService {
    getItem(path: string);
    setItem(path:string, value:string);
    addItem(path:string, value:string);
    putItem(path:string, value:string);
}

export class LocalStorageService implements IStorageService {

    public getItem(path: string) {
        return JSON.parse(localStorage.getItem(path)) ;
    }

    public setItem(path: string, value:string) {
        localStorage.setItem(path, value);
    }

    public addItem(path: string, value:string) {
        this.setItem(path, this.getItem(path).push(value));
    }

    public putItem(path: string, value:string) {
        var items = this.getItem(path);
        if(items == null) items = [];
        //FIXME refactor
        var found = false;
        items.forEach(function(item) {
            if(item.id == value.id) {
                item.name = value.name;
                item.done = value.done;
                found=true;
            }
        });
        if(!found) {
            items.push(value);
        }

        this.setItem(path, JSON.stringify(items));
    }
}