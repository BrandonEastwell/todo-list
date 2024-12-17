import StorageService from "./storage-service";
import ProjectManager from "./project-manager";
import TodosManager from "./todos-manager";

export default class Controller {
    constructor() {
        this.storageService = new StorageService();
        this.projectManager = new ProjectManager(this.storageService);
        this.todoManager = new TodosManager(this.storageService);
    }

    // Project Methods
    createProject(title, desc, dueDate) {
        return this.projectManager.createProject(title, desc, dueDate);
    }

    getAllProjects() {
        return this.projectManager.getAllProjects();
    }

    // Todos Methods
    createTodoList(name, desc, dueDate, priority) {
        return this.todoManager.createTodoList(name, desc, dueDate, priority);
    }

    addTodoListItem(list, todoItemData) {
        return this.todoManager.addItemToList(list, todoItemData);
    }

    getAllTodoLists() {
        return this.todoManager.getAllLists();
    }

}