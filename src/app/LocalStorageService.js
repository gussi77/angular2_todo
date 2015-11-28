var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.getItem = function (path) {
        return JSON.parse(localStorage.getItem(path));
    };
    LocalStorageService.prototype.setItem = function (path, value) {
        localStorage.setItem(path, value);
    };
    LocalStorageService.prototype.addItem = function (path, value) {
        this.setItem(path, this.getItem(path).push(value));
    };
    LocalStorageService.prototype.putItem = function (path, value) {
        var items = this.getItem(path);
        if (items == null)
            items = [];
        //FIXME refactor
        var found = false;
        items.forEach(function (item) {
            if (item.id == value.id) {
                item.name = value.name;
                item.done = value.done;
                found = true;
            }
        });
        if (!found) {
            items.push(value);
        }
        this.setItem(path, JSON.stringify(items));
    };
    LocalStorageService.prototype.deleteItem = function (path, value) {
        var items = this.getItem(path);
        items = items.filter(function (item) { return item.id === value.id ? false : true; });
        this.setItem(path, JSON.stringify(items));
    };
    return LocalStorageService;
})();
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=LocalStorageService.js.map