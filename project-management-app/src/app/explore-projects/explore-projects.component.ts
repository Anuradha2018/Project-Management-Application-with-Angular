
import { ExploreTeamService } from './../services/explore-team.service';
import { ExploreProjectService } from './../services/explore-project.service';
import { ExploreLocationService } from './../services/explore-location.service';

import { ExploreTeam } from './../models/explore-team';
import { ExploreProject } from './../models/explore-project';
import { ExploreLocation} from './../models/explore-location';


import { Component, OnInit } from '@angular/core';

import { ExploreTeamsComponent } from './../explore-teams/explore-teams.component';
import { ExploreLocationsComponent } from './../explore-locations/explore-locations.component';
import { TechnologyComponent } from './../technology/technology.component';

@Component({
  selector: 'app-explore-projects',
  templateUrl: './explore-projects.component.html',
  styleUrls: ['./explore-projects.component.css']
})
export class ExploreProjectsComponent implements OnInit {
  projects: ExploreProject[];
  projectDetail: ExploreProject;

  constructor(private exploreProjectService: ExploreProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.exploreProjectService.getProjects()
      .subscribe((projects) => {
      this.projects = projects;
      this.getProjectDetail(this.projects[0].id);
      });
  }
  getProjectDetail(id) {
    this.projectDetail = this.getProjectById(id);
  }
  getProjectById(id): ExploreProject {
    for (let i = 0; i < this.projects.length; i++) {
      if (id === this.projects[i].id) {
        return this.projects[i];
      }
     }
  }

}
