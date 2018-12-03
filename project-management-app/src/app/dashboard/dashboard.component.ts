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
  constructor(private projectService: ProjectService, private taskService: TaskService, private teamService: TeamService) {
  }

  ngOnInit() {
    this.getProjects();
    // this.getTasks();
    this.getMembers();
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



}
