
import { ExploreTeamService } from './../services/explore-team.service';
import { ExploreProjectService } from './../services/explore-project.service';
import { ExploreLocationService } from './../services/explore-location.service';

import { ExploreTeam } from './../models/explore-team';
import { ExploreProject } from './../models/explore-project';
import { ExploreLocation} from './../models/explore-location';



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
locations: ExploreLocation[];
exploreProjects: ExploreProject[];
locationDetail: ExploreLocation;

  constructor(private exploreLocationService: ExploreLocationService, private exploreProjectService: ExploreProjectService) { }

  ngOnInit() {
    this.getLocations();
  }
  getLocations() {
    this.exploreLocationService.getLocations()
    .subscribe((locations) => {
       this.locations = locations;
      this.getLocationDetail(this.locations[0].id);
    });
  }
  getLocationDetail(locationId) {
    this.locationDetail = this.getLocationById(locationId);
  }
  getLocationById(locationId): ExploreLocation {
     for (let i = 0; i < this.locations.length; i++) {
      if (locationId === this.locations[i].id) {
        return this.locations[i];
        }
     }
  }

 }
