import StorageService from "./storage-service";
import ProjectManager from "./project-manager";
import TodosManager from "./todos-manager";

export default class Controller {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.storageService = new StorageService();
        this.projectManager = new ProjectManager(this.storageService, this.eventBus);
        this.todoManager = new TodosManager(this.storageService, this.eventBus);
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

    saveTodoLists() {
        this.todoManager.saveTodoLists();
    }

}