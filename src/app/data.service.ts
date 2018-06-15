import { DataModel, RootObject } from './data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://jsonplaceholder.typicode.com/users/';
  urlPosts = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getUsers() {
    // casting
    return this.http.get<DataModel>(this.url);
  }
  // casting
  getUser(userId) {
    return this.http.get<DataModel>(this.url + userId);  }
  // casting
  getPosts() {
    return this.http.get<RootObject>(this.urlPosts);
  }

}
