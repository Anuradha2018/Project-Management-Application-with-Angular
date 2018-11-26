
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
  locations: ExploreLocation[];
  exploreProjects: ExploreProject[];
  exploreTeams: ExploreTeam[];
  projectDetail: ExploreProject;
  constructor(private exploreLocationService: ExploreLocationService,
    private exploreProjectService: ExploreProjectService, private exploreTeamService: ExploreTeamService) { }

  ngOnInit() {
    this.getExploreProject();
  }

  getExploreProject() {
    this.exploreProjectService.getExploreProjects()
      .subscribe(exploreProjects => this.exploreProjects = exploreProjects);
  }
  getProjectDetail(id) {
    this.projectDetail = this.getProjectById(id);
  }
  getProjectById(id): ExploreProject {
    for (let i = 0; i < this.exploreProjects.length; i++) {
      if (id === this.exploreProjects[i].id) {
        return this.exploreProjects[i];
      }
     }
  }

}
