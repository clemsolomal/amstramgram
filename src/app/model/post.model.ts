export class Post {
    photo!: string;
    likes!: number;
    constructor(public title: string, public message: string) {
    }
  }