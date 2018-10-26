import { Injectable } from '@angular/core';
import { Team } from './../models/team';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpTeam: HttpClient) { }
  getAllMembers(): Observable<Team[]> {
    return this.httpTeam.get<Team[]>('/api/team.json');
}
}
