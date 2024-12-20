// Form configuration object
const FORM_TYPES = {
    TODO_LIST: {
        id: 'todo-list-form',
        title: 'NEW TODO LIST',
        submitText: 'CREATE'
    },
    PROJECT: {
        id: 'todo-list-form',
        title: 'NEW PROJECT',
        submitText: 'CREATE'
    },
    TASK: {
        id: 'todo-list-form',
        title: 'NEW TASK',
        submitText: 'CREATE'
    },
    EDIT_TASK: {
        id: 'todo-list-form',
        title: 'EDIT TASK',
        submitText: 'SAVE'
    }
};

function createForm(formType) {
    // Check if form already exists
    if (document.getElementById('todo-list-form')) {
        return;
    }

    const config = FORM_TYPES[formType];
    if (!config) {
        throw new Error(`Unknown form type: ${formType}`);
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
    formTitle.textContent = config.title;

    // Create form
    const form = document.createElement('form');
    form.id = config.id;

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
    nameInput.required = true;

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
    descInput.placeholder = 'Description';

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

    // Create priority row
    const priorityRow = document.createElement("div");
    priorityRow.className = "form-row";

    const priorityLabel = document.createElement('label');
    priorityLabel.htmlFor = 'priority';
    priorityLabel.textContent = 'Priority';

    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'priority';
    prioritySelect.name = 'priority';
    prioritySelect.required = true;

    const priorities = ['Very High', 'High', 'Normal', 'Low', 'Very Low'];
    priorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });

    // Create submit row
    const submitRow = document.createElement("div");
    submitRow.className = "form-submit-row";

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'submit';
    submitButton.name = 'submit';
    submitButton.textContent = config.submitText;

    // Append all elements to form
    nameRow.appendChild(nameLabel);
    nameRow.appendChild(nameInput);
    descRow.appendChild(descLabel);
    descRow.appendChild(descInput);
    dateRow.appendChild(dateLabel);
    dateRow.appendChild(dateInput);
    priorityRow.appendChild(priorityLabel);
    priorityRow.appendChild(prioritySelect);
    submitRow.appendChild(submitButton);

    // Build form
    form.appendChild(formTitle);
    form.appendChild(nameRow);
    form.appendChild(descRow);
    form.appendChild(dateRow);
    form.appendChild(priorityRow);
    form.appendChild(submitRow);

    container.appendChild(exitBtn);
    container.appendChild(form);

    return container;
}

// Export the form creation functions
export function createNewTodoListForm() {
    return createForm('TODO_LIST');
}

export function createNewProjectForm() {
    return createForm('PROJECT');
}

export function createNewTaskForm() {
    return createForm('TASK');
}

export function createEditTaskForm() {
    return createForm('EDIT_TASK');
}