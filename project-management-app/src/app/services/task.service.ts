import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

constructor(private httpTask: HttpClient) { }
/*getAllTasks(): Observable<Task[]> {
    return this.httpTask.get<Task[]>('/api/task.json');
}*/
}
