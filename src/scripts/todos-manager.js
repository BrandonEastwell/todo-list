import TodoList from "./todo-list-class";
import TodoItem from "./todo-item-class";

export default class TodosManager {
    constructor(storageService) {
        this.storageService = storageService;
        this.todoLists = this.loadTodoLists();
    }

    loadTodoLists() {
        const lists = this.storageService.getTodosFromLocalStorage();
        return lists.map(list => Object.assign(new TodoList(), list));
    }

    createTodoList(name, desc, dueDate, priority) {
        this.todoLists.push(new TodoList(name, desc, dueDate, priority));
        this.saveTodoLists();
    }

    addItemToList(listName) {
        const todoItem = new TodoItem();
        this.todoLists.find((element) => element.name === listName)
            .addItemToList(todoItem);
        this.saveTodoLists();
    }

    saveTodoLists() {
        this.storageService.saveTodosToLocalStorage(this.todoLists);
    }

    getAllLists() {
        return this.todoLists;
    }
}