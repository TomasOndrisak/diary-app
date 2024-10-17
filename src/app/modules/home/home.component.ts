import { Component } from '@angular/core';
import { MatFabAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { DiaryPage } from '../../models/diary-page.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatFabAnchor, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

diaryPages: DiaryPage[] = [
  new DiaryPage(1, new Date('2023-10-14'), 'Muj milý kocourek Milan', 'Content of the first entry.Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.'),
  new DiaryPage(2, new Date('2023-10-15'), 'Dnes me nasral', 'Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.'),
  new DiaryPage(3, new Date('2023-10-16'), 'Smradlavej kocour', 'Content of the third entry.Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.'),
];

  constructor() { }

}
