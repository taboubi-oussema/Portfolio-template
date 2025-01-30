import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  homeSection = [
    {
      image: 'assets/works-icon.svg',
      title: 'My works',
      subtitle: 'EXPLORE',
      icons: true,
    },
    {
      image: 'assets/test.svg',
      title: 'About me',
      subtitle: 'EXPLORE',
      icons: true,
    },
    {
      image: 'assets/works-icon.svg',
      title: 'Available for work',
      subtitle: 'Contact',
      icons: true,
    },
    {
      image: '',
      title: '',
      subtitle: '',
      icons: false,
    },
  ];
}
