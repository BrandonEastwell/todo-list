function todoDeleteForm(list) {
    // Check if form already exists
    if (document.getElementById('todo-list-form')) {
        return;
    }

    // Create container
    const container = document.createElement('div');
    container.className = "form-container";

    // Create EXIT button
    const exitBtn = document.createElement('button');
    exitBtn.id = 'exit-btn';
    exitBtn.textContent = 'X';

    exitBtn.addEventListener("click", () => {
        container.remove();
    });

    // Create form title
    const formTitle = document.createElement('h2');
    formTitle.textContent = `DELETE ${list.name}`;

    // Create form
    const form = document.createElement('form');
    form.id = 'todo-list-form';

    // Create name row
    const nameRow = document.createElement("div");
    nameRow.className = "form-row";

    const text = document.createElement('p');
    text.textContent = 'are you sure? This cannot be undone.';

    // Create submit row
    const submitRow = document.createElement("div");
    submitRow.className = "form-submit-row";

    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete';
    deleteButton.name = 'delete';
    deleteButton.textContent = `delete ${list.name}`;

    // Append all elements to form
    nameRow.appendChild(text);
    submitRow.appendChild(deleteButton);

    // Build form
    form.appendChild(formTitle);
    form.appendChild(nameRow);
    form.appendChild(submitRow);

    container.appendChild(exitBtn);
    container.appendChild(form);

    return container;
}

export { todoDeleteForm }