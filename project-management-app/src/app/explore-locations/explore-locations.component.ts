import { Technology } from './../models/technology';
import { ExploreTeamService } from './../services/explore-team.service';
import { ExploreProjectService } from './../services/explore-project.service';
import { ExploreLocationService } from './../services/explore-location.service';

import { ExploreTeam } from './../models/explore-team';
import { ExploreProject } from './../models/explore-project';
import { Location} from './../models/explore-location';

import { Component, OnInit } from '@angular/core';
import { ExploreTeamsComponent } from './../explore-teams/explore-teams.component';
import { ExploreProjectsComponent } from './../explore-projects/explore-projects.component';



@Component({
  selector: 'app-explore-locations',
  templateUrl: './explore-locations.component.html',
  styleUrls: ['./explore-locations.component.css']
})
export class ExploreLocationsComponent implements OnInit {
locations: Location[];
  constructor(private exploreLocationService: ExploreLocationService) { }

  ngOnInit() {
  }

}
