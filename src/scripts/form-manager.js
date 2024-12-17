import formList from "./form-list";

export default class FormManager {
    constructor(controller, pageManager) {
        this.controller = controller;
        this.pageManager = pageManager;
    }

    displayTodoForm() {
        const form = formList();
        if (form) {
            form.addEventListener("submit", this.handleTodoSubmit.bind(this));
            document.body.appendChild(form);
        }
    }

    displayProjectForm() {
        const form = formList();
        if (form) {
            form.addEventListener("submit", this.handleProjectSubmit.bind(this));
            document.body.appendChild(form);
        }
    }

    handleTodoSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.controller.createTodoList(
            data.get("name"),
            data.get("desc"),
            data.get("dueDate"),
            data.get("priority")
        );

        //page refresh
        this.pageManager.updateDisplay(this.controller);
        console.log("todo form submitted...");
    }

    handleProjectSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.controller.createProject(
            data.get("name"),
            data.get("desc")
        );

        //page refresh
        this.pageManager.updateDisplay(this.controller);
        console.log("project form submitted...");
    }
}