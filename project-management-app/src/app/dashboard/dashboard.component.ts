import { TaskService } from './../services/task.service';
import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from './../models/project';
import { Task } from './../models/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: Project[];
  tasks: Task[];
  constructor(private projectService: ProjectService, private taskService: TaskService) {
  }

  ngOnInit() {
    this.getProjects();
    this.getTasks();
  }
  getProjects() {
    this.projectService.getAllProjects()
    .subscribe(projects => this.projects = projects);
  }
  getTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => this.tasks = tasks);
  }



}
