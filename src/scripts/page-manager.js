import allTodosPage from "./all-todos-page";
import allProjectsPage from "./all-projects-page";
import homePage from "./home-page";

export default class PageManager {
    constructor(contentContainer, eventBus) {
        this.container = contentContainer;
        this.eventBus = eventBus;
        this.currentPage = "home";

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
        allTodosPage(todos, this.container);
        this.currentPage = "todo";
    }

    displayAllProjectPage(projects) {
        this.clearContainerContent();
        allProjectsPage(projects, this.container);
        this.currentPage = "project";
    }

    displayHomePage(projects, todos) {
        this.clearContainerContent();
        homePage(projects, todos, this.container, this.eventBus);
        this.currentPage = "home";
    }

    displayTodoPage(todoList) {
        this.clearContainerContent();

    }

    displayProjectPage(project) {

    }

    updateDisplay(controller) {
        this.clearContainerContent();
        switch (this.currentPage) {
            case "home":
                this.displayHomePage(controller.getAllProjects(), controller.getAllTodoLists());
                break;
            case "project":
                this.displayAllProjectPage(controller.getAllProjects());
                break;
            case "todo":
                this.displayAllTodosPage(controller.getAllTodoLists());
                break;
        }
    }
}