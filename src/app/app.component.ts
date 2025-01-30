import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  skills: string[] = [
    'Dora', 'HTML & CSS', 'Figma', 'Prototyping',
    'Wireframing', 'UX', 'Adobe XD', 'UI Design'
  ];
}
