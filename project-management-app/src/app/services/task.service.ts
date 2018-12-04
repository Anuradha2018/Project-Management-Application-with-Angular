import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];
  lastId: number;
constructor(private httpTask: HttpClient) { }
/*getAllTasks(): Observable<Task[]> {
    return this.httpTask.get<Task[]>('/api/task.json');
}*/
// POST
addTask(task: Task): TaskService {
  if (!task.id) {
    task.id = ++this.lastId;
  }
  this.tasks.push(task);
  return this;
}
// DELETE /tasks/:id
deleteTaskById(id: number): TaskService {
  this.tasks = this.tasks
  .filter(task => task.id !== id);
  return this;
}
// PUT /tasks/:id
updateTaskById(id: number, values: Object = {}): Task {
  const task = this.getTaskById(id);
  if (!task) {
    return null;
  }
  Object.assign(task, values);
  return task;
}
// GET /tasks/:id
getAllTasks(): Task[] {
  return this.tasks;
}
// GET /tasks/:id
getTaskById(id: number): Task {
  return this.tasks
  .filter(task => task.id === id)
  .pop();
}
// Toggle task Complete
toggleTaskComplete(task: Task) {
  const updatedTask = this.updateTaskById(task.id, {
    status: !task.status
  });
  return updatedTask;
}

}
