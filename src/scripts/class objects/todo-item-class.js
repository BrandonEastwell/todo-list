export default class TodoTask {
    constructor(name, desc, dueDate, priority) {
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.state = "BACKLOG";
        this.priority = priority;
    }

    setTaskState(state) {
        if (state === "BACKLOG" || state === "SELECTED FOR WORK" || state === "COMPLETED") {
            this.state = state;
        }
    }

    getTaskState() {
        return this.state;
    }
}