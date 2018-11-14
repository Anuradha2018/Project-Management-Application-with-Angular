import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExploreProject } from './../models/explore-project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  getAllProjects(): Observable<ExploreProject[]> {
      return this.http.get<ExploreProject[]>('/api/project.json');
  }
}
