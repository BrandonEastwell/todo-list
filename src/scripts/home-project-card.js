function homeProjectCard(project, eventBus) {
    const container = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = project.name;

    container.addEventListener('click', () => {
        eventBus.publish('displayTodoPage', project);
    });

    // Append elements to container
    container.appendChild(title);

    return container;
}

function homeTodosCard(todos, eventBus) {
    const container = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = todos.name;

    container.addEventListener('click', () => {
        eventBus.publish('displayTodoPage', todos);
    });

    // Append elements to container
    container.appendChild(title);

    return container;
}

export {homeProjectCard, homeTodosCard}