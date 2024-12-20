import todoItem from "./todo-item-class.js";

export default class TodoList {
    constructor(name, desc, dueDate, priority) {
        this.items = [];
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    sortTodoList() {
        this.items.sort((a, b) => {
            return a.priority - b.priority
        })
    }
    addItemToList(item) {
        this.items.push(item);
        this.sortTodoList();
    }
}