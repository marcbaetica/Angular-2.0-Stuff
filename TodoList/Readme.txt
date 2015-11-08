WORK IN PROGRESS!!!


This is a TodoList application that uses the Angular2.0 and Bootswatch frameworks. It allows users to keep track of their tasks by adding, selectively removing or clearing the tasks in a list.


Future iterations of this app will provide the following improvements:
- the app will be generating/consuming data from a MongoDB database via an express RESTful API;
- a productivity bar will constantly show the remaining amount of tasks that the user still has to complete (bootstrap provides this implementation)
- a register/login page will be provided of each user to have access to their own UI tasks as well as everyone's progress in the case of an admin/manager
- users can queue a set of completed tasks. The manager can unqueue the tasks should he/she wish to approve of their completion. Queuing a task hides it from the user's main to-do-list (shown in their individual queue) but the progress bar only updates once the manager approves the task's deletion