import Controller from "./controller";
import FormManager from "./form-manager";
import PageManager from "./page-manager";

export default function DOM() {
    const controller = new Controller();
    const contentContainer = document.getElementById('content');
    const pageManager = new PageManager(contentContainer);
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
        pageManager.displayTodoPage(controller.getAllTodoLists());
    });

    projectsBtn.addEventListener("click",() => {
        pageManager.displayProjectPage(controller.getAllProjects());
    });

    homeBtn.addEventListener("click", () => {
        pageManager.displayHomePage(controller.getAllProjects(), controller.getAllTodoLists());
    });

    //render initial page
    pageManager.updateDisplay(controller);
}