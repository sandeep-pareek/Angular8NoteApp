import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const localUrl = 'http://localhost:8080/note/list';
// const localUrl = 'https://cors-anywhere.herokuapp.com/http://localhost:8080/note/list';
// const localUrl = "https://jsonplaceholder.typicode.com/todos/1";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get(localUrl);
  }
}
