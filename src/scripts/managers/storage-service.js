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
            const todos = window.localStorage.getItem(this.TODOS_KEY);
            return todos ? JSON.parse(todos) : []
        } else {
            console.log("local storage unavailable...")
        }
    }
}