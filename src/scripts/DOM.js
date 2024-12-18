import Controller from "./controller";
import FormManager from "./form-manager";
import PageManager from "./page-manager";
import EventBus from "./event-bus";

export default function DOM() {
    const eventBus = new EventBus();
    const controller = new Controller();
    const contentContainer = document.getElementById('content');
    const pageManager = new PageManager(contentContainer, eventBus);
    const formManager = new FormManager(controller, pageManager);

    const addListBtn = document.getElementById('add-todo-btn');
    //const addListItemBtn = document.getElementById();
    const addProjectBtn = document.getElementById('add-project-btn');
    const todosBtn = document.getElementById('todos-btn');
    const projectsBtn = document.getElementById('projects-btn');
    const homeBtn = document.getElementById('home-btn');

    addListBtn.addEventListener("click", () => {
        formManager.displayTodoForm();
    });

    addProjectBtn.addEventListener("click", () => {
        formManager.displayProjectForm();
    })

    //addListItemBtn.addEventListener("click", displayForm);
    todosBtn.addEventListener("click", () => {
        pageManager.displayAllTodosPage(controller.getAllTodoLists());
    });

    projectsBtn.addEventListener("click",() => {
        pageManager.displayAllProjectPage(controller.getAllProjects());
    });

    homeBtn.addEventListener("click", () => {
        pageManager.displayHomePage(controller.getAllProjects(), controller.getAllTodoLists());
    });

    //render initial page
    pageManager.updateDisplay(controller);
}