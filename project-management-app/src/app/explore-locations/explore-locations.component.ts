
import { ExploreLocationService } from './../services/explore-location.service';
import { ExploreLocation} from './../models/explore-location';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-explore-locations',
  templateUrl: './explore-locations.component.html',
  styleUrls: ['./explore-locations.component.css']
})
export class ExploreLocationsComponent implements OnInit {
locations: ExploreLocation[];
locationDetail: ExploreLocation;

  constructor(private exploreLocationService: ExploreLocationService) { }

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
