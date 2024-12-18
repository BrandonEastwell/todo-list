import {homeProjectCard, homeTodosCard} from "./home-project-card";

export default function TodoListPage(todosList, container, eventBus) {
    const todosContainer = document.createElement("div");
    todosContainer.className = "todo-lists-container";
    const projectHeader = document.createElement("h2");
    projectHeader.textContent = "My Todos";

    todosContainer.appendChild(projectHeader);
    container.appendChild(todosContainer);
}