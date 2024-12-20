import StorageService from "./storage-service";
import ProjectManager from "./project-manager";
import TodosManager from "./todos-manager";
import TodoTask from "../class objects/todo-item-class";

export default class Controller {
    constructor() {
        this.storageService = new StorageService();
        this.projectManager = new ProjectManager(this.storageService);
        this.todoManager = new TodosManager(this.storageService);
    }

    // Project Methods
    createProject(title, desc, dueDate, priority) {
        return this.projectManager.createProject(title, desc, dueDate, priority);
    }

    getAllProjects() {
        return this.projectManager.getAllProjects();
    }

    // Todos Methods
    createTodoList(name, desc, dueDate, priority) {
        return this.todoManager.createTodoList(name, desc, dueDate, priority);
    }

    createTodoTask(list, name, desc, dueDate, priority) {
        return this.todoManager.addTaskToList(list, name, desc, dueDate, priority);
    }

    getAllTodoLists() {
        return this.todoManager.getAllLists();
    }

}