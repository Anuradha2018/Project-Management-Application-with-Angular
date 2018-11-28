import { ExploreProgram } from './../models/explore-program';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExploreProgramService {

  constructor(private http: HttpClient) { }

  getPrograms(): Observable<ExploreProgram[]> {
    return this.http.get<ExploreProgram[]>('/api/explore-program.json');
}
}
