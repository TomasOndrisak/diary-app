import { Component } from '@angular/core';
import { MatFabAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { DiaryPage } from '../../models/diary-page.model';
import { CommonModule } from '@angular/common';
import { MockupDataService } from '../../models/mockup-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatFabAnchor, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private MockupDataService:MockupDataService) { }
  
  diaryPages: DiaryPage[] = this.MockupDataService.getDiaryPages().filter(x => x.isFavorite == true);
}
