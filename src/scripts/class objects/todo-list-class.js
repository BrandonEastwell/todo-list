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
            task.state === "BACKLOG" && result.push(task);
        }
        return result;
    }

    getSelectedForWork() {

    }

    getCompleted() {

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
}