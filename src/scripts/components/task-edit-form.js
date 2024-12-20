function createEditForm(task) {
    console.log(task)
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
    formTitle.textContent = `EDIT TASK ${task.name}`;

    // Create form
    const form = document.createElement('form');
    form.id = 'todo-list-form';

    // Create name row
    const nameRow = document.createElement("div");
    nameRow.className = "form-row";

    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'name';
    nameLabel.textContent = 'Name';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.id = 'name';
    nameInput.placeholder = 'Name';
    nameInput.value = task.name;

    // Create desc row
    const descRow = document.createElement("div");
    descRow.className = "form-row";

    const descLabel = document.createElement('label');
    descLabel.htmlFor = 'desc';
    descLabel.textContent = 'Description';

    const descInput = document.createElement('input');
    descInput.type = 'text';
    descInput.name = 'desc';
    descInput.id = 'desc';
    descInput.value = task.desc;

    // Create date row
    const dateRow = document.createElement("div");
    dateRow.className = "form-row";

    const dateLabel = document.createElement('label');
    dateLabel.htmlFor = 'date';
    dateLabel.textContent = 'Date';

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.name = 'date';
    dateInput.id = 'date';
    dateInput.value = task.dueDate;

    // Create priority row
    const priorityRow = document.createElement("div");
    priorityRow.className = "form-row";

    const priorityLabel = document.createElement('label');
    priorityLabel.htmlFor = 'priority';
    priorityLabel.textContent = 'Priority';

    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'priority';
    prioritySelect.name = 'priority';
    prioritySelect.value = task.priority;

    const priorities = ['Very High', 'High', 'Normal', 'Low', 'Very Low'];
    priorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });

    // Create state row
    const stateRow = document.createElement("div");
    stateRow.className = "form-row";

    const stateLabel = document.createElement('label');
    stateLabel.htmlFor = 'state';
    stateLabel.textContent = 'state';

    const stateSelect = document.createElement('select');
    stateSelect.id = 'state';
    stateSelect.name = 'state';
    stateSelect.value = task.state;

    const states = ['Backlog', 'Selected For Work', 'Completed'];
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });

    // Create submit row
    const submitRow = document.createElement("div");
    submitRow.className = "form-submit-row";

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'submit';
    submitButton.name = 'submit';
    submitButton.textContent = 'SAVE TASK';

    const deleteButton = document.createElement('button');
    deleteButton.type = 'submit';
    deleteButton.id = 'delete';
    deleteButton.name = 'delete';
    deleteButton.textContent = 'DELETE TASK';

    // Append all elements to form
    nameRow.appendChild(nameLabel);
    nameRow.appendChild(nameInput);
    descRow.appendChild(descLabel);
    descRow.appendChild(descInput);
    dateRow.appendChild(dateLabel);
    dateRow.appendChild(dateInput);
    priorityRow.appendChild(priorityLabel);
    priorityRow.appendChild(prioritySelect);
    stateRow.appendChild(stateLabel);
    stateRow.appendChild(stateSelect);
    submitRow.appendChild(submitButton);
    submitRow.appendChild(deleteButton);

    // Build form
    form.appendChild(formTitle);
    form.appendChild(nameRow);
    form.appendChild(descRow);
    form.appendChild(dateRow);
    form.appendChild(priorityRow);
    form.appendChild(stateRow);
    form.appendChild(submitRow);

    container.appendChild(exitBtn);
    container.appendChild(form);

    return container;
}

export {createEditForm}