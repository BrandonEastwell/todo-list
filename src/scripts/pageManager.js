import todoPage from "./todos";
import projectPage from "./projects";
import homePage from "./home";

export default class PageManager {
    constructor(contentContainer) {
        this.container = contentContainer;
        this.currentPage = "home";
        this.updateDisplay();
    }

    displayTodoPage(controller) {
        todoPage(controller, this.container);
        this.currentPage = "todo";
    }

    displayProjectPage(controller) {
        projectPage(controller, this.container);
        this.currentPage = "project";
    }

    displayHomePage(controller) {
        homePage(controller, this.container);
        this.currentPage = "home";
    }

    updateDisplay(controller) {
        switch (this.currentPage) {
            case "home":
                this.displayHomePage(controller);
                break;
            case "project":
                this.displayProjectPage(controller);
                break;
            case "todo":
                this.displayTodoPage(controller);
                break;
        }
    }
}