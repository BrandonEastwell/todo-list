export default function () {
    // Check if form already exists
    if (document.getElementById('todo-list-form')) {
        return; // Don't create duplicate forms
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
    formTitle.textContent = 'NEW TODO LIST';

    // Create form element
    const form = document.createElement('form');
    form.id = 'todo-list-form';

    // Create name row
    const nameRow = document.createElement("div");
    nameRow.className = "form-row";

    // Create name input row
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

    // Create description input
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

    // Create date input
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

    // Create priority select
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

    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'submit';
    submitButton.name = 'submit';
    submitButton.textContent = 'CREATE';


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