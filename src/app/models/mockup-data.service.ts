import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockupDataService {

  constructor() { }

  getDiaryPages() {
    
    return [
      {
        id: 1,
        date: new Date('2023-10-14'),
        title: 'Muj milý kocourek Milan',
        content: 'Content of the first entry.Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.',
        isFavorite: true
      },
      {
        id: 2,
        date: new Date('2023-10-15'),
        title: 'Dnes me nasral',
        content: 'Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.',
        isFavorite: false
      },
      {
        id: 3,
        date: new Date('2023-10-16'),
        title: 'Dnes me nasral',
        content: 'Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.',
        isFavorite: true
      },
      {
        id: 4,
        date: new Date('2023-10-14'),
        title: 'Muj milý kocourek Milan',
        content: 'Content of the first entry.Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.',
        isFavorite: false,
      },
      {
        id: 5,
        date: new Date('2023-10-13'),
        title: 'Dnes me nasral',
        content: 'Content of the second entry.Content of the second entry.Content of the second entry.Content of the second entry.',
        isFavorite: false,
      },
      {
        id: 6,
        date: new Date('2023-10-12'),
        title: 'Smradlavej kocour',
        content: 'Content of the third',
        isFavorite: true,
  }
    ];
}
}
