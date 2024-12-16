import Controller from "./controller";
import FormManager from "./formManager";
import PageManager from "./pageManager";

export default function DOM() {
    const controller = new Controller();
    const contentContainer = document.getElementById('content');
    const formManager = new FormManager(controller);
    const pageManager = new PageManager(contentContainer);


    const addListBtn = document.getElementById('add-todo-btn');
    //const addListItemBtn = document.getElementById();
    const addProjectBtn = document.getElementById('add-project-btn');
    const todosBtn = document.getElementById('todos-btn');
    const projectsBtn = document.getElementById('projects-btn');
    const homeBtn = document.getElementById('home-btn');

    addListBtn.addEventListener("click", () => {
        formManager.displayTodoForm();
        pageManager.updateDisplay(controller);
    });

    addProjectBtn.addEventListener("click", () => {
        formManager.displayProjectForm();
        pageManager.updateDisplay(controller);
    })

    //addListItemBtn.addEventListener("click", displayForm);
    todosBtn.addEventListener("click", () => {
        pageManager.displayTodoPage();
    });

    projectsBtn.addEventListener("click",() => {
        pageManager.displayProjectPage();
    });

    homeBtn.addEventListener("click", () => {
        pageManager.displayHomePage();
    });

}