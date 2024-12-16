import TodoListObj from "./todoListObj";
import TodoItem from "./todoItemObj";
import ProjectObj from "./projectObj";

export default class Controller {
    constructor() {
        this.todoLists = [];
        this.projects = [];
    }

    createProject(title, desc, dueDate) {
        const project = new ProjectObj(title, desc, dueDate);
        this.addProjectToList(project);
    }

    addProjectToList(project) {
        this.projects.push(project);
    }

    createTodoList(name, desc, dueDate, priority) {
        this.todoLists.push(new TodoListObj(name, desc, dueDate, priority));
    }

    addTodoListItem(listName) {
        const todoItem = new TodoItem();
        this.todoLists.find((element) => element.name === listName)
            .addItemToList(todoItem);

    }

}