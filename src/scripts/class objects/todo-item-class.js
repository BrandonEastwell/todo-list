export default class TodoTask {
    constructor(name, desc, dueDate, priority) {
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.state = "BACKLOG";
        this.priority = priority;
    }

    setTaskState(state) {
        state = state.toLowerCase();
        if (state === "backlog" || state === "selected for work" || state === "completed") {
            this.state = state;
        }
    }

    getTaskState() {
        return this.state.toLowerCase();
    }

    editTaskProps(name, desc, dueDate, state, priority) {
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.state = state;
        this.priority = priority;
    }
}