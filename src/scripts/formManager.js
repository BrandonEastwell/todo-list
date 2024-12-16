import formList from "./formList";

export default class FormManager {
    constructor(controller) {
        this.controller = controller;
    }

    displayTodoForm() {
        const form = formList('todo');
        if (form) {
            form.addEventListener("submit", this.handleTodoSubmit.bind(this));
            document.body.appendChild(form);
        }
    }

    displayProjectForm() {
        const form = formList('project');
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
    }

    handleProjectSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.controller.createProject(
            data.get("name"),
            data.get("desc")
        );
    }
}