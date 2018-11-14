import { ExploreTeam } from './../models/explore-team';
import { ExploreProject } from './../models/explore-project';
import { Injectable } from '@angular/core';
import { ExploreLocation } from './../models/explore-location';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExploreLocationService {

  constructor(private http: HttpClient) { }
  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>('/api/explore-location.json');
}
}
