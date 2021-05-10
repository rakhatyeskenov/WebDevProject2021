import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikedService {
  LikedItems: any = [];
  public LikedListSubject = new BehaviorSubject([]);

  addToLiked(product) {
    this.LikedItems.push(product);
  }

  getItems() {
    return this.LikedItems;
  }

  removeCart = index => {
        const current = this.LikedListSubject.getValue();
        current.splice(index, 1);
        this.LikedListSubject.next(current);
    }

  constructor(
    private http: HttpClient
  ) { }
}
