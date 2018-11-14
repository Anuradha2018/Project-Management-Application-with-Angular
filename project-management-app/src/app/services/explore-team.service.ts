import { Injectable } from '@angular/core';
import { ExploreTeam } from './../models/explore-team';
import { ExploreProject } from './../models/explore-project';
import { ExploreLocation } from './../models/explore-location';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExploreTeamService {

  constructor(private http: HttpClient) { }
  getExploreTeam(): Observable<ExploreTeam[]> {
    return this.http.get<ExploreTeam[]>('/api/explore-team.json');
}
}
