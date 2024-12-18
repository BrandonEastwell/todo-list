import {homeProjectCard, homeTodosCard} from "./home-project-card";

export default function HomePage(projects, todosList, container, eventBus) {
     const projectContainer = document.createElement("div");
     projectContainer.className = "home-card-container";
     const projectHeader = document.createElement("h2");
     projectHeader.textContent = "My Projects";
     projectContainer.appendChild(projectHeader);

     const todosContainer = document.createElement("div");
     todosContainer.className = "home-card-container";
     const todosHeader = document.createElement("h2");
     todosHeader.textContent = "My Todos";
     todosContainer.appendChild(todosHeader);

     console.log(projects);
     console.log(todosList);

     if (projects) {
          for (let i = 0; i < 6; i++) {
               const project = projects[i];
               project && projectContainer.appendChild(homeProjectCard(project, eventBus));
          }
     }

     if (todosList) {
          for (let i = 0; i < 6; i++) {
               const todo = todosList[i];
               todo && todosContainer.appendChild(homeTodosCard(todo, eventBus));
          }
     }

     container.appendChild(projectContainer);
     container.appendChild(todosContainer);
}