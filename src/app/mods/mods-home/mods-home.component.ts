import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Why is the sky blue', content: 'The sky blue because it is air' },
    {
      title: 'What does an orange taste like',
      content: 'An orange tastes like orange',
    },
    {
      title: 'What color is that cat?',
      content: 'The color of that cat is orange',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
