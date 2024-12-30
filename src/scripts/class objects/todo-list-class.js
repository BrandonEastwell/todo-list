
const LIST_STATES = {
    BACKLOG: "backlog",
    COMPLETED: "completed",
    SELECTED_FOR_WORK: "selected for work"
}

export default class TodoList {
    constructor(name, desc, dueDate, priority) {
        this.tasks = [];
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getBacklog() {
        const result = [];
        for (const task of this.tasks) {
            task.getTaskState() === LIST_STATES["BACKLOG"] && result.push(task);
        }
        return result;
    }

    getSelectedForWork() {
        const result = [];
        for (const task of this.tasks) {
            task.getTaskState() === LIST_STATES["SELECTED_FOR_WORK"] && result.push(task);
        }
        return result;
    }

    getCompleted() {
        const result = [];
        for (const task of this.tasks) {
            task.getTaskState() === LIST_STATES["COMPLETED"] && result.push(task);
        }
        return result;
    }

    sortTodoList() {
        this.tasks.sort((a, b) => {
            return a.priority - b.priority
        })
    }

    addItemToList(task) {
        this.tasks.push(task);
        this.sortTodoList();
    }

    deleteItemFromList(task) {
        this.tasks = this.tasks.filter((item) => item !== task);
    }
}