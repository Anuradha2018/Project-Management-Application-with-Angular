
import { Injectable } from '@angular/core';
import { ExploreLocation } from './../models/explore-location';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExploreLocationService {

  constructor(private http: HttpClient) { }

  getLocations(): Observable<ExploreLocation[]> {
    return this.http.get<ExploreLocation[]>('/api/explore-location.json');
}
}
