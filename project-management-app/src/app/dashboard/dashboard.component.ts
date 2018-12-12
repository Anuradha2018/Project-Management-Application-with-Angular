import { TeamService } from './../services/team.service';
import { TaskService } from './../services/task.service';
import { ProjectService } from './../services/project.service';

import { Component, OnInit } from '@angular/core';
import { ExploreProject } from './../models/explore-project';
import { Task } from './../models/task';
import { ExploreTeam } from './../models/explore-team';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: ExploreProject[];
  tasks: Task[];
  teamMembers: ExploreTeam[];
  isClicked = true;
  todoTitle: string;
 
  constructor(
    private projectService: ProjectService, 
    private taskService: TaskService, 
    private teamService: TeamService
    ) {
  }

  ngOnInit() {
    this.getProjects();
    this.getTasks();
    this.getMembers();
    this. toggleClick();
   
  }
  getProjects() {
    this.projectService.getAllProjects()
    .subscribe(projects => this.projects = projects);
  }
  /*getTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => this.tasks = tasks);
  }*/
  getMembers() {
    this.teamService.getAllMembers()
    .subscribe(members => this.teamMembers = members);
  }
  toggleTaskComplete(todoId) {
    this.taskService.toggleTaskComplete(todoId);
    this.getTasks();
  }
  toggleClick() {
    this.isClicked = !this.isClicked;
  }
  addTask() {
    let taskItem: Task = new Task();
    taskItem.title = this.todoTitle;
    taskItem.status = false;
    this.taskService.addTask(taskItem);
    this.getTasks();
   
  }
  removeTask(todoId) {
    this.taskService.deleteTaskById(todoId);
    this.getTasks();
  }

  getTasks() {

    this.tasks =  this.taskService.getAllTasks();
  }



}
