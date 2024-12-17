import todoPage from "./todos-page";
import projectPage from "./projects-page";
import homePage from "./home-page";

export default class PageManager {
    constructor(contentContainer) {
        this.container = contentContainer;
        this.currentPage = "home";
    }

    clearContainerContent() {
        this.container.replaceChildren();
    }

    displayTodoPage(todos) {
        this.clearContainerContent();
        todoPage(todos, this.container);
        this.currentPage = "todo";
    }

    displayProjectPage(projects) {
        this.clearContainerContent();
        projectPage(projects, this.container);
        this.currentPage = "project";
    }

    displayHomePage(projects, todos) {
        this.clearContainerContent();
        homePage(projects, todos, this.container);
        this.currentPage = "home";
    }

    updateDisplay(controller) {
        this.clearContainerContent();
        switch (this.currentPage) {
            case "home":
                this.displayHomePage(controller.getAllProjects(), controller.getAllTodoLists());
                break;
            case "project":
                this.displayProjectPage(controller.getAllProjects());
                break;
            case "todo":
                this.displayTodoPage(controller.getAllTodoLists());
                break;
        }
    }
}