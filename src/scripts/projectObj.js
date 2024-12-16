export default class ProjectObj {
    constructor(title, desc, dueDate) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.todoLists = [];
    }
}