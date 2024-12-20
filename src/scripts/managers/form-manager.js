import {
    createEditTaskForm,
    createNewProjectForm,
    createNewTaskForm,
    createNewTodoListForm
} from "../components/form-list";

export default class FormManager {
    constructor(controller, pageManager, eventBus) {
        this.controller = controller;
        this.pageManager = pageManager;
        this.eventBus = eventBus;

        this.eventBus.subscribe('displayTaskForm', (todoList) => {
            this.displayTaskForm(todoList);
        });

        this.eventBus.subscribe('displayTodoForm', (todoList) => {
            this.displayTaskForm(todoList);
        });

        this.eventBus.subscribe('editTaskForm', (task) => {
            this.displayEditTaskForm(task);
        })
    }

    displayTodoForm() {
        const form = createNewTodoListForm();
        if (form) {
            form.addEventListener("submit", this.handleTodoSubmit.bind(this));
            document.body.appendChild(form);
        }
    }

    displayProjectForm() {
        const form = createNewProjectForm();
        if (form) {
            form.addEventListener("submit", this.handleProjectSubmit.bind(this));
            document.body.appendChild(form);
        }
    }

    displayTaskForm(todoList) {
        const formContainer = createNewTaskForm();
        if (formContainer) {
            const form = formContainer.querySelector('#todo-list-form');
            form.addEventListener("submit", (event) => {
                this.handleTaskSubmit(event, todoList);
            });
            document.body.appendChild(formContainer);
        }
    }

    displayEditTaskForm(task) {
        const formContainer = createEditTaskForm();
        if (formContainer) {
            const form = formContainer.querySelector('#todo-list-form');
            form.addEventListener("submit", (event) => {
                this.handleTaskSubmit(event, task);
            });
            document.body.appendChild(formContainer);
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
            data.get("desc"),
            data.get("dueDate"),
            data.get("priority")
        );

        //page refresh
        this.pageManager.updateDisplay(this.controller);
        console.log("project form submitted...");
    }

    handleTaskSubmit(event, todoList) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.controller.createTodoTask(
            todoList,
            data.get("name"),
            data.get("desc"),
            data.get("dueDate"),
            data.get("priority")
        );

        //page refresh
        this.pageManager.updateDisplay(this.controller);
        console.log("task form submitted...");
    }

    handleEditTaskSubmit(event, task) {
        event.preventDefault();
        const data = new FormData(event.target);


        //page refresh
        this.pageManager.updateDisplay(this.controller);
        console.log("task form submitted...");
    }
}