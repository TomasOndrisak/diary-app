import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, DatePipe],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.scss'
})
export class DiaryComponent {

  constructor() { }

  DateOfWritting : Date = new Date();
  DaysOfWeekArray : string[] = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota', 'Nedeľa'];

  public getDayName = () : string => { return this.DaysOfWeekArray[this.DateOfWritting.getDay() - 1]; }

}
