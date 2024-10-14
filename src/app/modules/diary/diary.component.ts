import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { DayNamePipe } from '../../services/pipes/day-name.pipe';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, DatePipe, DayNamePipe],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.scss'
})
export class DiaryComponent implements OnInit {

  constructor() { }

  DateOfWritting : Date = new Date();
  DayName: string = "";

  ngOnInit(): void {
   this.DayName = this.getDayName();
  }


  DaysOfWeekArray : string[] = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota', 'Nedeľa'];

  public getDayName = () : string => { return this.DaysOfWeekArray[this.DateOfWritting.getDay() - 1]; }


  public previousDay() {
    this.DateOfWritting = new Date(this.DateOfWritting.getTime() - 24 * 60 * 60 * 1000);
  }
  
  public nextDay() {
    this.DateOfWritting = new Date(this.DateOfWritting.getTime() + 24 * 60 * 60 * 1000);
  }
}
