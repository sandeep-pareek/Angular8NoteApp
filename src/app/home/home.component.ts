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
  smartphone: any = [];
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
}
