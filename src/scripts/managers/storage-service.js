import TodoTask from "../class objects/todo-item-class";
import TodoList from "../class objects/todo-list-class";

export default class StorageService {
    constructor() {
        this.PROJECTS_KEY = "PROJECTS";
        this.TODOS_KEY = "TODOS";
    }

    storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                e.name === "QuotaExceededError" &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    }

    rehydrateTasks(taskData) {
        // Convert plain object back to TodoTask instance
        const task = new TodoTask(
            taskData.name,
            taskData.desc,
            taskData.dueDate,
            taskData.priority
        );
        task.state = taskData.state;
        return task;
    }

    rehydrateTodos(todoLists) {
        const rehydratedTodos = []
        for (const list of todoLists) {
            const todo = new TodoList(
                list.name,
                list.desc,
                list.dueDate,
                list.priority
            )
            const tasks = [];
            for (const task of list.tasks) {
                tasks.push(this.rehydrateTasks(task));
            }
            todo.tasks = tasks;
            rehydratedTodos.push(todo)
        }
        return rehydratedTodos;
    }

    saveProjectsToLocalStorage(projects) {
        if (this.storageAvailable("localStorage")) {
            window.localStorage.setItem(this.PROJECTS_KEY, JSON.stringify(projects));
        } else {
            console.log("local storage unavailable...")
        }
    }

    saveTodosToLocalStorage(todos) {
        if (this.storageAvailable("localStorage")) {
            window.localStorage.setItem(this.TODOS_KEY, JSON.stringify(todos));
        } else {
            console.log("local storage unavailable...")
        }
    }

    getProjectsFromLocalStorage() {
        if (this.storageAvailable("localStorage")) {
            const projects = window.localStorage.getItem(this.PROJECTS_KEY);
            return projects ? JSON.parse(projects) : [];
        } else {
            console.log("local storage unavailable...")
        }
    }

    getTodosFromLocalStorage() {
        if (this.storageAvailable("localStorage")) {
            const savedTodos = window.localStorage.getItem(this.TODOS_KEY);
            if (savedTodos) {
                const todosData = JSON.parse(savedTodos);
                console.log(todosData)
                console.log(this.rehydrateTodos(todosData))
                return this.rehydrateTodos(todosData);
            } else {
                return [];
            }
        } else {
            console.log("local storage unavailable...")
        }
    }
}