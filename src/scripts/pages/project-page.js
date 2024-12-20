export default function ProjectPage(project, container, eventBus) {
    container.className = "content-layout";

    const headerContainer= document.createElement("div");
    headerContainer.className = "";

    const mainHeader = document.createElement("h1");
    mainHeader.textContent = todosList.name;

    const addItemBtn = document.createElement("button");
    addItemBtn.textContent = "+ Add Task";

    addItemBtn.addEventListener("click", () => {
        eventBus.publish('displayTodoForm', project);
    })

    const backlogContainer = document.createElement("div");
    backlogContainer.className = "home-card-container";
    const backlogHeader = document.createElement("h2");
    backlogHeader.textContent = 'BACKLOG';

    const workingContainer = document.createElement("div");
    workingContainer.className = "home-card-container";
    const workingHeader = document.createElement("h2");
    workingHeader.textContent = 'SELECTED FOR WORK'

    const completedContainer = document.createElement("div");
    completedContainer.className = "home-card-container";
    const completedHeader = document.createElement("h2");
    completedHeader.textContent = 'COMPLETED';

    headerContainer.appendChild(mainHeader);
    headerContainer.appendChild(addItemBtn);
    backlogContainer.appendChild(backlogHeader);
    workingContainer.appendChild(workingHeader);
    completedContainer.appendChild(completedHeader);
    container.appendChild(headerContainer);
    container.appendChild(backlogContainer);
    container.appendChild(workingContainer);
    container.appendChild(completedContainer);
}