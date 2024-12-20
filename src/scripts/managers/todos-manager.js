import TodoList from "../class objects/todo-list-class";
import TodoTask from "../class objects/todo-item-class";

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

    addTaskToList(todoList, name, desc, dueDate, priority) {
        this.todoLists.find((element) => element === todoList)
            .addItemToList(new TodoTask(name, desc, dueDate, priority));
        this.saveTodoLists();
    }

    saveTodoLists() {
        this.storageService.saveTodosToLocalStorage(this.todoLists);
    }

    getAllLists() {
        return this.todoLists;
    }
}