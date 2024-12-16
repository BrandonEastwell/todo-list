import Controller from "./controller";
import formList from "./formList";

export default function DOM() {
    const controller = new Controller();
    const addListBtn = document.getElementById();
    const addListItemBtn = document.getElementById();
    const addProjectBtn = document.getElementById();

    addListBtn.addEventListener("click", displayForm);
    addListItemBtn.addEventListener("click", displayForm);
    addProjectBtn.addEventListener("click", displayForm);

    function displayForm() {
        const form = formList();
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const data = new FormData(event.target);
            controller.createTodoList(data.get("name"), data.get("desc"), data.get("dueDate"), data.get("priority"));
            updateDisplay();
        });
        document.body.appendChild(form);
    }

    const updateDisplay = () => {
        console.log(controller.todoLists);
        console.log(controller.projects);
    }




}