import { ExploreTeamService } from './../services/explore-team.service';
import { ExploreProjectService } from './../services/explore-project.service';
import { ExploreLocationService } from './../services/explore-location.service';

import { ExploreTeam } from './../models/explore-team';
import { ExploreProject } from './../models/explore-project';
import { ExploreLocation} from './../models/explore-location';


import { Component, OnInit } from '@angular/core';
import { ExploreLocationsComponent } from './../explore-locations/explore-locations.component';
import { TechnologyComponent } from './../technology/technology.component';
import { ExploreProjectsComponent } from './../explore-projects/explore-projects.component';

@Component({
  selector: 'app-explore-teams',
  templateUrl: './explore-teams.component.html',
  styleUrls: ['./explore-teams.component.css']
})
export class ExploreTeamsComponent implements OnInit {
  locations: Location[];
  exploreProjects: ExploreProject[];
  exploreTeams: ExploreTeam[];
  teamDetail: ExploreTeam;
  constructor(private exploreLocationService: ExploreLocationService,
    private exploreProjectService: ExploreProjectService,
    private exploreTeamService: ExploreTeamService) { }

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
    .subscribe((exploreTeams) => {
      this.exploreTeams = exploreTeams;
      // this.getTeamDetail(this.exploreTeams[0].teamId);
  });
}
  getTeamDetail(teamId) {
    this.teamDetail = this.getTeamById(teamId);
    console.log(teamId);
  }
  getTeamById(teamId): ExploreTeam {
     for (let i = 0; i < this.exploreTeams.length; i++) {
     // if (teamId === this.exploreTeams[i].teamId) {
        return this.exploreTeams[i];
      }
     }
  }

// }
