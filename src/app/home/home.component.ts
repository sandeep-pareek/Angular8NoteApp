import { Component, OnInit } from '@angular/core';
//import { ApiService } from 'api.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notes;
  selectedNote;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.notes = [];

    this.api.getNotes()
      .subscribe((data: any[])=> {
        // alert(data);
        this.notes = data;
        console.log(data);
      });
  }
  public selectNote(note){
    this.selectedNote = note;
  }

  public editNote(note){
    // alert("dited: " + note.title)
    this.api.updateNote(note).subscribe((data: any[])=>{
      const index = this.notes.indexOf(note, 0);
      if (index > -1) {
        this.notes.splice(index, 1);
        this.notes.splice(index, 0, data);
      }
      // this.notes.indexOf(data) === -1 ? this.notes.push(data):null;
    });
  }

  public deleteNote(note) {
    // alert("edited: " + note.title)
    this.api.deleteNote(note.id).subscribe((data: any[])=>{
      this.notes.splice(this.notes.indexOf(note), 1);
      // alert("update: " + data)
    });
  
  }
}
