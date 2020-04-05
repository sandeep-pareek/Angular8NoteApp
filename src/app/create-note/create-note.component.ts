import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, FormControl } from  '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  contactForm: FormGroup;
  note : { title, description, status, tags} = {title: '', description: '', status: '', tags: ''};

  constructor(private api: ApiService, private formBuilder: FormBuilder) {
    this.createContactForm();
  }
  
  createContactForm(){
    this.contactForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      status: new FormControl(),
      tags: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("1:: "+this.note.title);
    this.api.createNote(this.contactForm.value).subscribe((data: any[])=>{
      alert("Note response:: "+data);
    });
    this.note = {title: "", description: "", status: "", tags: ""};
  }
}
