export default function AllTodosPage(container) {
    const todosContainer = document.createElement("div");
    todosContainer.className = "todo-lists-container";
    const projectHeader = document.createElement("h2");
    projectHeader.textContent = "My Todos";

    todosContainer.appendChild(projectHeader);
    container.appendChild(todosContainer);
}