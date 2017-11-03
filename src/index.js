let listForm;
let taskForm;
let newList = function(title) {
  return new List(title);
};
let dropDown;
let newTask = function(description, priority) {
  return new Task(description, priority);
};
let listObject

document.addEventListener('DOMContentLoaded', () => {
  listForm = document.getElementById('create-list-form');
  taskForm = document.getElementById('create-task-form');
  // create new list object based on submitted input

  listForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let listDiv = document.createElement('div');
    let input = ev.target.querySelector('input').value;
    let newListItem = newList(input);
    listDiv.innerHTML = newListItem.title;
    listDiv.id = `List-id: ${newListItem.id}`;
    ev.target.reset();

    // create delete button
    let button = document.createElement("button");
    button.innerHTML = 'X'
    // add button before list name
    listDiv.prepend(button)
    let listSection = document.getElementById('lists');
    // add entire new list w/ button to list section
    listSection.appendChild(listDiv);

    // create button to delete list
    button.addEventListener('click', function(ev) {
      // remove list
      document.getElementById(`List-id: ${newListItem.id}`).remove();
      // remove list from drop down as well
      document.getElementById(`Dropdown-id: ${newListItem.id}`).remove();
    });


    // show all created lists in dropdown
    dropDown = document.getElementById('parent-list');

    const option = document.createElement("option");
    option.text = newListItem.title;
    option.id = `Dropdown-id: ${newListItem.id}`;
    dropDown.add(option);
  });

  //
  taskForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    // save input values
    let taskInput = document.getElementById('new-task-description').value;
    let priorityInput = document.getElementById('new-task-priority').value;

    // find list object from dropdown names
    // let parentList = parseInt(document.getElementById('parent-list').childNodes[0].id.split(' ')[1])
    let parentList = document.getElementById('parent-list').value;
    listObject = List.all().filter( (list) => list.title === parentList );

    // create task object w/ input values
    let listTask = newTask(taskInput, priorityInput);
    let taskDiv = document.createElement('ul');
    taskDiv.innerHTML = `<li>Task: ${listTask.description}</li> <li>Priority: ${listTask.priority}</li>`;
    // reset and clear input after submit
    document.getElementById('new-task-description').value = '';
    document.getElementById('new-task-priority').value = '';
    // append UL to listDiv
    let listDiv = document.getElementById(`List-id: ${listObject[0].id}`);
    listDiv.appendChild(taskDiv);
  });


});
