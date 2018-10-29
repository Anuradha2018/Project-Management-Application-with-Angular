
import { ExploreTeamService } from './../services/explore-team.service';
import { ExploreProjectService } from './../services/explore-project.service';
import { ExploreLocationService } from './../services/explore-location.service';

import { ExploreTeam } from './../models/explore-team';
import { ExploreProject } from './../models/explore-project';
import { Location} from './../models/explore-location';
import { Technology } from './../models/technology';


import { Component, OnInit } from '@angular/core';
import { ExploreTeamsComponent } from './../explore-teams/explore-teams.component';
import { ExploreProjectsComponent } from './../explore-projects/explore-projects.component';
import { TechnologyComponent } from './../technology/technology.component';



@Component({
  selector: 'app-explore-locations',
  templateUrl: './explore-locations.component.html',
  styleUrls: ['./explore-locations.component.css']
})
export class ExploreLocationsComponent implements OnInit {
locations: Location[];
exploreProjects: ExploreProject[];
locationDetail: Location;

  constructor(private exploreLocationService: ExploreLocationService, private exploreProjectService: ExploreProjectService) { }

  ngOnInit() {
    this.getLocations();
    this.getExploreProject();
  }
  getLocations() {
    this.exploreLocationService.getLocations()
    .subscribe((locations) => {
      this.locations = locations;
      this.getLocationDetail(this.locations[0].locationId);
    });
  }
  getExploreProject() {
    this.exploreProjectService.getExploreProjects()
      .subscribe(exploreProjects => this.exploreProjects = exploreProjects);
  }
  getLocationDetail(locationId) {
    this.locationDetail = this.getLocationById(locationId);
  }
  getLocationById(locationId): Location {
     for (let i = 0; i < this.locations.length; i++) {
      if (locationId === this.locations[i].locationId) {
        return this.locations[i];
      }
     }
  }

}
