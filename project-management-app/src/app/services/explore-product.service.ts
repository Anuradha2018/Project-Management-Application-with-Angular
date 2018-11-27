import { ExploreProduct } from './../models/explore-product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExploreProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<ExploreProduct[]> {
    return this.http.get<ExploreProduct[]>('/api/explore-product.json');
}

}
