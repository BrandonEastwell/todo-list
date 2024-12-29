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

        this.eventBus.subscribe('displayEditTaskForm', ({ task, todoList }) => {
            this.displayEditTaskForm(task, todoList);
        });
    }

    displayTodoForm() {
        const form = createNewTodoListForm();
        if (form) {
            form.addEventListener("submit", (event) => {
                this.handleTodoSubmit(event);
                form.remove();
            });
            document.body.appendChild(form);
        }
    }

    displayProjectForm() {
        const form = createNewProjectForm();
        if (form) {
            form.addEventListener("submit", (event) => {
                this.handleProjectSubmit(event);
                form.remove();
            });
            document.body.appendChild(form);
        }
    }

    displayTaskForm(todoList) {
        const formContainer = createNewTaskForm();
        if (formContainer) {
            const form = formContainer.querySelector('#todo-list-form');
            form.addEventListener("submit", (event) => {
                this.handleTaskSubmit(event, todoList);
                formContainer.remove();
            });
            document.body.appendChild(formContainer);
        }
    }

    displayEditTaskForm(task, todoList) {
        const formContainer = createEditTaskForm(task);
        if (formContainer) {
            const form = formContainer.querySelector('#todo-list-form');
            form.addEventListener("submit", (event) => {
                this.handleEditTaskSubmit(event, task);
                formContainer.remove();
            });
            const delBtn = form.querySelector('#delete');
            delBtn.addEventListener("click", (event) => {
                this.handleEditTaskDelete(event, task, todoList);
                formContainer.remove();
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
        task.editTaskProps(
            data.get("name"),
            data.get("desc"),
            data.get("dueDate"),
            data.get("state"),
            data.get("priority")
        );
        this.controller.saveTodoLists();

        //page refresh
        this.pageManager.updateDisplay(this.controller);
        console.log("task form submitted...");
    }

    handleEditTaskDelete(event, task, todoList) {
        event.preventDefault();
        console.log(todoList);
        todoList.deleteItemFromList(task);
        this.controller.saveTodoLists();

        //page refresh
        this.pageManager.updateDisplay(this.controller);
        console.log("task deleted...");
    }
}