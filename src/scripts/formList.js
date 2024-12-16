export default function () {
    // Check if form already exists
    if (document.getElementById('todo-list-form')) {
        return; // Don't create duplicate forms
    }

    // Create form element
    const form = document.createElement('form');
    form.id = 'todo-list-form';

    // Create name input
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'name';
    nameLabel.textContent = 'Name';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.id = 'name';
    nameInput.placeholder = 'Name';
    nameInput.required = true;

    // Create description input
    const descLabel = document.createElement('label');
    descLabel.htmlFor = 'desc';
    descLabel.textContent = 'Description';

    const descInput = document.createElement('input');
    descInput.type = 'text';
    descInput.name = 'desc';
    descInput.id = 'desc';
    descInput.placeholder = 'Description';

    // Create date input
    const dateLabel = document.createElement('label');
    dateLabel.htmlFor = 'date';
    dateLabel.textContent = 'Date';

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.name = 'date';
    dateInput.id = 'date';

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

    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'submit';
    submitButton.name = 'submit';
    submitButton.textContent = 'SUBMIT';

    // Append all elements to form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(descLabel);
    form.appendChild(descInput);
    form.appendChild(dateLabel);
    form.appendChild(dateInput);
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect);
    form.appendChild(submitButton);

    return form;
}