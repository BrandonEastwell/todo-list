export default function TodoListPage(todosList, container, eventBus) {
    container.className = "content-layout";

    const headerContainer= document.createElement("div");
    headerContainer.className = "";

    const mainHeader = document.createElement("h1");
    mainHeader.textContent = todosList.name;

    const addItemBtn = document.createElement("button");
    addItemBtn.textContent = "+ Add Task";

    addItemBtn.addEventListener("click", () => {
        eventBus.publish('displayTaskForm', todosList);
    })

    const backlogContainer = document.createElement("div");
    backlogContainer.className = "home-card-container";
    const backlogHeader = document.createElement("h2");
    backlogHeader.textContent = 'BACKLOG';

    backlogContainer.appendChild(backlogHeader);
    createTaskElements(todosList.getBacklog(), eventBus, backlogContainer);

    const workingContainer = document.createElement("div");
    workingContainer.className = "home-card-container";
    const workingHeader = document.createElement("h2");
    workingHeader.textContent = 'SELECTED FOR WORK'

    workingContainer.appendChild(workingHeader);
    createTaskElements(todosList.getSelectedForWork(), eventBus, workingContainer);

    const completedContainer = document.createElement("div");
    completedContainer.className = "home-card-container";
    const completedHeader = document.createElement("h2");
    completedHeader.textContent = 'COMPLETED';

    completedContainer.appendChild(completedHeader);
    createTaskElements(todosList.getCompleted(), eventBus, completedHeader);

    headerContainer.appendChild(mainHeader);
    headerContainer.appendChild(addItemBtn);
    container.appendChild(headerContainer);
    container.appendChild(backlogContainer);
    container.appendChild(workingContainer);
    container.appendChild(completedContainer);
}

function createTaskElements(tasks, eventBus, container) {
    for (const task of tasks) {
        const taskContainer = document.createElement("div");
        const taskHeader = document.createElement("h3");
        taskHeader.textContent = task.name;
        taskContainer.appendChild(taskHeader);
        container.appendChild(taskContainer);

        taskContainer.addEventListener('click', (task) => {
            eventBus.publish('editTaskForm', task);
        });
    }

}