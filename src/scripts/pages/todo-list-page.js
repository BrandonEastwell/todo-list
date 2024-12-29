export default function TodoListPage(todoList, container, eventBus) {
    container.className = "content-layout";

    const headerContainer= document.createElement("div");
    headerContainer.className = "";

    const mainHeader = document.createElement("h1");
    mainHeader.textContent = todoList.name;

    const addItemBtn = document.createElement("button");
    addItemBtn.textContent = "+ Add Task";

    addItemBtn.addEventListener("click", () => {
        eventBus.publish('displayTaskForm', todoList);
    })


    // backlog tasks
    const backlogContainer = document.createElement("div");
    backlogContainer.className = "home-card-container";
    const backlogHeader = document.createElement("h2");
    backlogHeader.textContent = 'BACKLOG';

    backlogContainer.appendChild(backlogHeader);
    createTaskElements(todoList.getBacklog(), todoList, eventBus, backlogContainer);


    // selected for work tasks
    const selectedForWorkContainer = document.createElement("div");
    selectedForWorkContainer.className = "home-card-container";
    const workingHeader = document.createElement("h2");
    workingHeader.textContent = 'SELECTED FOR WORK'

    selectedForWorkContainer.appendChild(workingHeader);
    createTaskElements(todoList.getSelectedForWork(), todoList, eventBus, selectedForWorkContainer);


    // completed tasks
    const completedContainer = document.createElement("div");
    completedContainer.className = "home-card-container";
    const completedHeader = document.createElement("h2");
    completedHeader.textContent = 'COMPLETED';

    completedContainer.appendChild(completedHeader);
    createTaskElements(todoList.getCompleted(), todoList, eventBus, completedHeader);


    headerContainer.appendChild(mainHeader);
    headerContainer.appendChild(addItemBtn);
    container.appendChild(headerContainer);
    container.appendChild(backlogContainer);
    container.appendChild(selectedForWorkContainer);
    container.appendChild(completedContainer);
}

function createTaskElements(tasks, todoList, eventBus, container) {
    for (const task of tasks) {
        const taskContainer = document.createElement("div");
        const taskHeader = document.createElement("h3");
        taskHeader.textContent = task.name;
        taskContainer.appendChild(taskHeader);
        container.appendChild(taskContainer);
        taskContainer.addEventListener('click', () => {
            eventBus.publish('displayEditTaskForm', { task, todoList });
        });
    }

}