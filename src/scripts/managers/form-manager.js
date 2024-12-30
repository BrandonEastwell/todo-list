import {
    createEditTaskForm,
    createNewProjectForm,
    createNewTaskForm,
    createNewTodoListForm, createTodoDeleteForm
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

        this.eventBus.subscribe('displayListDeleteForm', (todoList) => {
            this.displayListDeleteForm(todoList)
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

    displayListDeleteForm(todoList) {
        const formContainer = createTodoDeleteForm(todoList);
        if (formContainer) {
            const form = formContainer.querySelector('#todo-list-form');
            const delBtn = form.querySelector('#delete');
            delBtn.addEventListener("click", (event) => {
                this.eventBus.publish('deleteTodoList', todoList);
                this.pageManager.updateDisplay(this.controller, "home"); //reset to default home
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
        console.log("todo created...");
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
        console.log("project created...");
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
        console.log("task created...");
    }

    handleEditTaskSubmit(event, task) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(task)
        task.editTaskProps(
            data.get("name"),
            data.get("desc"),
            data.get("dueDate"),
            data.get("state"),
            data.get("priority")
        );
        console.log(task)

        this.controller.saveTodoLists();

        //page refresh
        this.pageManager.updateDisplay(this.controller);
        console.log("task edit submitted...");
    }

    handleEditTaskDelete(event, task, todoList) {
        event.preventDefault();
        todoList.deleteItemFromList(task);
        this.controller.saveTodoLists();

        //page refresh
        this.pageManager.updateDisplay(this.controller);
        console.log("task deleted...");
    }
}