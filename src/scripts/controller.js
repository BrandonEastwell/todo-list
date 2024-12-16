import TodoList from "./todoList";
import TodoItem from "./todoItem";
import Project from "./project";

export default class Controller {
    constructor() {
        this.todoLists = [];
        this.projects = [];
    }

    createProject(title, desc, dueDate) {
        const project = new Project(title, desc, dueDate);
        this.addProjectToList(project);
    }

    addProjectToList(project) {
        this.projects.push(project);
    }

    createTodoList(name, desc, dueDate, priority) {
        this.todoLists.push(new TodoList(name, desc, dueDate, priority));
    }

    addTodoListItem(listName) {
        const todoItem = new TodoItem();
        this.todoLists.find((element) => element.name === listName)
            .addItemToList(todoItem);

    }

}