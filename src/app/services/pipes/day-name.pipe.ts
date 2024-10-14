import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayName',
  standalone: true
})
export class DayNamePipe implements PipeTransform {
  transform(value: Date | string | number): string {
    let date: Date;

    if (value instanceof Date) {
      date = value;
    } else {
      date = new Date(value);
    }

    const days = [
      'Nedeľa',    
      'Pondelok',  
      'Utorok',    
      'Streda',    
      'Štvrtok',   
      'Piatok',    
      'Sobota',    
    ];

    return days[date.getDay()];
  }
}
