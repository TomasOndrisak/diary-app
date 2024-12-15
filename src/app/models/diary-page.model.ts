export class DiaryPage {
    constructor(
      public id: number,
      public date: Date,
      public title: string,
      public content: string,
      public isFavorite: boolean
    ) {}
  }