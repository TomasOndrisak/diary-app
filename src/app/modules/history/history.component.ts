import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DiaryPage } from '../../models/diary-page.model';
import { MatMiniFabAnchor } from '@angular/material/button';
import { MockupDataService } from '../../models/mockup-data.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, MatMiniFabAnchor],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  constructor(private MockupDataService:MockupDataService) { }


  diaryPages: DiaryPage[] = this.MockupDataService.getDiaryPages();
  
  FavoriteSwitch(diaryPage: DiaryPage) {
    diaryPage.isFavorite = !diaryPage.isFavorite;
  }
}
