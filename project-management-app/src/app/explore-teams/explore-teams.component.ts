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
  teams: ExploreTeam[];
  teamDetail: ExploreTeam;
  constructor(private exploreTeamService: ExploreTeamService) { }

  ngOnInit() {
    this.getTeams();
  }
  getTeams() {
    this.exploreTeamService.getExploreTeam()
    .subscribe((teams) => {
      this.teams = teams;
      this.getTeamDetail(this.teams[0].id);
  });
}
  getTeamDetail(id) {
    this.teamDetail = this.getTeamById(id);
  }
  getTeamById(id): ExploreTeam {
     for (let i = 0; i < this.teams.length; i++) {
     if (id === this.teams[i].id) {
        return this.teams[i];
      }
     }
  }

 }
