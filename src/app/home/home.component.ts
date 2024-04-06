import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    public subjectsOffered = [
      'English',
      'Hindi',
      'Maths',
      'Science'
    ]

    public reasonToChooseMe = [
      'Reason 1',
      'Reason 2',
      'Reason 3',
      'Reason 4'
    ]
}
