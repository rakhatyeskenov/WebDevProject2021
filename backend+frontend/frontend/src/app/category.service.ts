import { Injectable } from '@angular/core';
import {categories} from './categories';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories = categories;
  constructor() { }
  getCategory(): Observable<any[]> {
    return of(this.categories);
  }

  // BASE_URl = 'http://localhost:8000';

  // constructor(private http: HttpClient) {
  // }

  // login(username, password): Observable<AuthToken> {
  //   return this.http.post<AuthToken>(`${this.BASE_URl}/api/login/`, {
  //     username,
  //     password
  //   });
  // }
  //
  // getCategories(): Observable<Category[]> {
  //   return this.http.get<Category[]>(`${this.BASE_URl}/api/categories/`);
  // }

}
