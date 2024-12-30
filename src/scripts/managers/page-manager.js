import createAllTodosPage from "../pages/all-todos-page";
import createAllProjectsPage from "../pages/all-projects-page";
import createHomePage from "../pages/home-page";
import createTodoListPage from "../pages/todo-list-page";

export default class PageManager {
    constructor(contentContainer, eventBus) {
        this.container = contentContainer;
        this.eventBus = eventBus;
        this.currentPage = "home";
        this.currentList = undefined;
        this.currentProject = undefined;

        this.eventBus.subscribe('displayTodoPage', (todoList) => {
           this.displayTodoPage(todoList);
        });

        this.eventBus.subscribe('displayProjectPage', (project) => {
            this.displayProjectPage(project);
        });
    }

    clearContainerContent() {
        this.container.replaceChildren();
    }

    displayAllTodosPage(todos) {
        this.clearContainerContent();
        createAllTodosPage(todos, this.container);
        this.currentPage = "allTodos";
    }

    displayAllProjectPage(projects) {
        this.clearContainerContent();
        createAllProjectsPage(projects, this.container);
        this.currentPage = "allProjects";
    }

    displayHomePage(projects, todos) {
        this.clearContainerContent();
        createHomePage(projects, todos, this.container, this.eventBus);
        this.currentPage = "home";
    }

    displayTodoPage(todoList) {
        this.clearContainerContent();
        createTodoListPage(todoList, this.container, this.eventBus);
        this.currentList = todoList;
        this.currentPage = "todolist"
    }

    displayProjectPage(project) {

        this.currentProject = project;
        this.currentPage = "project"
    }

    updateDisplay(controller, page = this.currentPage) {
        this.clearContainerContent();
        switch (page) {
            case "home":
                this.displayHomePage(controller.getAllProjects(), controller.getAllTodoLists());
                break;
            case "allProjects":
                this.displayAllProjectPage(controller.getAllProjects());
                break;
            case "allTodos":
                this.displayAllTodosPage(controller.getAllTodoLists());
                break;
            case "todolist":
                this.displayTodoPage(this.currentList);
                break;
            case "project":
                this.displayTodoPage(this.currentProject);
                break;
        }
    }
}