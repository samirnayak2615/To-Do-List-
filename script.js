document.getElementById('add-btn').addEventListener('click', function() {
    var taskText = document.getElementById('new-task').value;
    
    if (taskText !== '') {
        var taskList = document.getElementById('task-list');
        var li = document.createElement('li');
        
        var taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        var buttonGroup = document.createElement('div');
        buttonGroup.className = 'task-buttons';

        var completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.className = 'complete-btn';
        completeBtn.onclick = function() {
            li.classList.toggle('completed');
        };

        var editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.onclick = function() {
            var newTaskText = prompt('Edit Task:', taskContent.textContent);
            if (newTaskText !== null && newTaskText !== '') {
                taskContent.textContent = newTaskText;
            }
        };

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        buttonGroup.appendChild(completeBtn);
        buttonGroup.appendChild(editBtn);
        buttonGroup.appendChild(deleteBtn);

        li.appendChild(taskContent);
        li.appendChild(buttonGroup);

        taskList.appendChild(li);

        document.getElementById('new-task').value = ''; // Clear input field
    }
});
