import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingleProductService {
  
  constructor(private http: HttpClient) {}

  getSingleProduct(): Observable<[]> {
    return this.http.get<[]>('../../assets/json/data.json');
  }
}
