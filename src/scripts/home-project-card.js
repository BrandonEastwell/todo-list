function homeProjectCard(project) {
    const container = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = project.name;

    return container;
}

function homeTodosCard(todos) {
    const container = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = todos.name;

    return container;
}

export {homeProjectCard, homeTodosCard}