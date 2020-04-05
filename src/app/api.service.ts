import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private localUrl = 'http://localhost:8080/note';
  constructor(private http: HttpClient) { }

  getNotes(): Observable<any>{
    return this.http.get(this.localUrl + "/list");
  }
  updateNote(note: Object): Observable<any>{
    return this.http.put(this.localUrl + "/", note);
  }
  createNote(note: Object): Observable<any>{
    alert("2 TEST: "+ note);
    return this.http.post(this.localUrl + "/", note);
  }
  deleteNote(noteId: number): Observable<any>{
    return this.http.delete(this.localUrl + "/" + noteId, { responseType: 'text' });
  }
}
