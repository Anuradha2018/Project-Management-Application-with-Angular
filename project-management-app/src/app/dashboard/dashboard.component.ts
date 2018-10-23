import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from './../models/project';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: Project[];
  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.getProjects();
  }
  getProjects() {
    this.projectService.getAllProjects()
    .subscribe(projects => this.projects = projects);
  }



}
