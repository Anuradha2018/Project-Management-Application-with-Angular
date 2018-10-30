
import { ExploreTeamService } from './../services/explore-team.service';
import { ExploreProjectService } from './../services/explore-project.service';
import { ExploreLocationService } from './../services/explore-location.service';

import { ExploreTeam } from './../models/explore-team';
import { ExploreProject } from './../models/explore-project';
import { Location} from './../models/explore-location';
import { Technology } from './../models/technology';

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
  locations: Location[];
  exploreProjects: ExploreProject[];
  exploreTeams: ExploreTeam[];
  projectDetail: ExploreProject;
  constructor(private exploreLocationService: ExploreLocationService,
    private exploreProjectService: ExploreProjectService, private exploreTeamService: ExploreTeamService) { }

  ngOnInit() {
    this.getLocations();
    this.getExploreProject();
    this.getExploreTeam();
  }
  getLocations() {
    this.exploreLocationService.getLocations()
    .subscribe(locations => this.locations = locations);
  }
  getExploreProject() {
    this.exploreProjectService.getExploreProjects()
      .subscribe(exploreProjects => this.exploreProjects = exploreProjects);
  }
  getExploreTeam() {
    this.exploreTeamService.getExploreTeam()
    .subscribe(exploreTeams => this.exploreTeams = exploreTeams);
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
