import { Injectable } from '@angular/core';
import { ExploreTeam } from './../models/explore-team';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpTeam: HttpClient) { }
  getAllMembers(): Observable<ExploreTeam[]> {
    return this.httpTeam.get<ExploreTeam[]>('/api/team.json');
}
}
