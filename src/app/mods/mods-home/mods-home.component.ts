import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;
  items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue, because it reflect to the ocean.' },
    { title: 'What is HTML?', content: 'Hypertext Markup Language' },
    { title: 'What is CSS', content: 'Casscading Style Sheet' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
